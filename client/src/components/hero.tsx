import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/dark_sleek_abstract_digital_fluid_background_for_developer_portfolio.png";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "98%", label: "Success Rate" },
];

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: "easeInOut" as const,
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10" />
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          src={heroImage} 
          alt="Abstract digital texture" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container px-6 md:px-12 relative z-20">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div className="max-w-4xl">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mb-6"
            >
              <span className="px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-mono uppercase tracking-wider">
                Built by AbdulHalim
              </span>
            </motion.div>

            <motion.h1 
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-8 tracking-tight"
            >
              Senior Full-Stack <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-muted-foreground">Software Developer</span>
            </motion.h1>

            <motion.div 
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed space-y-6"
            >
              <p>
                Hello, I'm <strong className="text-foreground">AbdulHalim</strong>, the mind behind <strong className="text-foreground">TechSolution</strong> — a leading-edge software development brand where innovation meets precision. I'm a Senior Full-Stack Software Developer with advanced expertise across the entire tech stack, from intuitive front-end interfaces to robust back-end systems.
              </p>
              <p>
                At TechSolution, I don't just write code — I engineer scalable solutions, design high-performance systems, and craft modern UI/UX experiences using tools like Figma. Every project I touch reflects a deep commitment to quality, clarity, and user-first design.
              </p>
            </motion.div>
            
            <motion.div 
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex flex-wrap gap-6 mb-16"
            >
              <a 
                href="#contact" 
                className="group flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-bold text-lg hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#work" 
                className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg border border-border hover:bg-secondary/50 transition-all hover:scale-105 active:scale-95"
              >
                View My Work
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border/50 pt-12"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground">{stat.value}</h3>
              <p className="text-sm md:text-base text-muted-foreground uppercase tracking-wide font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
