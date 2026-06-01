import React from 'react';
import { Sparkles, Scissors, ShoppingBag, Store, MapPin } from 'lucide-react';

interface NavbarProps {
  activeTab: 'catalog' | 'tailors' | 'stylist';
  setActiveTab: (tab: 'catalog' | 'tailors' | 'stylist') => void;
  cartCount: number;
  openCart: () => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
}

export function Navbar({
  activeTab,
  setActiveTab,
  cartCount,
  openCart,
  selectedCity,
  setSelectedCity
}: NavbarProps) {
  const cities = ["Overall Pakistan", "Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta", "Faisalabad", "Rawalpindi", "Multan", "Sialkot", "Gujranwala"];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('catalog')}>
            <div className="bg-emerald-800 text-amber-400 p-2.5 rounded-xl shadow-md border border-emerald-700 select-none">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-sans font-extrabold tracking-tight text-xl text-emerald-950 uppercase">Vogue Pak</span>
                <span className="bg-amber-100 text-amber-800 font-mono text-[9px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wider">AI Hub</span>
              </div>
              <p className="text-[10px] text-stone-500 font-mono tracking-normal">30+ Brands • Tailors • Overall Pakistan Delivery</p>
            </div>
          </div>

          {/* Quick Tabs */}
          <nav className="hidden md:flex items-center gap-1.5 bg-stone-50 p-1.5 rounded-2xl border border-stone-100">
            <button
              id="nav-tab-catalog"
              onClick={() => setActiveTab('catalog')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === 'catalog'
                  ? 'bg-emerald-900 text-amber-300 shadow-sm'
                  : 'text-stone-600 hover:text-emerald-950 hover:bg-stone-100'
              }`}
            >
              <Store className="w-4.5 h-4.5" />
              <span>30+ Brands Explorer</span>
            </button>

            <button
              id="nav-tab-tailors"
              onClick={() => setActiveTab('tailors')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === 'tailors'
                  ? 'bg-emerald-900 text-amber-300 shadow-sm'
                  : 'text-stone-600 hover:text-emerald-950 hover:bg-stone-100'
              }`}
            >
              <Scissors className="w-4.5 h-4.5" />
              <span>Master Stitch Studio</span>
            </button>

            <button
              id="nav-tab-stylist"
              onClick={() => setActiveTab('stylist')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 relative ${
                activeTab === 'stylist'
                  ? 'bg-emerald-950 text-amber-300 shadow-sm border border-emerald-800'
                  : 'text-stone-600 hover:text-emerald-950 hover:bg-stone-100'
              }`}
            >
              <Sparkles className="w-4.5 h-4.5 text-amber-500" />
              <span>AI Fashion Advice</span>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
              </span>
            </button>
          </nav>

          {/* Location & Cart Options */}
          <div className="flex items-center gap-3">
            {/* City Selector */}
            <div className="hidden sm:flex items-center gap-1.5 bg-stone-50 border border-stone-200 rounded-xl px-2.5 py-1.5">
              <MapPin className="w-4 h-4 text-emerald-800" />
              <select
                id="header-city-select"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="bg-transparent text-xs text-stone-700 font-medium focus:outline-hidden cursor-pointer"
              >
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            {/* Shopping Bag Button */}
            <button
              id="header-cart-button"
              onClick={openCart}
              className="relative p-3 rounded-xl bg-amber-50 text-emerald-950 hover:bg-amber-100 transition-all border border-amber-200/50 flex items-center justify-center cursor-pointer group"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-emerald-800 text-amber-200 text-[10px] font-bold w-5.5 h-5.5 rounded-full flex items-center justify-center ring-2 ring-white animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div className="md:hidden flex justify-around items-center h-12 bg-stone-50 border-t border-stone-100 text-xs px-2 py-1">
        <button
          onClick={() => setActiveTab('catalog')}
          className={`flex flex-col items-center gap-0.5 font-medium flex-1 py-1 ${activeTab === 'catalog' ? 'text-emerald-900 border-t-2 border-emerald-900' : 'text-stone-500'}`}
        >
          <Store className="w-4.5 h-4.5" />
          <span>30+ Brands</span>
        </button>
        <button
          onClick={() => setActiveTab('tailors')}
          className={`flex flex-col items-center gap-0.5 font-medium flex-1 py-1 ${activeTab === 'tailors' ? 'text-emerald-900 border-t-2 border-emerald-900' : 'text-stone-500'}`}
        >
          <Scissors className="w-4.5 h-4.5" />
          <span>Tailor Studio</span>
        </button>
        <button
          onClick={() => setActiveTab('stylist')}
          className={`flex flex-col items-center gap-0.5 font-medium flex-1 py-1 ${activeTab === 'stylist' ? 'text-emerald-900 border-t-2 border-emerald-900' : 'text-stone-500'}`}
        >
          <Sparkles className="w-4.5 h-4.5 text-amber-500" />
          <span>AI Stylist</span>
        </button>
      </div>
    </header>
  );
}
