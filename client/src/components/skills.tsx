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
    <section id="skills" className="py-32 container px-6 md:px-12 relative">
      <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-2 inline-block px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/30 shadow-[0_0_10px_rgba(0,198,255,0.3)]">
            Technical Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 text-white">Skills & Technologies</h3>
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            I possess advanced expertise across the entire tech stack, constantly adapting to the latest technologies to build scalable, high-performance applications.
          </p>
          <div className="p-8 bg-[#0a0a1a]/50 rounded-2xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/50 transition-colors duration-500 shadow-[0_0_20px_rgba(112,66,248,0.1)]">
            <h4 className="text-2xl font-bold mb-4 text-white">Why Clients Trust TechSolution</h4>
            <ul className="space-y-4 text-gray-400">
              {["Clean, Maintainable Code", "Scalable Architecture", "User-Centric Design", "On-Time Delivery"].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-center gap-3"
                >
                  <span className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(0,198,255,0.8)]" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="space-y-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-bold text-white">{skill.name}</span>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + (index * 0.05) }}
                  className="text-cyan-400 font-mono"
                >
                  {skill.level}%
                </motion.span>
              </div>
              <div className="h-2 w-full bg-[#1a1a2e] rounded-full overflow-hidden border border-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full shadow-[0_0_10px_rgba(112,66,248,0.5)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
