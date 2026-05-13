import { ShoppingBag, Search, Menu, X, User } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-offwhite/80 backdrop-blur-md border-b border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-charcoal hover:text-brand-sage transition-colors p-2"
              id="mobile-menu-btn"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-sm font-medium tracking-wide hover:text-brand-sage transition-colors">Shop All</a>
            <a href="#" className="text-sm font-medium tracking-wide hover:text-brand-sage transition-colors">Best Sellers</a>
            <a href="#" className="text-sm font-medium tracking-wide hover:text-brand-sage transition-colors">Our Story</a>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-brand-charcoal uppercase italic">
              Evergreen<span className="font-light not-italic">.</span>
            </h1>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button className="text-brand-charcoal hover:text-brand-sage transition-colors p-2 hidden sm:block" id="search-btn">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button className="text-brand-charcoal hover:text-brand-sage transition-colors p-2 hidden sm:block" id="user-btn">
              <User size={20} strokeWidth={1.5} />
            </button>
            <button 
              className="relative text-brand-charcoal hover:text-brand-sage transition-colors p-2"
              onClick={onOpenCart}
              id="cart-btn"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-brand-sage text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-brand-offwhite">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-offwhite border-b border-brand-charcoal/5"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <a href="#" className="block text-lg font-medium">Shop All</a>
              <a href="#" className="block text-lg font-medium">Categories</a>
              <a href="#" className="block text-lg font-medium">Best Sellers</a>
              <a href="#" className="block text-lg font-medium">Sustainability</a>
              <a href="#" className="block text-lg font-medium">Account</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
