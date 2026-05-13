/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Minus, Plus, Trash2 } from "lucide-react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collections from "./components/Collections";
import NewArrivals from "./components/NewArrivals";
import TrustStrip from "./components/TrustStrip";
import BrandStory from "./components/BrandStory";
import Footer from "./components/Footer";
import { Product } from "./constants";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen">
      <Navbar cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
      
      <main>
        <Hero />
        <TrustStrip />
        <Collections />
        <NewArrivals onAddToCart={addToCart} />
        <BrandStory />
      </main>

      <Footer />

      {/* Cart Sidebar Overlay */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 bg-brand-charcoal/40 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[70] shadow-2l flex flex-col"
            >
              <div className="p-6 border-b border-brand-charcoal/5 flex justify-between items-center">
                <h2 className="text-xl font-semibold uppercase tracking-tight italic">
                  Your Cart <span className="text-brand-sage font-light not-italic">({cartCount})</span>
                </h2>
                <button
                  onClick={() => setCartOpen(false)}
                  className="p-2 hover:bg-brand-sage-light rounded-full transition-colors"
                  id="close-cart"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-16 h-16 bg-brand-sage-light rounded-full flex items-center justify-center text-brand-sage">
                      <Trash2 size={32} strokeWidth={1} />
                    </div>
                    <p className="text-brand-gray">Your cart is empty.</p>
                    <button 
                      onClick={() => setCartOpen(false)}
                      className="text-brand-sage font-medium border-b border-brand-sage pb-0.5"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex gap-4 group">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-brand-sage-light border border-brand-charcoal/5">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1 space-y-1">
                        <h4 className="font-medium text-sm text-brand-charcoal">{item.name}</h4>
                        <p className="text-xs text-brand-gray">${item.price.toFixed(2)}</p>
                        <div className="flex items-center gap-3 pt-2">
                          <div className="flex items-center border border-brand-charcoal/10 rounded-full px-2 py-1">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 hover:text-brand-sage transition-colors"
                              id={`decrease-${item.id}`}
                            >
                              <Minus size={14} />
                            </button>
                            <span className="text-xs font-medium w-6 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 hover:text-brand-sage transition-colors"
                              id={`increase-${item.id}`}
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <button 
                            onClick={() => updateQuantity(item.id, -item.quantity)}
                            className="text-[10px] uppercase font-bold text-red-500/60 hover:text-red-500 tracking-widest transition-colors"
                            id={`remove-${item.id}`}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="text-sm font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t border-brand-charcoal/5 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-brand-gray text-sm">Subtotal</span>
                    <span className="text-xl font-semibold">${cartTotal.toFixed(2)}</span>
                  </div>
                  <p className="text-[10px] text-brand-gray italic text-center">
                    Shipping and taxes calculated at checkout
                  </p>
                  <button className="w-full bg-brand-charcoal text-white py-4 rounded-full font-medium shadow-xl hover:bg-brand-sage transition-colors">
                    Checkout Now
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

