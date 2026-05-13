import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden pt-16">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000"
          alt="Evergreen Hero"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-offwhite/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-brand-sage uppercase mb-4">
            Sustainable Home Essentials
          </span>
          <h1 className="text-5xl sm:text-7xl font-semibold leading-[0.95] text-brand-charcoal mb-6">
            Elevate Your <br /> Everyday Routine<span className="text-brand-sage">.</span>
          </h1>
          <p className="text-lg text-brand-charcoal/70 mb-10 leading-relaxed font-light">
            Modern home essentials designed with a sustainable edge. Practical, 
            premium, and kinder to the planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-brand-charcoal text-white px-8 py-4 rounded-full font-medium text-sm flex items-center justify-center gap-2 hover:bg-brand-sage transition-colors shadow-lg shadow-brand-charcoal/10"
              id="hero-shop-all"
            >
              Shop New Arrivals <ArrowRight size={16} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/80 backdrop-blur-sm border border-brand-charcoal/10 px-8 py-4 rounded-full font-medium text-sm flex items-center justify-center gap-2 hover:bg-white transition-colors"
              id="hero-our-story"
            >
              Our Story
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-sage to-transparent" />
      </motion.div>
    </section>
  );
}
