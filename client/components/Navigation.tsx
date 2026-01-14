import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i]) {
          const rect = sections[i].getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setActiveSection(navItems[i].label.toLowerCase());
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-primary/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.05 }}
          className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          MK
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveSection(item.label.toLowerCase())}
              className={`text-sm font-semibold transition-colors relative group ${
                activeSection === item.label.toLowerCase()
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {item.label}

              {/* Underline animation */}
              <motion.span
                layoutId="underline"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={false}
                animate={{
                  opacity:
                    activeSection === item.label.toLowerCase() ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Mobile menu button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-primary"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-primary/20"
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={() => {
                setActiveSection(item.label.toLowerCase());
                setIsMenuOpen(false);
              }}
              whileHover={{ x: 5 }}
              className={`block py-2 font-semibold transition-colors ${
                activeSection === item.label.toLowerCase()
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
