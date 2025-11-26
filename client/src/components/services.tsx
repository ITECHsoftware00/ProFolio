import { motion } from "framer-motion";
import { Database, Server, Figma, Cloud, Monitor, Globe } from "lucide-react";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 50,
      damping: 20
    } as const
  },
};

export default function Services() {
  return (
    <section id="services" className="py-32 bg-secondary/5">
      <div className="container px-6 md:px-12">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-widest text-primary mb-2"
          >
            What I Do
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Development Services
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            From concept to deployment, I provide end-to-end solutions that drive business growth.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-secondary/10 border-border hover:bg-secondary/20 transition-colors h-full group cursor-default hover:shadow-2xl hover:shadow-primary/5 duration-500">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-500">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
