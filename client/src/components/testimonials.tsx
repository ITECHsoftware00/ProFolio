import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "James A.",
    role: "Startup Founder",
    content: "Working with AbdulHalim was a game changer. He understood our needs better than we did and delivered ahead of schedule.",
    initial: "J"
  },
  {
    name: "Fatima M.",
    role: "Product Manager",
    content: "TechSolution brought our product vision to life with clean code, pixel-perfect UI, and smart engineering.",
    initial: "F"
  },
  {
    name: "Kelvin O.",
    role: "Tech Lead",
    content: "What impressed me most was AbdulHalim's communication and his eye for detail — his Figma designs were spot on.",
    initial: "K"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-secondary/5">
      <div className="container px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Why Clients Trust TechSolution</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold">Client Success Stories</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-background border-border h-full relative overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16" />
                </div>
                <CardContent className="p-8 flex flex-col h-full justify-between gap-8">
                  <p className="text-lg text-muted-foreground leading-relaxed relative z-10">"{t.content}"</p>
                  
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border border-border bg-secondary">
                      <AvatarFallback className="text-foreground font-bold">{t.initial}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-foreground">{t.name}</h4>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
