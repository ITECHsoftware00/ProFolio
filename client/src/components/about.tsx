import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 bg-secondary/30">
      <div className="container px-6 md:px-12">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-6 text-muted-foreground">About</h2>
          </div>
          
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif leading-tight mb-12"
            >
              I am a multidisciplinary designer and developer based in New York. I believe that good design is invisible—it's about creating intuitive, seamless experiences that solve real problems while delighting the user.
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-sm font-bold uppercase mb-4 border-b border-border pb-2">Services</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Art Direction</li>
                  <li>UI/UX Design</li>
                  <li>Frontend Development</li>
                  <li>Brand Identity</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-bold uppercase mb-4 border-b border-border pb-2">Clients</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Acme Corp</li>
                  <li>Starlight Studios</li>
                  <li>Future Ventures</li>
                  <li>Museum of Design</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase mb-4 border-b border-border pb-2">Connect</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Email</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
