import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ShopExplorer } from './components/ShopExplorer';
import { TailorStudio } from './components/TailorStudio';
import { AIStylist } from './components/AIStylist';
import { CartModal } from './components/CartModal';
import { Product } from './data';
import { Sparkles, Scissors, Store, PackageOpen, Percent, PhoneCall, ShieldCheck } from 'lucide-react';

interface CartItem {
  product: Product;
  shopName: string;
  quantity: number;
  selectedSize: string;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'catalog' | 'tailors' | 'stylist'>('catalog');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Overall Pakistan');

  // Handle adding product to shopping bag
  const handleAddToBag = (product: Product, shopName: string) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, shopName, quantity: 1, selectedSize: 'M' }];
    });
  };

  const totalCartCount = cartItems.reduce((acc, current) => acc + current.quantity, 0);

  return (
    <div className="min-h-screen bg-stone-50/50 flex flex-col justify-between selection:bg-emerald-800 selection:text-white">
      
      {/* Top Header & Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={totalCartCount}
        openCart={() => setCartOpen(true)}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />

      {/* Hero Banner / Traditional Cultural Grid */}
      <section className="bg-emerald-950 text-white relative overflow-hidden py-12 md:py-16">
        {/* Subtle geometric pattern backdrop */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 md:space-y-8">
          
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase">
              🇵🇰 Fashion Revolution Live Overall Pakistan
            </span>
            <h1 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-white">
              Discover Pakistan's Premier <span className="text-amber-400">AI Fashion Hub</span>
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
              Explore 30 luxury gents & ladies brands, coordinate bespoke outfits with our server-side **Gemini AI Stylist**, and order custom stitching with 6 master tailors in Lahore, Karachi, Islamabad, Peshawar, Faisalabad, and Quetta. Delivery is supported nationwide with swift cash on delivery options.
            </p>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-xs font-mono">
            <div className="space-y-1">
              <span className="text-stone-400 block tracking-wider uppercase text-[10px]">RETAILERS</span>
              <strong className="text-white text-base font-extrabold block">30+ Verified Brands</strong>
            </div>
            <div className="space-y-1">
              <span className="text-stone-400 block tracking-wider uppercase text-[10px]">CITIES SERVICE</span>
              <strong className="text-white text-base font-extrabold block">Overall Pakistan</strong>
            </div>
            <div className="space-y-1">
              <span className="text-stone-400 block tracking-wider uppercase text-[10px]">BESPOKE ARTISANS</span>
              <strong className="text-white text-base font-extrabold block">6 Master Tailors</strong>
            </div>
            <div className="space-y-1">
              <span className="text-stone-400 block tracking-wider uppercase text-[10px]">AI POWERED</span>
              <strong className="text-amber-300 text-base font-extrabold block flex items-center gap-1">
                Gemini 3.5 Active
              </strong>
            </div>
          </div>

        </div>
      </section>

      {/* Main Workspace content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
        
        {/* Dynamic section tabs */}
        <div className="mb-8">
          {activeTab === 'catalog' && (
            <div className="space-y-1">
              <h2 className="font-sans font-extrabold text-stone-900 text-xl tracking-tight">30+ Top Retail Brands combined</h2>
              <p className="text-xs text-stone-500 font-sans">Filter by gents or ladies wear, dress segment, or custom Pakistan city location.</p>
            </div>
          )}

          {activeTab === 'tailors' && (
            <div className="space-y-1">
              <h2 className="font-sans font-extrabold text-stone-900 text-xl tracking-tight">Master Stitch Tailor Studio</h2>
              <p className="text-xs text-stone-500 font-sans">Direct measurement configuration sheets linked with famous tailoring ateliers from Lahore to Quetta.</p>
            </div>
          )}

          {activeTab === 'stylist' && (
            <div className="space-y-1">
              <h2 className="font-sans font-extrabold text-stone-900 text-xl tracking-tight">AI Fashion Guru Styling Suite</h2>
              <p className="text-xs text-stone-500 font-sans">Our Gemini-backed server-side advice assistant tailored specific to traditional Pakistan celebrations and colors.</p>
            </div>
          )}
        </div>

        {/* Dynamic renders */}
        <div className="transition-all duration-300">
          {activeTab === 'catalog' && (
            <ShopExplorer
              onAddToBag={handleAddToBag}
              selectedCity={selectedCity}
            />
          )}

          {activeTab === 'tailors' && (
            <TailorStudio
              selectedCity={selectedCity}
            />
          )}

          {activeTab === 'stylist' && (
            <AIStylist
              selectedCity={selectedCity}
            />
          )}
        </div>

      </main>

      {/* Trust Badges Bar */}
      <section className="bg-stone-100 border-t border-stone-200/50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-3.5">
              <div className="bg-emerald-950 text-amber-300 p-2.5 rounded-full shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-bold text-stone-950 text-xs uppercase tracking-tight">100% Genuine Fabrics</h4>
                <p className="text-[11px] text-stone-500 leading-tight">Every dress sourced directly from flagship brand warehouses without third-party middle markups.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3.5 font-sans">
              <div className="bg-emerald-950 text-amber-300 p-2.5 rounded-full shrink-0">
                <Percent className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-bold text-stone-950 text-xs uppercase tracking-tight">Fair Price Matching</h4>
                <p className="text-[11px] text-stone-500 leading-tight font-sans">Best local rates, transparent tailoring quotes, and direct brand discounts synced daily in PKR.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3.5 font-sans">
              <div className="bg-emerald-950 text-amber-300 p-2.5 rounded-full shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-bold text-stone-950 text-xs uppercase tracking-tight">24/7 WhatsApp Support</h4>
                <p className="text-[11px] text-stone-500 leading-tight">Direct representative connection to adjust stitching details, sizing guidelines and track dispatch courier.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Pakistan themed footer */}
      <footer className="bg-emerald-950 text-stone-300 border-t border-emerald-900 py-10 selection:bg-amber-400 selection:text-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="font-sans font-extrabold tracking-tight text-white uppercase text-sm">Vogue Pakistan AI Fashion Hub</span>
            <span className="bg-amber-400 text-emerald-950 font-mono text-[9px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wider">Couture Engine</span>
          </div>
          <p className="text-[11px] text-stone-400 max-w-xl mx-auto leading-relaxed">
            Proudly delivering overall Pakistan. Karachi Head Office: Tariq Road Boutique Center • Lahore Styling Office: Mall Road Fashion Guild. Powered by server-side Gemini AI for custom styling.
          </p>
          <div className="text-[10px] text-stone-500 font-mono pt-4 border-t border-emerald-900/50">
            © 2026 Vogue Pakistan AI Hub. All rights, designs and tailoring parameters meticulously crafted.
          </div>
        </div>
      </footer>

      {/* Cart Drawer Overlay */}
      <CartModal
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />

    </div>
  );
}
