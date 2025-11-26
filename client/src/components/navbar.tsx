import { Link } from "wouter";
import { motion } from "framer-motion";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-background/80 backdrop-blur-md border-b border-border/40"
    >
      <Link href="/">
        <a className="text-xl font-serif font-bold tracking-tighter hover:opacity-70 transition-opacity">
          ALEX.DEV
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
      </div>

      <div className="md:hidden">
        {/* Mobile menu trigger would go here */}
        <span className="text-sm font-medium">Menu</span>
      </div>
    </motion.nav>
  );
}
