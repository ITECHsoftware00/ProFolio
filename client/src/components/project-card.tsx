import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MouseEvent } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  index: number;
}

export default function ProjectCard({ title, description, tags, image, link, index }: ProjectCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative grid md:grid-cols-[1.5fr_1fr] gap-8 items-center p-6 rounded-3xl border border-border/50 bg-secondary/10 hover:bg-secondary/20 transition-colors duration-500 overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted shadow-lg group-hover:shadow-2xl transition-all duration-500">
        <motion.div 
          className="absolute inset-0 bg-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" 
        />
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center h-full relative z-10">
        <a href={link} className="group/link inline-flex items-center gap-2 mb-4">
          <h3 className="text-3xl md:text-4xl font-display font-bold group-hover/link:text-primary transition-colors">
            {title}
          </h3>
          <ArrowUpRight className="w-6 h-6 opacity-50 group-hover/link:opacity-100 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all" />
        </a>
        
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="rounded-full px-4 py-1 border-border bg-background/50 text-muted-foreground hover:text-foreground transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
