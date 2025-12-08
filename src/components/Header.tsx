import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="heading-md text-primary">SAKURA</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#menu" className="body-md text-foreground hover:text-accent transition-colors">
              Menu
            </a>
            <a href="#about" className="body-md text-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="#location" className="body-md text-foreground hover:text-accent transition-colors">
              Location
            </a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors body-md font-semibold">
              Order Online
            </button>
            <button className="px-6 py-2 rounded-lg bg-accent text-accent-foreground hover:opacity-90 transition-opacity body-md font-semibold">
              Book a Table
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
              <a
                href="#menu"
                className="body-md text-foreground hover:text-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </a>
              <a
                href="#about"
                className="body-md text-foreground hover:text-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#location"
                className="body-md text-foreground hover:text-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Location
              </a>
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <button className="px-6 py-2 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors body-md font-semibold">
                  Order Online
                </button>
                <button className="px-6 py-2 rounded-lg bg-accent text-accent-foreground hover:opacity-90 transition-opacity body-md font-semibold">
                  Book a Table
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}