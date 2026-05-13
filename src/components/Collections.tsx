import { motion } from "motion/react";
import { CATEGORIES } from "../constants";

export default function Collections() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Shop by Collection</h2>
            <p className="text-brand-gray">Organized by room and routine.</p>
          </div>
          <button className="text-sm font-medium border-b border-brand-charcoal hover:text-brand-sage hover:border-brand-sage transition-all pb-1">
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category, index) => (
            <motion.a
              key={category.id}
              href={category.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[400px] overflow-hidden rounded-3xl"
              id={`category-${category.id}`}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-xl font-medium mb-1">{category.title}</h3>
                <span className="text-white/80 text-xs font-medium uppercase tracking-widest border-b border-white/40 pb-0.5 group-hover:border-white transition-all">
                  Browse Collection
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
