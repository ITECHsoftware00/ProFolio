import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ProjectCard from "@/components/project-card";
import About from "@/components/about";
import Contact from "@/components/contact";
import SkillsMarquee from "@/components/skills-marquee";
import Testimonials from "@/components/testimonials";

const projects = [
  {
    title: "Next Venture",
    description: "A space for entrepreneurs to pitch ideas, explore others, and gain exposure with clean design.",
    tags: ["Next.js", "React", "Sanity", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Finote App",
    description: "An intuitive mobile companion for organizing your digital wallets and analyzing your financial health.",
    tags: ["React Native", "Expo", "Firebase", "Zustand"],
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2668&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Zenith Minds",
    description: "A platform connecting students and instructors for enhanced learning experiences.",
    tags: ["Next.js", "Express", "MongoDB", "TurboRepo"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2574&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "StarForge",
    description: "A sleek AI SaaS landing page with a user-friendly design that enhances engagement.",
    tags: ["React", "TypeScript", "Vite", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
    link: "#"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <SkillsMarquee />
        
        <section id="work" className="py-32 container px-6 md:px-12">
          <div className="mb-20">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Featured Case Studies</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Curated Work</h3>
          </div>
          
          <div className="space-y-16">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
          
          <div className="mt-20 text-center">
             <a href="#" className="inline-flex items-center gap-2 border-b border-foreground pb-1 font-bold hover:text-muted-foreground transition-colors">
               View All Projects <span className="text-xl">→</span>
             </a>
          </div>
        </section>
        
        <About />
        <Testimonials />
        <Contact />
      </main>
      
      <footer className="py-12 border-t border-border">
        <div className="container px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">© 2024 Alex Developer. All rights reserved.</p>
          
          <div className="flex gap-6">
            <span className="text-sm text-muted-foreground">New York, USA</span>
            <span className="text-sm text-muted-foreground">hello@alex.dev</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
