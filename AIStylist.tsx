import React, { useState } from 'react';
import { Sparkles, ArrowRight, CornerDownRight, Check, RefreshCw } from 'lucide-react';

interface AIStylistProps {
  selectedCity: string;
}

export function AIStylist({ selectedCity }: AIStylistProps) {
  const [occasion, setOccasion] = useState('Festive / Eid');
  const [gender, setGender] = useState<'gents' | 'ladies' | 'unisex'>('gents');
  const [stylePreference, setStylePreference] = useState('Traditional Formal');
  const [bodyType, setBodyType] = useState('Standard Tall');
  const [budgetRange, setBudgetRange] = useState('Rs. 5,000 - 15,000');
  const [query, setQuery] = useState('');
  
  const [advisorLoading, setAdvisorLoading] = useState(false);
  const [stylingAdvice, setStylingAdvice] = useState<string | null>(null);

  const quickPrompts = [
    {
      label: "🎉 Wedding Wear",
      query: "Help me choose a royal sherwani / boutique lehenga outfit pairing colors with gold tilla details.",
      occasion: "Traditional Wedding",
      gender: "unisex" as const,
      style: "Premium Classic Royal"
    },
    {
      label: "🌙 Eid Festive",
      query: "Recommend a comfortable but highly elegant linen/cotton printed pakistani outfit for sunny afternoon Eid dars.",
      occasion: "Festive / Eid",
      gender: "ladies" as const,
      style: "Traditional Formal"
    },
    {
      label: "💼 Modern Fusion Office",
      query: "Advise a gents standard semi-formal cotton shirts, blazers layers with pants suit in Lahore climate.",
      occasion: "Corporate Seminar",
      gender: "gents" as const,
      style: "Modern/Traditional Fusion"
    }
  ];

  const handleFetchAdvice = async (e?: React.FormEvent, customQuery?: string) => {
    if (e) e.preventDefault();
    setAdvisorLoading(true);
    setStylingAdvice(null);

    const activeQuery = customQuery !== undefined ? customQuery : query;

    try {
      const response = await fetch("/api/stylist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          occasion,
          gender,
          stylePreference,
          bodyType,
          budgetRange,
          query: activeQuery
        })
      });

      if (!response.ok) {
        throw new Error("Stylist failed to retrieve recommendation.");
      }

      const data = await response.json();
      setStylingAdvice(data.text || "No recommendations received.");
    } catch (err: any) {
      console.error(err);
      setStylingAdvice(`### ⚠️ Connection Notice\n\nUnable to retrieve dynamic styling suggestions from server. Please configure process.env.GEMINI_API_KEY inside AI Studio setup to get live suggestions.\n\n*General Tip: Pairing navy blue coats with traditional ivory white raw silk pajama sets is currently trending high for events.*`);
    } finally {
      setAdvisorLoading(false);
    }
  };

  const selectQuickPrompt = (p: typeof quickPrompts[0]) => {
    setOccasion(p.occasion);
    setGender(p.gender === 'unisex' ? 'gents' : p.gender);
    setStylePreference(p.style);
    setQuery(p.query);
    handleFetchAdvice(undefined, p.query);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      {/* Parameters Panel */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-xs space-y-5">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <h3 className="font-sans font-bold text-sm text-stone-900 uppercase">Aesthetic Preferences</h3>
          </div>

          <form onSubmit={(e) => handleFetchAdvice(e)} className="space-y-4">
            {/* Occasion Option */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-stone-600 uppercase">Occasion & Vibe</label>
              <select
                id="stylist-occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-sans text-stone-800"
              >
                <option>Festive / Eid</option>
                <option>Traditional Wedding (Baraat/Valima)</option>
                <option>Shadi Mehndi/Mayon night</option>
                <option>Casual Outdoor hangout</option>
                <option>Corporate Seminar / Formal Meeting</option>
                <option>Heavy Evening Partywear</option>
              </select>
            </div>

            {/* Gender focus */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-stone-600 uppercase">Target Fit Gender</label>
              <div className="grid grid-cols-3 gap-2 p-1 bg-stone-50 rounded-xl border border-stone-100">
                {(['gents', 'ladies', 'unisex'] as const).map(g => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGender(g === 'unisex' ? 'gents' : g)}
                    className={`py-2 text-[11px] font-semibold rounded-lg capitalize transition ${
                      (gender === g || (g === 'unisex' && gender !== 'gents' && gender !== 'ladies'))
                        ? 'bg-emerald-900 text-amber-300 shadow-xs'
                        : 'text-stone-500 hover:text-stone-900'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Styling type */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-stone-600 uppercase">Style Profile</label>
              <select
                id="stylist-profile"
                value={stylePreference}
                onChange={(e) => setStylePreference(e.target.value)}
                className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-800"
              >
                <option>Traditional Formal (Heavy Tilla/Uptown Pret)</option>
                <option>Modern/Traditional Fusion (Jeans & Kurtis/Prince Coat)</option>
                <option>Clean Casuals (Lawn/Textured Cotton/Chinos)</option>
                <option>Avant-Garde Designer Cuts</option>
              </select>
            </div>

            {/* Body type fit */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-stone-600 uppercase">Preferred Fit Cut</label>
              <select
                id="stylist-fit"
                value={bodyType}
                onChange={(e) => setBodyType(e.target.value)}
                className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-800"
              >
                <option>Slim Bespoke Tailored Fit</option>
                <option>Standard Comfort Drop Fit</option>
                <option>Classic Loose Traditional Shahi Volume</option>
                <option>Athletic Tall Structured Fit</option>
              </select>
            </div>

            {/* Budget range in PKR */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-stone-600 uppercase">Estimated PKR Budget</label>
              <select
                id="stylist-budget"
                value={budgetRange}
                onChange={(e) => setBudgetRange(e.target.value)}
                className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-800"
              >
                <option>Under Rs. 5,000</option>
                <option>Rs. 5,000 - 15,000</option>
                <option>Rs. 15,000 - 45,000</option>
                <option>Premium Bespoke (Above Rs. 45,000)</option>
              </select>
            </div>

            {/* Custom Query description */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-stone-600 uppercase">Special styling queries if any</label>
              <textarea
                id="stylist-query"
                rows={3}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs focus:outline-hidden focus:border-emerald-700 resize-none font-sans"
                placeholder="e.g., I want to pair a pastel pink ladies organza chunri with light gold laces..."
              />
            </div>

            <button
              id="get-advice-btn"
              type="submit"
              disabled={advisorLoading}
              className="w-full bg-emerald-950 hover:bg-emerald-900 border border-emerald-800 text-amber-300 font-bold py-3.5 rounded-xl text-xs tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              {advisorLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-amber-400" />
                  <span>Curation in progress...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                  <span>Generate Style advice — Ask Gemini</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Quick query buttons */}
        <div className="space-y-2.5">
          <span className="text-[10px] text-stone-500 font-mono tracking-wider uppercase block">Instant styling inspirations</span>
          <div className="flex flex-col gap-2">
            {quickPrompts.map((p, i) => (
              <button
                key={i}
                onClick={() => selectQuickPrompt(p)}
                className="w-full py-2.5 px-4 bg-white hover:bg-stone-50 border border-stone-200 rounded-xl text-[11px] text-stone-700 font-medium text-left flex items-center justify-between group transition-all"
              >
                <span>{p.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-emerald-900 group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Advice Output */}
      <div className="lg:col-span-7">
        <div className="bg-white border border-stone-100 rounded-2xl p-6 md:p-8 shadow-xs min-h-[460px] flex flex-col justify-between">
          
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b pb-4 border-stone-100">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-800 animate-ping" />
                <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest">
                  AI Guru output report
                </span>
              </div>
              <span className="text-[10px] text-stone-500 font-sans">
                Country: Pakistan ({selectedCity})
              </span>
            </div>

            {advisorLoading ? (
              <div className="py-20 text-center space-y-4">
                <div className="inline-block relative">
                  <div className="h-10 w-10 border-4 border-emerald-900 border-t-amber-400 rounded-full animate-spin" />
                  <Sparkles className="absolute inset-0 m-auto w-4 h-4 text-amber-500 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-sans font-bold text-stone-800">Reviewing Pakistani Catalog...</h4>
                  <p className="text-xs text-stone-500 mt-1">Gemini AI is matching threads, fabrics, and 30 retail shops in Pakistan.</p>
                </div>
              </div>
            ) : stylingAdvice ? (
              /* Custom parsed rendering for maximum visual elegance */
              <div id="advisor-advice-container" className="prose max-w-none text-stone-700 space-y-4 text-sm leading-relaxed">
                {stylingAdvice.split('\n').map((line, idx) => {
                  let trimmed = line.trim();
                  
                  if (trimmed.startsWith('###')) {
                    return (
                      <h4 key={idx} className="font-sans font-extrabold text-emerald-950 text-base pt-3 flex items-center gap-2">
                        <CornerDownRight className="w-4 h-4 text-amber-500" />
                        {trimmed.replace(/^###\s*/, '')}
                      </h4>
                    );
                  }
                  if (trimmed.startsWith('####')) {
                    return (
                      <h5 key={idx} className="font-sans font-bold text-emerald-900 text-sm pt-2">
                        {trimmed.replace(/^####\s*/, '')}
                      </h5>
                    );
                  }
                  if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                    return (
                      <p key={idx} className="font-bold text-stone-800">
                        {trimmed.replace(/\*\*/g, '')}
                      </p>
                    );
                  }
                  if (trimmed.startsWith('-') || trimmed.startsWith('*')) {
                    let text = trimmed.replace(/^[-*]\s*/, '');
                    // Parse internal bolding
                    return (
                      <div key={idx} className="flex items-start gap-2.5 pl-2">
                        <span className="text-amber-500 mt-1 select-none">•</span>
                        <p className="text-stone-600 text-xs">
                          {text.split('**').map((chunk, i) => 
                            i % 2 === 1 ? <strong key={i} className="text-emerald-950 font-bold">{chunk}</strong> : chunk
                          )}
                        </p>
                      </div>
                    );
                  }
                  if (trimmed === '') {
                    return <div key={idx} className="h-1.5" />;
                  }

                  return (
                    <p key={idx} className="text-xs text-stone-600 font-sans">
                      {trimmed.split('**').map((chunk, i) => 
                        i % 2 === 1 ? <strong key={i} className="text-emerald-950 font-bold">{chunk}</strong> : chunk
                      )}
                    </p>
                  );
                })}
              </div>
            ) : (
              /* Empty Style advice placeholder */
              <div className="py-20 text-center space-y-4 text-stone-400">
                <div className="w-16 h-16 bg-stone-50 text-stone-300 rounded-full flex items-center justify-center mx-auto text-2xl">
                  ✦
                </div>
                <div>
                  <h4 className="font-sans font-bold text-stone-700 text-sm">Awaiting styling session</h4>
                  <p className="text-xs text-stone-500 max-w-sm mx-auto mt-1">
                    Select your fabric desires, style category, budget, and click "Ask Gemini" or pick one of the active inspirations to generate beautiful advice.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-stone-50 border border-stone-200/50 p-4 rounded-xl flex items-center gap-3 mt-6">
            <span className="text-xs bg-amber-200 text-emerald-950 font-mono font-bold px-2 py-1 rounded">PRO</span>
            <p className="text-[11px] text-stone-600 leading-tight">
              AI Stylist is linked with our tailoring network. You can book custom stitching with the sizing details recommended by Gemini instantly.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
