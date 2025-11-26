import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#testimonials", label: "Testimonials" },
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
        scrolled ? "bg-[#030014]/70 backdrop-blur-md py-4 border-b border-purple-500/20 shadow-[0_0_20px_rgba(112,66,248,0.15)]" : "bg-transparent"
      )}
    >
      <Link href="/">
        <a className="text-xl font-display font-bold tracking-tighter hover:text-cyan-400 transition-colors text-white">
          TechSolution<span className="text-cyan-400">.</span>
        </a>
      </Link>

      <div className="hidden lg:flex items-center gap-8">
        {links.map((link) => (
          <a 
            key={link.href} 
            href={link.href}
            className="text-sm font-medium text-gray-300 hover:text-white hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all"
          >
            {link.label}
          </a>
        ))}
        
        <a 
          href="#contact" 
          className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-cyan-400 hover:scale-105 transition-all shadow-[0_0_10px_rgba(255,255,255,0.3)]"
        >
          Get In Touch
        </a>
      </div>

      <div className="lg:hidden">
        <a href="#contact" className="text-sm font-bold text-white">Menu</a>
      </div>
    </motion.nav>
  );
}
