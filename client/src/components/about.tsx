import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Full-Stack Developer & <br />
              <span className="text-muted-foreground">Creative Thinker</span>
            </h3>
            
            <div className="flex gap-4 mb-8">
               <a href="https://linkedin.com" target="_blank" className="text-sm font-bold uppercase hover:text-primary transition-colors">LinkedIn</a>
               <a href="https://github.com" target="_blank" className="text-sm font-bold uppercase hover:text-primary transition-colors">GitHub</a>
               <a href="https://twitter.com" target="_blank" className="text-sm font-bold uppercase hover:text-primary transition-colors">Twitter</a>
            </div>
          </div>
          
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm Alex, a proactive full-stack developer passionate about creating dynamic web experiences. 
              From frontend to backend, I thrive on solving complex problems with clean, efficient code.
            </p>
            <p>
              My expertise spans React, Next.js, and Node.js, and I'm always eager to learn more.
              When I'm not immersed in work, I'm exploring new ideas and staying curious. 
              Life's about balance, and I love embracing every part of it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
