import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/deep_space_universe_background_with_stars_and_nebula_for_portfolio.png";
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
      ease: "easeInOut" as any,
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030014]/50 to-[#030014] z-10" />
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          src={heroImage} 
          alt="Abstract digital texture" 
          className="w-full h-full object-cover"
        />
        
        {/* Animated Stars/Particles Simulation */}
        <div className="absolute inset-0 z-0 opacity-50">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-white rounded-full"
                    style={{
                        width: Math.random() * 3 + 'px',
                        height: Math.random() * 3 + 'px',
                        top: Math.random() * 100 + '%',
                        left: Math.random() * 100 + '%',
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0.5, 1.5, 0.5],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 2
                    }}
                />
            ))}
        </div>
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
              <span className="px-3 py-1 rounded-full border border-secondary/50 bg-secondary/10 text-secondary text-sm font-mono uppercase tracking-wider shadow-[0_0_15px_rgba(0,198,255,0.3)]">
                Welcome to my universe
              </span>
            </motion.div>

            <motion.h1 
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-8 tracking-tight text-white drop-shadow-[0_0_10px_rgba(112,66,248,0.5)]"
            >
              Senior Full-Stack <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Software Developer
              </span>
            </motion.h1>

            <motion.div 
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed space-y-6"
            >
              <p>
                Hello, I'm <strong className="text-white">AbdulHalim</strong>, the mind behind <strong className="text-white">TechSolution</strong> — a leading-edge software development brand where innovation meets precision. I'm a Senior Full-Stack Software Developer with advanced expertise across the entire tech stack.
              </p>
              <p>
                I craft beautiful, interactive web experiences with modern technologies, bridging the gap between design and development.
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
                className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(0,198,255,0.5)]"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#work" 
                className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/10 transition-all hover:scale-105 active:scale-95 text-white backdrop-blur-sm"
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
          className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white">{stat.value}</h3>
              <p className="text-sm md:text-base text-gray-400 uppercase tracking-wide font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
