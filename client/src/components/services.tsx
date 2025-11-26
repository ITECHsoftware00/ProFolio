import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Figma, Cloud, Monitor, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Full-Stack Web Development",
    description: "End-to-end web solutions with modern frameworks like React, Next.js, and Node.js.",
    icon: Globe
  },
  {
    title: "System Architecture & API Design",
    description: "Scalable backend systems and RESTful APIs designed for high performance.",
    icon: Server
  },
  {
    title: "Mobile-Responsive Interfaces",
    description: "Pixel-perfect responsive designs optimized for all devices and screen sizes.",
    icon: Monitor
  },
  {
    title: "Backend Logic & Database Management",
    description: "Robust server-side logic and database optimization using PostgreSQL and MongoDB.",
    icon: Database
  },
  {
    title: "UI/UX Design with Figma",
    description: "User-centered design and prototyping to ensure clarity and usability.",
    icon: Figma
  },
  {
    title: "Deployment & Cloud Integration",
    description: "Automated deployment pipelines (CI/CD) and cloud infrastructure on AWS.",
    icon: Cloud
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-secondary/5">
      <div className="container px-6 md:px-12">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">What I Do</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Development Services</h3>
          <p className="text-xl text-muted-foreground">
            From concept to deployment, I provide end-to-end solutions that drive business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-secondary/10 border-border hover:bg-secondary/20 transition-colors h-full group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
