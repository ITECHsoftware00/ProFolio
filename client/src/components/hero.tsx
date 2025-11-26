import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/dark_sleek_abstract_digital_fluid_background_for_developer_portfolio.png";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10" />
        <img 
          src={heroImage} 
          alt="Abstract digital texture" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="container px-6 md:px-12 relative z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-mono uppercase tracking-wider">
              Available for freelance
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-8 tracking-tight"
          >
            I help founders turn <br />
            <span className="text-muted-foreground">ideas into seamless</span> <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">digital experiences.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          >
            A Full Stack Creative Developer based in New York. I build accessible, pixel-perfect, and performant web experiences.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-6"
          >
             <a 
               href="#contact" 
               className="group flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-bold text-lg hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95"
             >
               Let's Connect
               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </a>
             <a 
               href="#work" 
               className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg border border-border hover:bg-secondary/50 transition-all hover:scale-105 active:scale-95"
             >
               View Work
             </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
