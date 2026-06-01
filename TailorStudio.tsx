import React, { useState } from 'react';
import { TAILORS, Tailor } from '../data';
import { Scissors, Star, ShieldCheck, Ruler, Truck, Gift, CheckCircle2 } from 'lucide-react';

interface TailorStudioProps {
  selectedCity: string;
}

export function TailorStudio({ selectedCity }: TailorStudioProps) {
  const [selectedTailorId, setSelectedTailorId] = useState<string>(TAILORS[0].id);
  const [sizeFormat, setSizeFormat] = useState<'standard' | 'custom'>('standard');
  const [standardSize, setStandardSize] = useState<'S' | 'M' | 'L' | 'XL' | 'XXL'>('M');
  const [genderSelection, setGenderSelection] = useState<'gents' | 'ladies'>('gents');
  
  // Custom measurement states
  const [neckSize, setNeckSize] = useState('15');
  const [chestSize, setChestSize] = useState('38');
  const [waistSize, setWaistSize] = useState('34');
  const [shoulderSize, setShoulderSize] = useState('18');
  const [sleeveSize, setSleeveSize] = useState('24');
  const [shirtLength, setShirtLength] = useState('40');
  const [shalwarLength, setShalwarLength] = useState('38');

  // Booking states
  const [fabricSource, setFabricSource] = useState<'courier' | 'buyFromBrand'>('courier');
  const [specialNote, setSpecialNote] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Lahore',
    address: ''
  });

  const selectedTailor = TAILORS.find(t => t.id === selectedTailorId) || TAILORS[0];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill in your name, contact phone, and Pakistani delivery address to proceed.");
      return;
    }
    setBookingConfirmed(true);
  };

  const resetBooking = () => {
    setBookingConfirmed(false);
    setSpecialNote('');
    setFormData({ name: '', phone: '', city: 'Lahore', address: '' });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      {/* 5-6 Tailors selection panel */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-xs space-y-4">
          <div>
            <h3 className="font-sans font-bold text-sm text-stone-950 uppercase tracking-tight">Verified Master Tailors</h3>
            <p className="text-xs text-stone-500 mt-0.5">Choose an artisan tailor for bespoke Pakistani stitching with home door-to-door logistics.</p>
          </div>

          <div className="space-y-3">
            {TAILORS.map(tailor => (
              <button
                key={tailor.id}
                onClick={() => setSelectedTailorId(tailor.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-start gap-4 ${
                  selectedTailorId === tailor.id
                    ? 'bg-emerald-900 border-emerald-950 text-white shadow-md shadow-emerald-950/10 scale-102'
                    : 'bg-white border-stone-200/80 hover:bg-stone-50/80 text-stone-900'
                }`}
              >
                <img
                  src={tailor.avatar}
                  alt={tailor.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-400 shadow-sm"
                />
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-xs font-bold font-sans tracking-tight leading-tight">{tailor.name}</h4>
                    <span className={`text-[10px] font-mono px-1.5 rounded ${selectedTailorId === tailor.id ? 'bg-amber-100 text-amber-950' : 'bg-stone-100 text-stone-700'}`}>
                      {tailor.city}
                    </span>
                  </div>
                  <p className={`text-[11px] line-clamp-1 ${selectedTailorId === tailor.id ? 'text-emerald-100' : 'text-stone-500'}`}>
                    {tailor.specialties.join(" • ")}
                  </p>
                  <div className="flex items-center gap-3 pt-1 text-[10px]">
                    <span className="flex items-center gap-0.5 font-semibold text-amber-400">
                      ★ {tailor.rating}
                    </span>
                    <span className={selectedTailorId === tailor.id ? 'text-emerald-200' : 'text-stone-400'}>
                      {tailor.experienceYears} Years Exp
                    </span>
                    <span className="font-semibold text-amber-300">
                      Rs. {tailor.basePrice.toLocaleString()} Base
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Tailor Specific Highlight */}
        <div className="bg-emerald-950 text-amber-300 p-6 rounded-2xl border border-emerald-900 shadow-sm relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-3 translate-y-3">
            <Scissors className="w-48 h-48 rotate-45" />
          </div>
          <div className="relative z-10 space-y-4">
            <span className="bg-amber-100 text-amber-950 text-[9px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              Selected Tailor Profile
            </span>
            <div className="space-y-1.5">
              <h4 className="font-sans font-extrabold text-sm text-white">About {selectedTailor.name}</h4>
              <p className="text-xs text-stone-300 leading-relaxed font-sans">{selectedTailor.about}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] text-white">
              <div className="bg-emerald-900/40 p-2.5 rounded-lg border border-emerald-800/40">
                <span className="text-[9px] font-mono text-amber-400 block uppercase">Est. Stitching Time</span>
                <span className="font-bold mt-0.5 block">{selectedTailor.deliveryTimeDays}</span>
              </div>
              <div className="bg-emerald-900/40 p-2.5 rounded-lg border border-emerald-800/40">
                <span className="text-[9px] font-mono text-amber-400 block uppercase">Logistics Courier</span>
                <span className="font-bold mt-0.5 block">NCS / Leopards tracking</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form + sizes design tool */}
      <div className="lg:col-span-7">
        {bookingConfirmed ? (
          <div className="bg-white border border-stone-100 rounded-2xl p-8 shadow-xs text-center space-y-6">
            <div className="inline-flex items-center justify-center p-3 bg-emerald-100 text-emerald-900 rounded-full animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="font-sans font-extrabold text-stone-900 text-lg">Stitching Order Booked successfully!</h3>
              <p className="text-xs text-stone-600 max-w-md mx-auto">
                Bespoke stitching request forwarded to **{selectedTailor.name}** in {selectedTailor.city}. A courier agent will be dispatched to pick up your fabric or take care of your sizing.
              </p>
            </div>

            {/* Custom summary docket */}
            <div className="bg-stone-50 border border-stone-200/50 p-6 rounded-2xl max-w-sm mx-auto text-left space-y-3.5 text-xs">
              <h4 className="font-bold border-b pb-1.5 uppercase font-mono tracking-wider">Digital Slip Details</h4>
              <div className="flex justify-between"><span className="text-stone-400">Order Representative:</span><strong>{formData.name}</strong></div>
              <div className="flex justify-between"><span className="text-stone-400">Contact Number:</span><strong>{formData.phone}</strong></div>
              <div className="flex justify-between"><span className="text-stone-400">Tailoring City:</span><strong>{selectedTailor.city} (to overall Pakistan)</strong></div>
              <div className="flex justify-between"><span className="text-stone-400">Fabric Mode:</span><strong>{fabricSource === 'courier' ? 'Send unstitched by hand' : 'Stitch order from bought brands'}</strong></div>
              <div className="flex justify-between"><span className="text-stone-400">Fit Segment:</span><strong>{genderSelection === 'gents' ? 'Gents' : 'Ladies'} fitting</strong></div>
              <div className="flex justify-between"><span className="text-stone-400">Selected Size Spec:</span><strong>{sizeFormat === 'standard' ? `Standard ${standardSize}` : `Bespoke measurement (${shirtLength}" x ${chestSize}")`}</strong></div>
              <div className="flex justify-between border-t border-stone-200 pt-2 text-sm"><span className="text-emerald-900 font-bold">Base Price Stitched:</span><strong className="text-emerald-950 font-extrabold">Rs. {selectedTailor.basePrice.toLocaleString()}</strong></div>
            </div>

            <div className="pt-2">
              <button
                onClick={resetBooking}
                className="bg-emerald-900 hover:bg-emerald-950 text-amber-300 font-bold px-6 py-2.5 rounded-xl text-xs tracking-wide transition"
              >
                Book Another Stitching Suit
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleBookingSubmit} className="bg-white border border-stone-100 rounded-2xl p-6 md:p-8 shadow-xs space-y-6">
            
            {/* Form Title banner */}
            <div className="flex items-center gap-3 border-b border-stone-100 pb-5">
              <div className="bg-amber-100 text-amber-900 p-2 rounded-xl">
                <Ruler className="w-5 h-5 text-emerald-800" />
              </div>
              <div>
                <span className="text-[10px] text-stone-400 font-mono tracking-widest uppercase">Traditional Blueprint Builder</span>
                <h3 className="font-sans font-extrabold text-stone-900 text-base">Custom Measurement Sheet</h3>
              </div>
            </div>

            {/* Basic setup info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-2">Gender Fit Choice</label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-stone-50 border border-stone-100 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setGenderSelection('gents')}
                    className={`py-2 text-xs font-semibold rounded-lg transition ${genderSelection === 'gents' ? 'bg-white text-emerald-950 shadow-xs border border-stone-200' : 'text-stone-500'}`}
                  >
                    Gents (Kameez / Coat)
                  </button>
                  <button
                    type="button"
                    onClick={() => setGenderSelection('ladies')}
                    className={`py-2 text-xs font-semibold rounded-lg transition ${genderSelection === 'ladies' ? 'bg-white text-emerald-950 shadow-xs border border-stone-200' : 'text-stone-500'}`}
                  >
                    Ladies (Frock / Suit)
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-2">Fit Profile Class</label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-stone-50 border border-stone-100 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setSizeFormat('standard')}
                    className={`py-2 text-xs font-semibold rounded-lg transition ${sizeFormat === 'standard' ? 'bg-white text-emerald-950 shadow-xs border border-stone-200' : 'text-stone-500'}`}
                  >
                    Standard Size Preset
                  </button>
                  <button
                    id="size-custom-tab"
                    type="button"
                    onClick={() => setSizeFormat('custom')}
                    className={`py-2 text-xs font-semibold rounded-lg transition ${sizeFormat === 'custom' ? 'bg-white text-emerald-950 shadow-xs border border-stone-200' : 'text-stone-500'}`}
                  >
                    Custom Size Sheet
                  </button>
                </div>
              </div>
            </div>

            {/* Standard Size Selector / Slider */}
            {sizeFormat === 'standard' ? (
              <div className="bg-stone-50 p-4 border border-stone-200/50 rounded-xl space-y-4">
                <span className="text-[10px] text-stone-500 font-mono block uppercase">Choose Your Standard Size Preset</span>
                <div className="flex gap-2">
                  {(['S', 'M', 'L', 'XL', 'XXL'] as const).map(size => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setStandardSize(size)}
                      className={`flex-1 py-3 text-sm font-bold rounded-lg border transition duration-300 ${
                        standardSize === size
                          ? 'bg-emerald-900 border-emerald-950 text-amber-300 shadow-xs'
                          : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-stone-500 leading-relaxed font-sans">
                  *Standard fitting provides standard sleeve length (Medium: 24.5", Shoulder: 18.5", Chest Width: 21"). Perfect for immediate off-the-rack stitching.
                </p>
              </div>
            ) : (
              /* Custom Blueprint Size input grid */
              <div className="bg-stone-50 p-4 border border-stone-200/50 rounded-xl space-y-4">
                <span className="text-[10px] text-stone-500 font-mono block uppercase">Bespoke Fitting Dimensions (Inches)</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1">Neck/Gala</label>
                    <input
                      type="number"
                      value={neckSize}
                      onChange={(e) => setNeckSize(e.target.value)}
                      className="w-full p-2 bg-white border border-stone-200 rounded-lg text-xs font-mono font-bold text-stone-800"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1">Chest/Chhati</label>
                    <input
                      type="number"
                      value={chestSize}
                      onChange={(e) => setChestSize(e.target.value)}
                      className="w-full p-2 bg-white border border-stone-200 rounded-lg text-xs font-mono font-bold text-stone-800"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1">Waist/Kamar</label>
                    <input
                      type="number"
                      value={waistSize}
                      onChange={(e) => setWaistSize(e.target.value)}
                      className="w-full p-2 bg-white border border-stone-200 rounded-lg text-xs font-mono font-bold text-stone-800"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1">Shoulder/Teera</label>
                    <input
                      type="number"
                      value={shoulderSize}
                      onChange={(e) => setShoulderSize(e.target.value)}
                      className="w-full p-2 bg-white border border-stone-200 rounded-lg text-xs font-mono font-bold text-stone-800"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1">Sleeve/Bazoo</label>
                    <input
                      type="number"
                      value={sleeveSize}
                      onChange={(e) => setSleeveSize(e.target.value)}
                      className="w-full p-2 bg-white border border-stone-200 rounded-lg text-xs font-mono font-bold text-stone-800"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1">Shirt Length</label>
                    <input
                      type="number"
                      value={shirtLength}
                      onChange={(e) => setShirtLength(e.target.value)}
                      className="w-full p-2 bg-white border border-stone-200 rounded-lg text-xs font-mono font-bold text-stone-800"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1">Shalwar/Trouser</label>
                    <input
                      type="number"
                      value={shalwarLength}
                      onChange={(e) => setShalwarLength(e.target.value)}
                      className="w-full p-2 bg-white border border-stone-200 rounded-lg text-xs font-mono font-bold text-stone-800"
                    />
                  </div>
                  <div className="flex items-end justify-center pb-1">
                    <span className="text-[10px] font-bold px-2 py-1.5 bg-amber-100 text-amber-900 rounded font-mono uppercase tracking-wider">
                      Inch Mode
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Courier / Fabric Logistics selections */}
            <div className="space-y-3">
              <label className="block text-xs font-bold text-stone-700 uppercase">How will you provide fabric?</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFabricSource('courier')}
                  className={`p-4 rounded-xl border text-left flex gap-3 transition ${
                    fabricSource === 'courier' ? 'bg-amber-50/50 border-emerald-800' : 'bg-white hover:bg-stone-50'
                  }`}
                >
                  <Truck className="w-5 h-5 text-emerald-800" />
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">Deliver via Free Home Pick-up</span>
                    <span className="text-[10px] text-stone-500 block leading-tight mt-0.5">Leopards courier picks up unstitched fabric from your home.</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFabricSource('buyFromBrand')}
                  className={`p-4 rounded-xl border text-left flex gap-3 transition ${
                    fabricSource === 'buyFromBrand' ? 'bg-amber-50/50 border-emerald-800' : 'bg-white hover:bg-stone-50'
                  }`}
                >
                  <Gift className="w-5 h-5 text-emerald-800" />
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">Forward Bought unstitched Dress</span>
                    <span className="text-[10px] text-stone-500 block leading-tight mt-0.5">Send a dress bought from our 30 brands directly for stitching.</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Courier / Shipping Client details */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-stone-700 uppercase tracking-tight">Dispatch Details</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-medium text-stone-500 mb-1">Your Full Name</label>
                  <input
                    id="client-name-input"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs focus:outline-hidden focus:border-emerald-700"
                    placeholder="Waseem Akram"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-stone-500 mb-1">Mobile WhatsApp No.</label>
                  <input
                    id="client-phone-input"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs focus:outline-hidden focus:border-emerald-700"
                    placeholder="e.g. +92 300 1234567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-stone-500 mb-1">Home address in Pakistan (Nationwide tracking)</label>
                <textarea
                  id="client-address-textarea"
                  required
                  rows={2}
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs focus:outline-hidden focus:border-emerald-700 resize-none"
                  placeholder="Street Address, Phase/Sector, Lahore/Karachi/Islamabad..."
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-stone-500 mb-1">Remarks / Stitching Style Guide (neck shape, cuffs, pockets)</label>
                <input
                  type="text"
                  value={specialNote}
                  onChange={(e) => setSpecialNote(e.target.value)}
                  className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs focus:outline-hidden focus:border-emerald-700"
                  placeholder="Need slim band collar, dynamic cuffs on Gents kameez etc."
                />
              </div>
            </div>

            {/* Sum Price booking button */}
            <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] text-stone-400 font-mono block">Estimated Stitching Quote</span>
                <span className="font-mono text-emerald-900 font-black text-lg">Rs. {selectedTailor.basePrice.toLocaleString()}</span>
              </div>
              <button
                id="submit-stitching-btn"
                type="submit"
                className="bg-emerald-900 hover:bg-emerald-950 text-amber-300 font-bold px-8 py-3.5 rounded-xl text-xs tracking-wide shadow-md transition"
              >
                Submit Bespoke Stitching Order
              </button>
            </div>

          </form>
        )}
      </div>

    </div>
  );
}
