import { Instagram, Facebook, Twitter, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Logo & Newsletter */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-semibold tracking-tighter uppercase italic">
              Evergreen<span className="font-light not-italic">.</span>
            </h2>
            <div className="max-w-md">
              <h4 className="text-xl font-medium mb-4">Join the Collective</h4>
              <p className="text-white/60 mb-6 text-sm">
                Subscribe for exclusive launches, sustainability tips, and 10% off your first order.
              </p>
              <form className="relative" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-sm focus:outline-none focus:border-brand-sage transition-colors pr-14"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-2 bg-brand-sage p-2 rounded-full hover:bg-white hover:text-brand-sage transition-all"
                  id="newsletter-submit"
                >
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-xs tracking-widest uppercase text-brand-sage">Shop</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bathroom</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Laundry</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cleaning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold text-xs tracking-widest uppercase text-brand-sage">Information</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-6 text-white/40">
            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
          </div>
          <p className="text-white/40 text-[10px] uppercase tracking-widest">
            © 2026 Evergreen Essentials. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Payment icons placeholders */}
            <div className="w-10 h-6 bg-white/10 rounded" />
            <div className="w-10 h-6 bg-white/10 rounded" />
            <div className="w-10 h-6 bg-white/10 rounded" />
          </div>
        </div>
      </div>
    </footer>
  );
}
