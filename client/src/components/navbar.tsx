import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md py-4 border-b border-border/40" : "bg-transparent"
      )}
    >
      <Link href="/">
        <a className="text-xl font-display font-bold tracking-tighter hover:text-primary transition-colors">
          ALEX<span className="text-primary">.</span>DEV
        </a>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a 
            key={link.href} 
            href={link.href}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.label}
          </a>
        ))}
        
        <a 
          href="#contact" 
          className="px-5 py-2 rounded-full bg-foreground text-background text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Let's Talk
        </a>
      </div>

      <div className="md:hidden">
        <span className="text-sm font-medium">Menu</span>
      </div>
    </motion.nav>
  );
}
