import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ProjectCard from "@/components/project-card";
import About from "@/components/about";
import Contact from "@/components/contact";

const projects = [
  {
    title: "Ethereal Residences",
    category: "Web Design / Development",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
  },
  {
    title: "Mono Audio",
    category: "Product Design",
    year: "2023",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Kinetic Typography",
    category: "Motion Design",
    year: "2023",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  },
  {
    title: "Urban Oasis",
    category: "Brand Identity",
    year: "2022",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="work" className="py-32 container px-6 md:px-12">
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-4xl md:text-5xl font-serif">Selected Work</h2>
            <span className="text-sm text-muted-foreground hidden md:block">(2022 — 2024)</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </section>
        
        <About />
        <Contact />
      </main>
      
      <footer className="py-8 border-t border-border text-center text-sm text-muted-foreground">
        <p>© 2024 Alex Designer. All rights reserved.</p>
      </footer>
    </div>
  );
}
