# Stage 1: build
FROM node:18-alpine AS builder
WORKDIR /app

# Copy root package files
COPY package*.json ./
# Copy client/server package files if present
COPY client/package*.json ./client/
COPY server/package*.json ./server/

# Install deps for root, client and server
RUN npm ci
RUN npm --prefix ./client ci || true
RUN npm --prefix ./server ci || true

# Copy source
COPY . .

# Build client and server
RUN npm --prefix ./client run build || true
RUN npm --prefix ./server run build || true

# Stage 2: production image
FROM node:18-alpine
WORKDIR /app

# Copy server app and client build from builder
COPY --from=builder /app/server/dist ./server/dist
COPY --from=builder /app/client/dist ./client/dist
COPY --from=builder /app/server/package*.json ./server/

# Install production deps for server (if package.json exists)
RUN if [ -f /app/server/package.json ]; then npm --prefix ./server ci --omit=dev; fi

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000
CMD ["node", "server/dist/index.js"]