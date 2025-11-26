import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ProjectCard from "@/components/project-card";
import Services from "@/components/services";
import Skills from "@/components/skills";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";

const projects = [
  {
    title: "Future Fitness Platform",
    description: "Modern fitness coaching platform with personalized workout plans and real-time coaching.",
    tags: ["React", "Node.js", "WebRTC", "MongoDB"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop",
    link: "https://www.future.co/"
  },
  {
    title: "Family Law Solutions",
    description: "Professional legal services website specializing in child custody and family law matters.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Tailwind"],
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2612&auto=format&fit=crop",
    link: "https://familylawsolutionsmn.com/"
  },
  {
    title: "Gordon Ramsay Restaurants",
    description: "High-end restaurant chain website with location finder and reservation system.",
    tags: ["React", "Express", "MySQL", "Mapbox"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop",
    link: "https://www.gordonramsayrestaurants.com/en/us"
  },
  {
    title: "Houzz Design Platform",
    description: "Comprehensive home design and renovation platform with professional tools.",
    tags: ["Vue.js", "Three.js", "AWS", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop",
    link: "https://www.houzz.com/"
  },
  {
    title: "EventSource Canada",
    description: "Complete event planning and vendor management platform for Toronto and GTA.",
    tags: ["Angular", "Firebase", "Stripe", "Google Maps"],
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2669&auto=format&fit=crop",
    link: "https://www.eventsource.ca/"
  },
  {
    title: "Trinity Solar Solutions",
    description: "Solar panel installation and energy management platform with consultation booking.",
    tags: ["Next.js", "Prisma", "Vercel", "Stripe"],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2672&auto=format&fit=crop",
    link: "https://www.trinitysolar.com/"
  },
  {
    title: "Hotwire Travel Platform",
    description: "Travel and hotel booking platform with real-time availability and deals.",
    tags: ["React", "Node.js", "Redis", "Payment APIs"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2674&auto=format&fit=crop",
    link: "https://www.hotwire.com/"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        
        <section id="work" className="py-32 container px-6 md:px-12">
          <div className="mb-20">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Recent Projects</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Featured Development Work</h3>
          </div>
          
          <div className="space-y-16">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
          
          <div className="mt-20 text-center">
             <a href="#contact" className="inline-flex items-center gap-2 border-b border-foreground pb-1 font-bold hover:text-muted-foreground transition-colors">
               View All Projects <span className="text-xl">→</span>
             </a>
          </div>
        </section>
        
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      
      <footer className="py-12 border-t border-border bg-secondary/5">
        <div className="container px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">© 2024 TechSolution. Built by AbdulHalim.</p>
          
          <div className="flex gap-6">
            <a href="https://github.com/abdulhalim" target="_blank" className="text-sm text-muted-foreground hover:text-primary">GitHub</a>
            <a href="https://www.linkedin.com/in/abdul-halim-1aba17374" target="_blank" className="text-sm text-muted-foreground hover:text-primary">LinkedIn</a>
            <span className="text-sm text-muted-foreground">tsolution418@gmail.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
