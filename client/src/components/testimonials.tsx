import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Michael Davis",
    role: "Founder, Apex Consulting",
    content: "Aayush is an artist with code. We went from 'I want something high-tech' to a fully built, high-ranking website in just over a week.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Jennifer Wilson",
    role: "Founder, Blue Harbor",
    content: "Simply the best developer I've worked with. He took our design requirements and quite literally ran with them.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Robert Johnson",
    role: "Startup Agency Owner",
    content: "Quick to respond, very professional, and delivered our fully SEO-optimized site ahead of schedule.",
    image: "https://randomuser.me/api/portraits/men/86.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 container px-6 md:px-12">
      <div className="mb-16">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Testimonials</h2>
        <h3 className="text-3xl md:text-4xl font-display font-bold">Word on the street</h3>
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
            <Card className="bg-secondary/30 border-border h-full backdrop-blur-sm hover:bg-secondary/50 transition-colors">
              <CardContent className="p-8 flex flex-col h-full justify-between gap-6">
                <p className="text-lg text-muted-foreground leading-relaxed">"{t.content}"</p>
                
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border border-border">
                    <AvatarImage src={t.image} alt={t.name} />
                    <AvatarFallback>{t.name[0]}</AvatarFallback>
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
    </section>
  );
}
