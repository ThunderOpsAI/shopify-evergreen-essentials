import { motion } from "motion/react";
import { Plus, ShoppingCart, Heart } from "lucide-react";
import { PRODUCTS, Product } from "../constants";

import React from 'react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  key?: string | number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group"
      id={`product-${product.id}`}
    >
      <div className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-brand-sage-light mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {product.isNew && (
          <span className="absolute top-6 left-6 bg-brand-sage text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            New
          </span>
        )}
        
        {/* Quick Actions overlay */}
        <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          <button className="bg-white p-2 rounded-full shadow-lg hover:text-brand-sage transition-colors" id={`wishlist-${product.id}`}>
            <Heart size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Add to cart overlay (bottom) */}
        <div className="absolute inset-x-6 bottom-6 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button 
            onClick={() => onAddToCart(product)}
            className="w-full bg-brand-charcoal text-white py-3 rounded-2xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-brand-sage transition-colors shadow-xl"
            id={`add-to-cart-${product.id}`}
          >
            <ShoppingCart size={16} /> Add to Cart
          </button>
        </div>
      </div>
      
      <div className="px-1">
        <p className="text-[10px] text-brand-sage font-bold uppercase tracking-widest mb-1">{product.category}</p>
        <h3 className="text-brand-charcoal font-medium text-base mb-1 group-hover:text-brand-sage transition-colors">{product.name}</h3>
        <p className="font-medium text-brand-charcoal">${product.price.toFixed(2)}</p>
      </div>
    </motion.div>
  );
}

export default function NewArrivals({ onAddToCart }: { onAddToCart: (p: Product) => void }) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-brand-sage uppercase mb-4 block">
            The Fresh Collection
          </span>
          <h2 className="text-4xl font-semibold">New Arrivals</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {PRODUCTS.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-brand-offwhite border border-brand-charcoal/10 text-brand-charcoal px-10 py-4 rounded-full font-medium text-sm hover:border-brand-sage hover:text-brand-sage transition-all">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
