export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  isNew?: boolean;
}

export const CATEGORIES = [
  {
    id: "bathroom",
    title: "Bathroom",
    image: "https://images.unsplash.com/photo-1553133884-4ea02139bc4a?auto=format&fit=crop&q=80&w=800",
    href: "#",
  },
  {
    id: "laundry",
    title: "Laundry",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=800",
    href: "#",
  },
  {
    id: "cleaning",
    title: "Cleaning",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=800",
    href: "#",
  },
  {
    id: "storage",
    title: "Storage & Organisation",
    image: "https://images.unsplash.com/photo-1594142465967-df5963389a3f?auto=format&fit=crop&q=80&w=800",
    href: "#",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Automatic Foam Soap Dispenser",
    price: 45.00,
    category: "Bathroom",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
    isNew: true,
  },
  {
    id: "prod-2",
    name: "LED Smart Bathroom Mirror",
    price: 189.00,
    category: "Bathroom",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faeaa6?auto=format&fit=crop&q=80&w=800",
    isNew: true,
  },
  {
    id: "prod-3",
    name: "Pet Hair Remover Pro Brush",
    price: 24.00,
    category: "Cleaning",
    image: "https://images.unsplash.com/photo-1583512676605-930d23224996?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "prod-4",
    name: "Eco Floor Cleaning Tablets",
    price: 18.00,
    category: "Cleaning",
    image: "https://images.unsplash.com/photo-1585333120169-02c3a7a9657b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "prod-5",
    name: "Wall Mounted Shower Caddy",
    price: 38.00,
    category: "Storage",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "prod-6",
    name: "UV Sanitizing Toothbrush Holder",
    price: 52.00,
    category: "Bathroom",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "prod-7",
    name: "Electric Spin Cleaning Brush",
    price: 65.00,
    category: "Cleaning",
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "prod-8",
    name: "Nano-Steam Surface Cleaner",
    price: 120.00,
    category: "Cleaning",
    image: "https://images.unsplash.com/photo-1585837301016-10515152243c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "prod-9",
    name: "Premium Rattan Laundry Basket",
    price: 85.00,
    category: "Laundry",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
  },
];
