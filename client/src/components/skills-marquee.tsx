import { cn } from "@/lib/utils";

const skills = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Framer Motion", 
  "PostgreSQL", "Three.js", "Design Systems", "UI/UX", "Figma", "WebGL"
];

export default function SkillsMarquee() {
  return (
    <div className="w-full overflow-hidden py-12 bg-background border-y border-border relative">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex whitespace-nowrap w-fit animate-marquee">
        {/* First Copy */}
        <div className="flex gap-16 items-center pr-16">
          {skills.map((skill, i) => (
            <div key={`s1-${i}`} className="flex items-center gap-4">
              <span className="text-4xl md:text-6xl font-display font-bold text-muted-foreground/20 hover:text-foreground transition-colors duration-500 cursor-default">
                {skill}
              </span>
              <span className="text-2xl text-primary">★</span>
            </div>
          ))}
        </div>
        
        {/* Second Copy for loop */}
        <div className="flex gap-16 items-center pr-16">
          {skills.map((skill, i) => (
            <div key={`s2-${i}`} className="flex items-center gap-4">
              <span className="text-4xl md:text-6xl font-display font-bold text-muted-foreground/20 hover:text-foreground transition-colors duration-500 cursor-default">
                {skill}
              </span>
              <span className="text-2xl text-primary">★</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
