import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "React/Next.js", level: 95 },
  { name: "Node.js/Express", level: 90 },
  { name: "TypeScript", level: 88 },
  { name: "Python/Django", level: 85 },
  { name: "PostgreSQL/MongoDB", level: 87 },
  { name: "AWS/Cloud", level: 82 },
  { name: "UI/UX Design", level: 90 },
  { name: "DevOps/CI/CD", level: 80 }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 container px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Technical Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">Skills & Technologies</h3>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            I possess advanced expertise across the entire tech stack, constantly adapting to the latest technologies to build scalable, high-performance applications.
          </p>
          <div className="p-8 bg-secondary/10 rounded-2xl border border-border">
            <h4 className="text-2xl font-bold mb-4">Why Clients Trust TechSolution</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Clean, Maintainable Code
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Scalable Architecture
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                User-Centric Design
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                On-Time Delivery
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-bold">{skill.name}</span>
                <span className="text-muted-foreground font-mono">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
