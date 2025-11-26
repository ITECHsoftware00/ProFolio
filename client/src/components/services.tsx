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
    } as any
  },
};

export default function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[#030014] z-0" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#030014] to-[#030014] z-0" />

      <div className="container px-6 md:px-12 relative z-10">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-2 shadow-[0_0_10px_rgba(0,198,255,0.3)] inline-block px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/30"
          >
            What I Do
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 text-white"
          >
            Development Services
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400"
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
              <Card className="bg-[#0a0a1a]/50 border-purple-500/20 backdrop-blur-sm hover:bg-[#11112b]/80 transition-all duration-500 h-full group cursor-default hover:shadow-[0_0_30px_rgba(112,66,248,0.15)] hover:border-purple-500/50">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20 border border-purple-500/30 flex items-center justify-center mb-4 text-white group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-[0_0_15px_rgba(112,66,248,0.3)]">
                    <service.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
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
