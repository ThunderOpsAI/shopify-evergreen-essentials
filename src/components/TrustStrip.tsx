import { ShieldCheck, Truck, Lock } from "lucide-react";

export default function TrustStrip() {
  const values = [
    {
      icon: <ShieldCheck size={24} strokeWidth={1} />,
      title: "30 Day Guarantee",
      desc: "Love it or your money back"
    },
    {
      icon: <Truck size={24} strokeWidth={1} />,
      title: "Tracked Shipping",
      desc: "Real-time updates to your door"
    },
    {
      icon: <Lock size={24} strokeWidth={1} />,
      title: "Secure Checkout",
      desc: "Protected by 256-bit encryption"
    }
  ];

  return (
    <section className="bg-brand-sage-light py-12 border-y border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-3">
              <div className="text-brand-sage bg-white p-4 rounded-full shadow-sm">
                {item.icon}
              </div>
              <h3 className="font-semibold text-sm tracking-tight">{item.title}</h3>
              <p className="text-xs text-brand-gray">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
