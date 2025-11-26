import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/minimalist_architectural_abstract_texture_for_portfolio_background.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-serif font-medium leading-[0.9] tracking-tight mb-8">
            Designing <br />
            <span className="text-muted-foreground italic">Digital</span> <br />
            Spaces.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed mb-12">
            I craft high-end digital experiences with a focus on architectural precision and aesthetic minimalism.
          </p>
          
          <div className="flex gap-6">
             <a href="#work" className="text-sm font-bold uppercase tracking-widest border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors">
               View Projects
             </a>
             <a href="#contact" className="text-sm font-bold uppercase tracking-widest border-b border-transparent pb-1 hover:border-foreground transition-colors">
               Get in Touch
             </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[60vh] w-full"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-background/20 to-transparent z-10" />
          <img 
            src={heroImage} 
            alt="Abstract architectural texture" 
            className="w-full h-full object-cover grayscale-[0.2] contrast-[1.05]"
          />
        </motion.div>
      </div>
    </section>
  );
}
