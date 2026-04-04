import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const links = ["About", "Projects", "Services", "Contact"];
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="text-xl font-bold text-gradient">
          {"<abhishek />"}
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Let's Talk
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-border"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold text-center hover:opacity-90 transition-opacity"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
