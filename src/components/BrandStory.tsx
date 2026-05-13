import { motion } from "motion/react";

export default function BrandStory() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-brand-sage uppercase">
              Our Philosophy
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">
              Essentials for a <br /> More Conscious Home
            </h2>
            <p className="text-brand-charcoal/70 leading-relaxed text-lg font-light">
              We believe that the products you use every day should be as beautiful as they are practical. 
              Evergreen Essentials was born from a desire to bridge the gap between high-end design 
              and sustainable living.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <h4 className="font-semibold text-lg mb-2">Eco-Conscious</h4>
                <p className="text-sm text-brand-gray">Reducing waste through high-quality reusable designs.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Modern Minimal</h4>
                <p className="text-sm text-brand-gray">Sleek aesthetics that complement any contemporary home.</p>
              </div>
            </div>
            <button className="bg-brand-charcoal text-white px-8 py-4 rounded-full font-medium text-sm hover:bg-brand-sage transition-colors">
              Learn More About Us
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px]"
          >
            <img
              src="https://images.unsplash.com/photo-1594142465967-df5963389a3f?auto=format&fit=crop&q=80&w=1200"
              alt="Sustainable Lifestyle"
              className="w-full h-full object-cover rounded-[3rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 bg-brand-sage text-white p-10 rounded-[2.5rem] hidden sm:block max-w-[240px]">
              <p className="text-2xl font-display font-medium leading-none mb-2">95%</p>
              <p className="text-xs opacity-80 leading-relaxed">Of our products are made with 100% recyclable or biodegradable materials.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
