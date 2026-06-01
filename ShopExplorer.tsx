import React, { useState, useMemo } from 'react';
import { SHOPS, Shop, Product } from '../data';
import { Search, MapPin, Tag, ShoppingCart, User, Grid, Eye, Check } from 'lucide-react';

interface ShopExplorerProps {
  onAddToBag: (product: Product, shopName: string) => void;
  selectedCity: string;
}

export function ShopExplorer({ onAddToBag, selectedCity }: ShopExplorerProps) {
  const [selectedGender, setSelectedGender] = useState<'all' | 'gents' | 'ladies'>('all');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'casual' | 'formal' | 'partywear' | 'wedding'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedShopId, setSelectedShopId] = useState<string>('all');
  const [quickDetailProduct, setQuickDetailProduct] = useState<{product: Product; shopName: string} | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Group products with parent shop info
  const allExtendedProducts = useMemo(() => {
    const list: Array<{ product: Product; shop: Shop }> = [];
    SHOPS.forEach(shop => {
      shop.products.forEach(prod => {
        list.push({ product: prod, shop });
      });
    });
    return list;
  }, []);

  // Filtered list of products
  const filteredProducts = useMemo(() => {
    return allExtendedProducts.filter(item => {
      const p = item.product;
      const s = item.shop;

      // Gender filter
      if (selectedGender !== 'all' && p.gender !== selectedGender) return false;

      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;

      // City filter
      if (selectedCity !== 'Overall Pakistan' && s.city !== selectedCity) return false;

      // Shop ID filter
      if (selectedShopId !== 'all' && s.id !== selectedShopId) return false;

      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesDesc = p.description.toLowerCase().includes(query);
        const matchesFabric = p.fabric.toLowerCase().includes(query);
        const matchesShop = s.name.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesFabric && !matchesShop) return false;
      }

      return true;
    });
  }, [allExtendedProducts, selectedGender, selectedCategory, selectedCity, selectedShopId, searchQuery]);

  // Handle direct cart adding with visual confirmation
  const triggerAddToBag = (product: Product, shopName: string) => {
    onAddToBag(product, shopName);
    setCopiedId(product.id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      
      {/* Sidebar: Filters & Brands List */}
      <div className="lg:col-span-1 space-y-6">
        
        {/* Search */}
        <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-xs space-y-3">
          <h3 className="font-sans font-bold text-sm text-stone-900 tracking-tight uppercase">Search Apparel</h3>
          <div className="relative">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-400" />
            <input
              id="search-input"
              type="text"
              placeholder="Search fabric, brand, kurta..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-hidden focus:border-emerald-700 transition"
            />
          </div>
        </div>

        {/* Categories / Gender Switcher */}
        <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-xs space-y-4">
          <div>
            <h3 className="font-sans font-bold text-sm text-stone-900 tracking-tight uppercase mb-2.5">Gender Selection</h3>
            <div className="grid grid-cols-3 gap-1.5 p-1 bg-stone-50 rounded-xl border border-stone-100">
              <button
                onClick={() => setSelectedGender('all')}
                className={`py-2 text-xs font-semibold rounded-lg transition ${selectedGender === 'all' ? 'bg-white text-emerald-950 shadow-xs border border-stone-200' : 'text-stone-500 hover:text-stone-900'}`}
              >
                All
              </button>
              <button
                id="gender-gents"
                onClick={() => setSelectedGender('gents')}
                className={`py-2 text-xs font-semibold rounded-lg transition ${selectedGender === 'gents' ? 'bg-white text-emerald-950 shadow-xs border border-stone-200' : 'text-stone-500 hover:text-stone-900'}`}
              >
                Gents
              </button>
              <button
                id="gender-ladies"
                onClick={() => setSelectedGender('ladies')}
                className={`py-2 text-xs font-semibold rounded-lg transition ${selectedGender === 'ladies' ? 'bg-white text-emerald-950 shadow-xs border border-stone-200' : 'text-stone-500 hover:text-stone-900'}`}
              >
                Ladies
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-sans font-bold text-sm text-stone-900 tracking-tight uppercase mb-2.5">Style Preference</h3>
            <div className="flex flex-wrap gap-1.5">
              {(['all', 'casual', 'formal', 'partywear', 'wedding'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg capitalize border transition ${
                    selectedCategory === cat
                      ? 'bg-emerald-900 text-amber-300 border-emerald-900'
                      : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  {cat === 'all' ? 'Show All' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 30+ Verified Retailers List */}
        <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-xs space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-sans font-bold text-sm text-stone-900 tracking-tight uppercase">Pakistani Brands</h3>
            <span className="text-[10px] bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-full font-mono font-bold">30 Available</span>
          </div>
          <div className="max-h-72 overflow-y-auto pr-1 space-y-1 scrollbar-thin">
            <button
              onClick={() => setSelectedShopId('all')}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition flex justify-between items-center ${
                selectedShopId === 'all' ? 'bg-amber-50 text-emerald-950 border-l-4 border-emerald-800 font-semibold' : 'text-stone-600 hover:bg-stone-50'
              }`}
            >
              <span>All 30 Brands Combined</span>
              <span className="text-[10px] text-stone-400">({allExtendedProducts.length})</span>
            </button>
            {SHOPS.map(shop => {
              const count = shop.products.length;
              return (
                <button
                  key={shop.id}
                  onClick={() => setSelectedShopId(shop.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition flex justify-between items-center ${
                    selectedShopId === shop.id ? 'bg-amber-50 text-emerald-950 border-l-4 border-emerald-800 font-semibold' : 'text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="truncate max-w-[140px]">{shop.name}</span>
                    <span className="text-[9px] text-stone-400 font-normal">{shop.city}</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded">
                    ★ {shop.rating}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Main Grid: Apparel Catalog */}
      <div className="lg:col-span-3 space-y-6">
        
        {/* Delivery / Overall Pakistan Notice banner */}
        <div className="bg-amber-50 border border-amber-200/50 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="bg-amber-400 text-emerald-950 text-center p-2 rounded-lg font-bold font-mono text-xs shadow-sm">
              🇵🇰 COD
            </div>
            <div>
              <h4 className="font-sans font-bold text-stone-900 text-sm">Overall Pakistan Swift Delivery Activated</h4>
              <p className="text-xs text-stone-600 font-sans">Cash on Delivery & credit card logistics verified. Average transit: 3–5 working days nationwide.</p>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-block px-3 py-1.5 bg-emerald-800 text-amber-200 rounded-lg text-[10px] font-mono font-bold tracking-wider uppercase">
              Free Shipping Above Rs. 5,000
            </span>
          </div>
        </div>

        {/* Top bar info */}
        <div className="flex justify-between items-center">
          <p className="text-xs text-stone-500 font-mono">
            Showing <strong className="text-emerald-950 font-bold">{filteredProducts.length}</strong> luxurious dress options filtered
          </p>
          <div className="flex gap-2">
            <span className="bg-stone-100 text-stone-700 font-sans rounded-lg px-2.5 py-1 text-[11px] font-semibold">
              City Filter: {selectedCity}
            </span>
          </div>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="bg-stone-50 border-2 border-dashed border-stone-200 rounded-3xl p-16 text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-stone-100 text-stone-400 rounded-full flex items-center justify-center text-xl">
              🔍
            </div>
            <div>
              <h4 className="font-sans font-bold text-stone-800 text-base">No Outfits Found Matching Your Criteria</h4>
              <p className="text-xs text-stone-500 mt-1 max-w-md mx-auto">
                Try selecting "Overall Pakistan" in the top bar location or resetting brand categories to explore different ladies & gents options.
              </p>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProducts.map(({ product, shop }) => (
            <div
              key={`${shop.id}-${product.id}`}
              className="group bg-white rounded-2xl border border-stone-100 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden relative"
            >
              
              {/* Image & Badges */}
              <div className="aspect-square bg-stone-100 relative overflow-hidden flex items-center justify-center select-none">
                
                {/* Visual traditional backdrop representation if actual photos take time */}
                <div className="absolute inset-0 bg-linear-to-tr from-emerald-900/10 to-transparent z-10" />
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // fallbacks gracefully
                    e.currentTarget.src = "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&q=80&w=400";
                  }}
                />

                {/* Brand Badge */}
                <span className="absolute top-3 left-3 bg-white/95 text-emerald-950 font-sans text-[10px] font-extrabold px-2.5 py-1.5 rounded-lg shadow-sm border border-stone-200/80 uppercase tracking-tight z-20">
                  {shop.name}
                </span>

                {/* Subcategory / Dress Class Badge */}
                <span className="absolute top-3 right-3 bg-emerald-900/90 text-amber-300 font-mono text-[9px] font-bold px-2.5 py-1.5 rounded-lg shadow-sm border border-emerald-800 uppercase tracking-wider z-20">
                  {product.category}
                </span>

                {/* Gender Tag Bottom Left */}
                <div className="absolute bottom-3 left-3 flex gap-1 z-20">
                  <span className="bg-stone-900/80 text-emerald-100 text-[10px] px-2 py-1 rounded-sm flex items-center gap-1 backdrop-blur-xs capitalize">
                    <User className="w-3 h-3 text-amber-300" />
                    {product.gender}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <span className="text-[10px] text-stone-400 font-mono tracking-widest uppercase">
                    Fabric: {product.fabric}
                  </span>
                  <h4 className="font-sans font-bold text-stone-900 text-sm group-hover:text-emerald-900 transition-colors line-clamp-1">
                    {product.name}
                  </h4>
                  <p className="text-xs text-stone-500 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {/* Price in PKR */}
                  <div className="flex justify-between items-baseline pt-2 border-t border-stone-50">
                    <span className="text-xs text-stone-400 font-sans">Price</span>
                    <span className="font-mono text-emerald-900 font-extrabold text-base">
                      Rs. {product.price.toLocaleString()}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-3 gap-1.5 pt-1">
                    <button
                      onClick={() => setQuickDetailProduct({ product, shopName: shop.name })}
                      className="border border-stone-200 hover:bg-stone-50 p-2.5 rounded-xl flex items-center justify-center text-stone-500 text-xs gap-1.5"
                      title="Quick Specs"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => triggerAddToBag(product, shop.name)}
                      className={`col-span-2 py-2.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
                        copiedId === product.id
                          ? 'bg-emerald-800 text-white'
                          : 'bg-emerald-900 hover:bg-emerald-950 text-amber-300 shadow-xs'
                      }`}
                    >
                      {copiedId === product.id ? (
                        <>
                          <Check className="w-4.5 h-4.5 text-amber-300" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4.5 h-4.5" />
                          <span>Add to Bag</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Quick Details Modal Dialog */}
      {quickDetailProduct && (
        <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-55">
          <div className="bg-white rounded-3xl max-w-xl w-full border border-stone-100 shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Header */}
            <div className="p-6 border-b border-stone-100 flex justify-between items-start">
              <div>
                <span className="text-[10px] bg-amber-100 text-amber-900 font-mono px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                  Brand: {quickDetailProduct.shopName}
                </span>
                <h4 className="font-sans font-extrabold text-stone-900 text-base mt-1.5">
                  {quickDetailProduct.product.name}
                </h4>
              </div>
              <button
                onClick={() => setQuickDetailProduct(null)}
                className="p-1 px-2.5 bg-stone-100 hover:bg-stone-200 text-stone-500 text-xs rounded-lg font-bold"
              >
                ✕
              </button>
            </div>

            {/* Content Dynamic Scroll */}
            <div className="p-6 overflow-y-auto space-y-6">
              
              <div className="aspect-video rounded-2xl overflow-hidden bg-stone-100 border border-stone-100">
                <img
                  src={quickDetailProduct.product.image}
                  alt={quickDetailProduct.product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&q=80&w=400";
                  }}
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h5 className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest">Description</h5>
                  <p className="text-sm text-stone-600 mt-1">{quickDetailProduct.product.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/50">
                    <span className="text-[10px] font-mono text-stone-400 uppercase">Premium Fabric</span>
                    <p className="text-xs font-bold text-stone-800 mt-0.5">{quickDetailProduct.product.fabric}</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/50">
                    <span className="text-[10px] font-mono text-stone-400 uppercase">Aesthetic Color</span>
                    <p className="text-xs font-bold text-stone-800 mt-0.5">{quickDetailProduct.product.color}</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/50">
                    <span className="text-[10px] font-mono text-stone-400 uppercase">Gender / Fit</span>
                    <p className="text-xs font-bold text-stone-800 mt-0.5 capitalize">{quickDetailProduct.product.gender}</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/50">
                    <span className="text-[10px] font-mono text-stone-400 uppercase">Couture Segment</span>
                    <p className="text-xs font-bold text-stone-800 mt-0.5 capitalize">{quickDetailProduct.product.category}</p>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl flex justify-between items-center">
                  <div>
                    <span className="text-xs text-emerald-800 font-sans block font-semibold">Nationwide Shipping Rates</span>
                    <span className="text-[10px] text-stone-500 block mt-0.5">Free cash on delivery included overall Pakistan</span>
                  </div>
                  <span className="text-sm font-bold text-emerald-950">Rs. {quickDetailProduct.product.price.toLocaleString()}</span>
                </div>
              </div>

            </div>

            {/* Actions Footer */}
            <div className="p-6 border-t border-stone-100 flex gap-3">
              <button
                onClick={() => {
                  triggerAddToBag(quickDetailProduct.product, quickDetailProduct.shopName);
                  setQuickDetailProduct(null);
                }}
                className="flex-1 bg-emerald-900 hover:bg-emerald-950 text-amber-300 font-bold py-3.5 rounded-xl text-xs tracking-wide shadow-sm flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" />
                Add To Bag — Rs. {quickDetailProduct.product.price.toLocaleString()}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
