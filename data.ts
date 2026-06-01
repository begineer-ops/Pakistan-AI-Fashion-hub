export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // in PKR
  gender: 'gents' | 'ladies' | 'unisex';
  category: 'casual' | 'formal' | 'partywear' | 'wedding';
  image: string;
  fabric: string;
  color: string;
}

export interface Shop {
  id: string;
  name: string;
  city: string;
  rating: number;
  featured: boolean;
  specialization: string;
  description: string;
  deliveryRange: string;
  products: Product[];
}

export interface Tailor {
  id: string;
  name: string;
  city: string;
  experienceYears: number;
  rating: number;
  specialties: string[];
  basePrice: number; // in PKR
  deliveryTimeDays: string;
  about: string;
  avatar: string;
}

export const TAILORS: Tailor[] = [
  {
    id: "tailor-1",
    name: "Master Jameel Lahori",
    city: "Lahore",
    experienceYears: 25,
    rating: 4.9,
    specialties: ["Gents Sherwani", "Premium Shalwar Kameez", "Prince Coats", "Waistcoats"],
    basePrice: 3500,
    deliveryTimeDays: "7-10 days",
    about: "Known for standard fit & sharp tailoring on the historic Mall Road, Lahore. Expert in royal wedding sherwanis and executive wear.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "tailor-2",
    name: "Karachi Darzi Express (Amna Bibi)",
    city: "Karachi",
    experienceYears: 18,
    rating: 4.8,
    specialties: ["Bridal Lehenga", "Luxury Frocks", "Ladies Chiffon Suits", "Anarkali Outfits"],
    basePrice: 4500,
    deliveryTimeDays: "12-15 days",
    about: "Specialized boutique in Tariq Road, Karachi. Known for intricate hand embroidery, laces, and beautiful bridal designs.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "tailor-3",
    name: "Peshawari Karigar Studio",
    city: "Peshawar",
    experienceYears: 20,
    rating: 4.7,
    specialties: ["Mens Traditional Kurta", "Waseem Akram Style Peshawari Frock", "Khaddar Suits", "Coats"],
    basePrice: 2800,
    deliveryTimeDays: "5-8 days",
    about: "Hailing from Qissa Khwani Bazaar. Expert in working with pure cotton and Peshawari handloom khaddar with neat classic stitches.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "tailor-4",
    name: "Capital Fits Tailors",
    city: "Islamabad",
    experienceYears: 15,
    rating: 4.9,
    specialties: ["Italian Gents Suits", "Three-Piece Tuxedos", "Sherwanis", "Kurta Pajama"],
    basePrice: 8500,
    deliveryTimeDays: "10-12 days",
    about: "F-10 Islamabad modern studio. Premium cuts using Italian styling guidelines. High-end bespoke tailoring with immaculate finish.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "tailor-5",
    name: "Faisalabad Loom Craft Tailors",
    city: "Faisalabad",
    experienceYears: 12,
    rating: 4.6,
    specialties: ["Ladies Daily Wear Pret", "Gents Shalwar Kameez", "Lawn Suits stitching", "Kids Traditional"],
    basePrice: 1800,
    deliveryTimeDays: "4-6 days",
    about: "Efficient master matching Faisalabad's famous textile speed. Reliable stitching for unstitched lawn, linen and cotton suits.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "tailor-6",
    name: "Quetta Balochi Shaan Boutique",
    city: "Quetta",
    experienceYears: 22,
    rating: 4.8,
    specialties: ["Balochi Mirrorwork Frocks", "Heavy Embroidered Shalwars", "Traditional Waistcoats", "Gents Kurta"],
    basePrice: 5000,
    deliveryTimeDays: "15-20 days",
    about: "Authentic handmade patterns and heavy thread embroidery representing proud Balochi cultural heritage. Delivery overall Pakistan.",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=200"
  }
];

export const SHOPS: Shop[] = [
  {
    id: "shop-1",
    name: "J. Junaid Jamshed",
    city: "Karachi",
    rating: 4.8,
    featured: true,
    specialization: "Traditional & Royal Pakistan Sherwanis & Shalwar Kameez",
    description: "Since 2002, J. has stayed true to deep-rooted heritage. Offering elegant traditional couture for both gents and ladies.",
    deliveryRange: "Overall Pakistan & International",
    products: [
      {
        id: "p-j-1",
        name: "Gents Royal Ivory Sherwani",
        description: "Exquisite raw silk Sherwani with subtle antique gold thread embroidery on collar and sleeve hems. Ideal for modern groom.",
        price: 38500,
        gender: "gents",
        category: "wedding",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=400",
        fabric: "Premium Raw Silk",
        color: "Ivory White"
      },
      {
        id: "p-j-2",
        name: "Ladies Emerald festive Shalwar Kameez",
        description: "Intricately embroidered shirt on pure luxury lawn with printed silk dupatta and dyed cotton trousers.",
        price: 9500,
        gender: "ladies",
        category: "partywear",
        image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=400",
        fabric: "Jacquard Lawn",
        color: "Emerald Green"
      },
      {
        id: "p-j-3",
        name: "Gents Modern Khaddar Kurta",
        description: "Rich dark blue textured cotton-khaddar casual Kurta with premium metallic buttons.",
        price: 4200,
        gender: "gents",
        category: "casual",
        image: "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?auto=format&fit=crop&q=80&w=400",
        fabric: "Pure Khaddar",
        color: "Indigo Blue"
      },
      {
        id: "p-j-4",
        name: "Classic Slate Gents Shalwar Kameez",
        description: "Formal linen-blend Shalwar Kameez with classic band collar and elegant double cuffs.",
        price: 7200,
        gender: "gents",
        category: "formal",
        image: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?auto=format&fit=crop&q=80&w=400",
        fabric: "Linen Wash and Wear",
        color: "Slate Gray"
      }
    ]
  },
  {
    id: "shop-2",
    name: "Khaadi",
    city: "Lahore",
    rating: 4.7,
    featured: true,
    specialization: "Vibrant ethnic prints and Fusion Ladies pret",
    description: "Khaadi is a premier global brand celebrating traditional handwoven fabrics with colorful modern sensibilities.",
    deliveryRange: "Overall Pakistan",
    products: [
      {
        id: "p-kh-1",
        name: "Ladies Mustard Aztec Printed Kurti",
        description: "A-line daily wear casual shirt with block style printing and styled tassels.",
        price: 3200,
        gender: "ladies",
        category: "casual",
        image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&q=80&w=400",
        fabric: "Summer Lawn",
        color: "Saffron Mustard"
      },
      {
        id: "p-kh-2",
        name: "Teal Blossom Embroidered 3-Piece",
        description: "Heavily embellished neckline with Schiffli border pants and georgette printed dupatta.",
        price: 8900,
        gender: "ladies",
        category: "formal",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=400",
        fabric: "Cambric Cotton",
        color: "Teal Ferozi"
      },
      {
        id: "p-kh-3",
        name: "Ladies Ivory Crimson Silk Tunic",
        description: "Gorgeous partywear short tunic featuring loose kimino sleeves with ethnic embroidery.",
        price: 11500,
        gender: "ladies",
        category: "partywear",
        image: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?auto=format&fit=crop&q=80&w=400",
        fabric: "Viscose Chiffon Silk",
        color: "Ivory Red"
      }
    ]
  },
  {
    id: "shop-3",
    name: "Sapphire",
    city: "Islamabad",
    rating: 4.9,
    featured: true,
    specialization: "High-quality premium prints & Gents executive kurtas",
    description: "Combining 100% pure fabric with luxury designs. Known for unmatched colors and standard stitching fit.",
    deliveryRange: "Overall Pakistan",
    products: [
      {
        id: "p-sp-1",
        name: "Sapphire Signature Black Kurta",
        description: "Midnight black gents casual Kurta stitched from soft premium wash-and-wear slub canvas.",
        price: 4900,
        gender: "gents",
        category: "casual",
        image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=400",
        fabric: "Premium Slub Wash n Wear",
        color: "Midnight Black"
      },
      {
        id: "p-sp-2",
        name: "Ladies Ochre Royal Silk Frock",
        description: "High volume luxury frock adorned with handcrafted gota and tilla on neck and bottom flare.",
        price: 18500,
        gender: "ladies",
        category: "wedding",
        image: "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&q=80&w=400",
        fabric: "Organza Net & Silk",
        color: "Ochre Gold"
      },
      {
        id: "p-sp-3",
        name: "Minimalist Pastel Mint Mens Kameez",
        description: "Gentle formal mint green kameez shalwar set for formal afternoon gatherings and Eid prayer.",
        price: 7900,
        gender: "gents",
        category: "formal",
        image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=400",
        fabric: "Egyptain Giza Cotton",
        color: "Mint Green"
      }
    ]
  },
  {
    id: "shop-4",
    name: "Maria B.",
    city: "Lahore",
    rating: 4.9,
    featured: true,
    specialization: "Ultra-luxury bridal Lehengas & heavy Partywear",
    description: "Maria B is the pioneer of luxury chiffon and embroidered wear in Pakistan, with breathtaking bridal collections.",
    deliveryRange: "Overall Pakistan & Worldwide",
    products: [
      {
        id: "p-mb-1",
        name: "Crimson Velvet Couture Lehenga",
        description: "Heavily handcrafted bridal lehenga with resham, zardozi, and dabka work. Tailored to absolute perfection.",
        price: 145000,
        gender: "ladies",
        category: "wedding",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=400",
        fabric: "Royal Silk Velvet & Net",
        color: "Deep Crimson Red"
      },
      {
        id: "p-mb-2",
        name: "Pastel Lavender Chiffon Luxury Suite",
        description: "3-piece embroidered chiffon outfit with hand-embellished mirrors, complete with silk trousers.",
        price: 24500,
        gender: "ladies",
        category: "partywear",
        image: "https://images.unsplash.com/photo-1583391265517-35bbdad01209?auto=format&fit=crop&q=80&w=400",
        fabric: "Pure Crinkle Chiffon",
        color: "Lavender"
      }
    ]
  },
  {
    id: "shop-5",
    name: "Sana Safinaz",
    city: "Karachi",
    rating: 4.8,
    featured: false,
    specialization: "Avant-garde ladies formal pret & lawn collections",
    description: "Sana Safinaz represents high-standard luxury, elegance, and fashion forwardness for modern Pakistani women.",
    deliveryRange: "Overall Pakistan",
    products: [
      {
        id: "p-ss-1",
        name: "Ladies Royal Indigo Silk Kaftan",
        description: "Stunning draped silk kaftan with beaded neckline. Flowing comfort with extreme high-end style.",
        price: 16500,
        gender: "ladies",
        category: "partywear",
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=400",
        fabric: "Medium Silk",
        color: "Indigo Royal Blue"
      },
      {
        id: "p-ss-2",
        name: "Peachy Blush Lawn 3-Piece",
        description: "Intricate floral embroidery with chiffon dupatta and embroidered cambric pants.",
        price: 8200,
        gender: "ladies",
        category: "casual",
        image: "https://images.unsplash.com/photo-1561053720-76cd73ff22c3?auto=format&fit=crop&q=80&w=400",
        fabric: "Luxury Summer Lawn",
        color: "Blush Peach"
      }
    ]
  },
  {
    id: "shop-6",
    name: "Gul Ahmed (Ideas)",
    city: "Karachi",
    rating: 4.7,
    featured: false,
    specialization: "Supreme unstitched fabrics & classic gents kurtas",
    description: "A household name spanning decades. Gul Ahmed stands for finest count fabric and highly reliable daily wear.",
    deliveryRange: "Overall Pakistan",
    products: [
      {
        id: "p-ga-1",
        name: "Classic Khaki Gents Shalwar Kameez",
        description: "Structured cotton kameez shalwar set with fine stitching details and robust daily wear build.",
        price: 5400,
        gender: "gents",
        category: "casual",
        image: "https://images.unsplash.com/photo-1549069642-7257f85d1bc1?auto=format&fit=crop&q=80&w=400",
        fabric: "100% Egyptian Cotton",
        color: "Rich Khaki"
      },
      {
        id: "p-ga-2",
        name: "Gents Pure Woolen Charcoal Shawl",
        description: "Warm, hand-loomed traditional wool shawl to wear gracefully over kurtas on winter wedding nights.",
        price: 4500,
        gender: "gents",
        category: "partywear",
        image: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?auto=format&fit=crop&q=80&w=400",
        fabric: "Pure Swati Camel Wool",
        color: "Charcoal Black"
      },
      {
        id: "p-ga-3",
        name: "Ladies Rust Geometric Lawn Suite",
        description: "Classic 3-piece unstitched lawn with printed cotton-net dupatta and plain cambric bottom.",
        price: 4900,
        gender: "ladies",
        category: "casual",
        image: "https://images.unsplash.com/photo-1608748010899-18f300247112?auto=format&fit=crop&q=80&w=400",
        fabric: "Gul Ahmed Lawn",
        color: "Rust Orange"
      }
    ]
  },
  {
    id: "shop-7",
    name: "Alkaram Studio",
    city: "Karachi",
    rating: 4.6,
    featured: false,
    specialization: "Contemporary ladies and gents casual prints",
    description: "Fresh patterns, colorful hues and sturdy thread fabric for absolute comfort in hot climatic cities.",
    deliveryRange: "Overall Pakistan",
    products: [
      {
        id: "p-ak-1",
        name: "Sky Blue Floral Ladies Kurta",
        description: "Regular-fit lawn kurti with delicate white floral printed neckline and stylish keyhole sleeves.",
        price: 2900,
        gender: "ladies",
        category: "casual",
        image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&q=80&w=400",
        fabric: "Fine Slub Lawn",
        color: "Sky Blue & White"
      },
      {
        id: "p-ak-2",
        name: "Gents Dark Navy Formal Kameez",
        description: "Executive fit shirt with crisp formal cuffs, suited for office meetings and post-work dinners.",
        price: 6800,
        gender: "gents",
        category: "formal",
        image: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?auto=format&fit=crop&q=80&w=400",
        fabric: "Premium Latha Cotton",
        color: "Deep Navy Blue"
      }
    ]
  },
  {
    id: "shop-8",
    name: "Limelight",
    city: "Lahore",
    rating: 4.7,
    featured: false,
    specialization: "Affordable trendsetting ladies pret & accessories",
    description: "Fast-fashion retail Giant. Providing outstanding Pakistani ladies attire with very cost-effective price budgets.",
    deliveryRange: "Overall Pakistan",
    products: [
      {
        id: "p-ll-1",
        name: "Ladies Ruby Red Jacquard Kurta",
        description: "Beautiful metallic golden thread woven throughout the rich maroon canvas. Looks very ethnic.",
        price: 3600,
        gender: "ladies",
        category: "partywear",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=400",
        fabric: "Jacquard Silk Cotton",
        color: "Ruby Red Maroon"
      },
      {
        id: "p-ll-2",
        name: "Ladies Casual Lilac Printed Pret",
        description: "Elegant short loose shirt styled with modern graphic stripes. High comfort for summer outdoors.",
        price: 2400,
        gender: "ladies",
        category: "casual",
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=400",
        fabric: "Lawn Tunic",
        color: "Lilac Lavender"
      }
    ]
  },
  {
    id: "shop-9",
    name: "HSY (Hassan Sheheryar Yasin)",
    city: "Lahore",
    rating: 4.9,
    featured: true,
    specialization: "Ultra-luxury elite bridal sherwanis and lehengas",
    description: "The King of Pakistani Couture. Making premium groom/bride majestic wedding attire with absolute handloom gold standard designs.",
    deliveryRange: "Overall Pakistan & International Custom Fits",
    products: [
      {
        id: "p-hsy-1",
        name: "Elite Shajar Groom Velvet Sherwani",
        description: "Handcrafted velvet Sherwani embedded with gold Mughal-era tilla work and semi-precious custom buttons.",
        price: 195000,
        gender: "gents",
        category: "wedding",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400",
        fabric: "Micro-Velvet Premium 9000",
        color: "Midnight Royal Green"
      },
      {
        id: "p-hsy-2",
        name: "Gold Zardozi Royal Bridal Lehenga",
        description: "The ultimate Pakistani wedding gown with 18-kali flair covered in authentic gold dabka, kora and resham.",
        price: 350000,
        gender: "ladies",
        category: "wedding",
        image: "https://images.unsplash.com/photo-1611106211090-8f3c79eb8552?auto=format&fit=crop&q=80&w=400",
        fabric: "Pure Jamawar & Net",
        color: "Metallic Antique Gold"
      }
    ]
  },
  {
    id: "shop-10",
    name: "Edenrobe",
    city: "Karachi",
    rating: 4.6,
    featured: false,
    specialization: "Formal corporate suits and traditional kids wear",
    description: "One stop shop for modern corporate outfits, elegant sherwanis, and cozy ethnic casual wear for gentlemen.",
    deliveryRange: "Overall Pakistan",
    products: [
      {
        id: "p-er-1",
        name: "Mens Deep Charcoal Formal Blazer",
        description: "Tailored fit formal blazer jacket. Slim lapel, smooth shoulder lining, suitable for all premium boardrooms.",
        price: 12500,
        gender: "gents",
        category: "formal",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=400",
        fabric: "Blended Premium Wool",
        color: "Slate Charcoal"
      },
      {
        id: "p-er-2",
        name: "Gents Mustard Linen Festive Kurta",
        description: "Striking yellow linen casual kurta with exquisite embroidery around the placket. Great for Mendhi family events.",
        price: 4800,
        gender: "gents",
        category: "partywear",
        image: "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?auto=format&fit=crop&q=80&w=400",
        fabric: "Linen Viscose Blend",
        color: "Gold Mustard"
      }
    ]
  },
  {
    id: "shop-11",
    name: "Royal Tag",
    city: "Lahore",
    rating: 4.7,
    featured: false,
    specialization: "Sophisticated modern Gents blazers & formal suits",
    description: "Premium formal and smart casual brand for men. Offers sharp Italian-style suits, blazers, and shirts.",
    deliveryRange: "Overall Pakistan",
    products: [
      {
        id: "p-rt-1",
        name: "Gents Royal Navy 2-Piece Suit",
        description: "Impeccably tailored double-button blazer and matching slim-fit formal trousers. Pure professional styling.",
        price: 18900,
        gender: "gents",
        category: "formal",
        image: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?auto=format&fit=crop&q=80&w=400",
        fabric: "Italian Wool Blend",
        color: "Royal Navy Blue"
      },
      {
        id: "p-rt-2",
        name: "Tan Smart-Casual Blazer",
        description: "Tailored tweed texture blazer piece, lightweight and textured. Layers wonderfully over black turtlenecks.",
        price: 13500,
        gender: "gents",
        category: "casual",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=400",
        fabric: "Cotton-Tweed Blend",
        color: "Camel Tan"
      }
    ]
  },
  {
    id: "shop-12",
    name: "Diners",
    city: "Karachi",
    rating: 4.5,
    featured: false,
    specialization: "Formal western shirts, trousers, and leather jackets",
    description: "Diners offers durable, highly comfortable formal clothing and footwear for gents and ladies seeking modern fits.",
    deliveryRange: "Overall Pakistan",
    products: [
      {
        id: "p-dn-1",
        name: "Gents Crisp White Dobby Shirt",
        description: "Formal dobby weave shirt with double cuffs. Easy-iron finish for immediate morning business grooming.",
        price: 3600,
        gender: "gents",
        category: "formal",
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=400",
        fabric: "100% Giza Cotton",
        color: "Optic White"
      },
      {
        id: "p-dn-2",
        name: "Gents Suede Dark Brown Jacket",
        description: "Perfect heavy style winter wear casual jacket with secure zip pockets and premium interior soft silk touch.",
        price: 11900,
        gender: "gents",
        category: "casual",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=400",
        fabric: "Premium Suede Leather",
        color: "Espresso Brown"
      }
    ]
  },
  {
    id: "shop-13",
    name: "Cambridge",
    city: "Karachi",
    rating: 4.6,
    featured: false,
    specialization: "Prestigious gents business wear & casual polos",
    description: "A mark of true gentleman attire. Cambridge is trusted across Pakistan since 1973 for structured collars and cuffs.",
    deliveryRange: "Overall Pakistan",
    products: [
      {
        id: "p-cb-1",
        name: "Classic Oxford Gents Blue Shirt",
        description: "The quintessential button-down collar Oxford shirt. Ideal daily wear for corporate and premium universities.",
        price: 3800,
        gender: "gents",
        category: "casual",
        image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&q=80&w=400",
        fabric: "Oxford Weave Cotton",
        color: "Ice Blue"
      },
      {
        id: "p-cb-2",
        name: "Premium Charcoal Dress Pants",
        description: "Flat front comfortable trousers with standard belt loops and premium stretch comfort fabric.",
        price: 3900,
        gender: "gents",
        category: "formal",
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=400",
        fabric: "Poly-Viscose Comfort",
        color: "Dark Charcoal"
      }
    ]
  },
  {
    id: "shop-14",
    name: "Uniworth",
    city: "Lahore",
    rating: 4.8,
    featured: false,
    specialization: "Formal Italian suits & executive accessories",
    description: "High-end bespoke suits and gentlemen collection. Uniworth has dressed generations on traditional formal wear.",
    deliveryRange: "Overall Pakistan with custom measurement services",
    products: [
      {
        id: "p-uw-1",
        name: "Traditional Prince Coat Onyx Black",
        description: "A masterclass tuxedo jacket replacement. Adorned with heritage metallic crest buttons on dark premium wool.",
        price: 19500,
        gender: "gents",
        category: "wedding",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400",
        fabric: "Wool-Silk Blend",
        color: "Onyx Black"
      },
      {
        id: "p-uw-2",
        name: "Burgundy Silk Luxury Tie & Pocket Square Set",
        description: "Elite pairing of jacquard silk tie and hand-rolled pocket square. Complete with elegant modern presentation box.",
        price: 2500,
        gender: "gents",
        category: "formal",
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=400",
        fabric: "100% Jacquard Silk",
        color: "Burgundy"
      }
    ]
  },
  {
    id: "shop-15",
    name: "Charcoal",
    city: "Rawalpindi",
    rating: 4.6,
    featured: false,
    specialization: "Gents modern casual sweaters, coats & jackets",
    description: "High street menswear with contemporary European silhouettes optimized carefully for Pakistani climates.",
    deliveryRange: "Overall Pakistan",
    products: [
      {
        id: "p-ch-1",
        name: "Mens Olive Sherpa Winter Jacket",
        description: "Utmost warm casual winter layer featuring premium inner sherpa wool lining & strong utility canvas.",
        price: 9800,
        gender: "gents",
        category: "casual",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=400",
        fabric: "Heavy Denim Canvas & Wool",
        color: "Olive Sage Green"
      },
      {
        id: "p-ch-2",
        name: "Gents Crimson Festive Kurta Pajama set",
        description: "Striking bright red formal gents kurta. Accompanied with white narrow trousers. Perfect for Eid and weddings.",
        price: 8500,
        gender: "gents",
        category: "partywear",
        image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=400",
        fabric: "Viscose Pure cotton",
        color: "Crimson Red"
      }
    ]
  },
  {
    id: "shop-16",
    name: "Ismail Farid",
    city: "Karachi",
    rating: 4.9,
    featured: true,
    specialization: "Luxury designer gents couture and Sherwanis",
    description: "Unique high-fashion designer Gents brand. Known for non-traditional cuts, organic dyes & world-class modern groom fittings.",
    deliveryRange: "Overall Pakistan & Global Custom fitting",
    products: [
      {
        id: "p-if-1",
        name: "Midnight Indigo Kurta with Hand-stitches",
        description: "Exquisite raw-cotton textured designer kurta. Unique running stitch on placket for a very classy avant-garde touch.",
        price: 14500,
        gender: "gents",
        category: "formal",
        image: "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?auto=format&fit=crop&q=80&w=400",
        fabric: "Pure Slub Handloom Cotton",
        color: "Indigo Night"
      },
      {
        id: "p-if-2",
        name: "Oatmeal Designer Prince Coat",
        description: "Exceptional modern prince coat tailored from heavy rustic Linen-Jute. Exudes class and relaxed luxury.",
        price: 28000,
        gender: "gents",
        category: "wedding",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400",
        fabric: "Linen-Jute Handloom",
        color: "Oatmeal Beige"
      }
    ]
  },
  {
    id: "shop-17",
    name: "Bareeze",
    city: "Lahore",
    rating: 4.9,
    featured: true,
    specialization: "Heritage embroidered ladies lawn and premium chiffon",
    description: "An institution of Pakistani high fashion. Famous for classic embroideries that stand the test of multiple wash cycles.",
    deliveryRange: "Overall Pakistan",
    products: [
      {
        id: "p-bz-1",
        name: "Ladies Royal Black Embroidered Shawl",
        description: "The iconic Bareeze black velvet shawl with exquisite golden and tilla floral hand looms.",
        price: 45000,
        gender: "ladies",
        category: "wedding",
        image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=400",
        fabric: "Premium Micro-Velvet & Zari",
        color: "Onyx Gold"
      },
      {
        id: "p-bz-2",
        name: "Sage Mint Embroidered 3-Piece",
        description: "Finely embroidered cotton-satin shirt piece, bordered dupatta, and premium soft matching pants.",
        price: 19500,
        gender: "ladies",
        category: "formal",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=400",
        fabric: "Elite Swiss Cotton Satin",
        color: "Sage Mint"
      }
    ]
  },
  {
    id: "shop-18",
    name: "Kayseria",
    city: "Multan",
    rating: 4.7,
    featured: false,
    specialization: "Artistic traditional prints and classic Phulkari motifs",
    description: "Where art meets fashion. Beautifully printed fabrics carrying heritage motifs from Multan and ancient Indus valley.",
    deliveryRange: "Overall Pakistan",
    products: [
      {
        id: "p-ky-1",
        name: "Ladies Multani Blue-Pottery Printed Kurta",
        description: "Classic blue-and-white hand-block styled printing, inspired directly from Multani clay pottery.",
        price: 3400,
        gender: "ladies",
        category: "casual",
        image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&q=80&w=400",
        fabric: "Summer Lawn Khaddar",
        color: "Cobalt Blue & White"
      },
      {
        id: "p-ky-2",
        name: "Marigold Yellow Phulkari Dupatta Set",
        description: "Vibrant yellow set focusing on beautiful thick geometric Phulkari traditional threads.",
        price: 8500,
        gender: "ladies",
        category: "partywear",
        image: "https://images.unsplash.com/photo-1583391265517-35bbdad01209?auto=format&fit=crop&q=80&w=400",
        fabric: "Handwoven Cotton Silk",
        color: "Marigold Orange Yellow"
      }
    ]
  },
  {
    id: "shop-19",
    name: "Nishat Linen",
    city: "Faisalabad",
    rating: 4.7,
    featured: false,
    specialization: "Versatile, affordable family outfits and lawn/pret",
    description: "One of the largest textile factories in Faisalabad. High durability and vast designs for overall family members.",
    deliveryRange: "Overall Pakistan & Nationwide COD",
    products: [
      {
        id: "p-nl-1",
        name: "Ladies Dusty Rose Daily Printed Kurti",
        description: "Easy-breathe daily wear lawn shirt with modern abstract leafy structures and soft pastel tones.",
        price: 2500,
        gender: "ladies",
        category: "casual",
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=400",
        fabric: "Cambric Lawn",
        color: "Dusty Rose"
      },
      {
        id: "p-nl-2",
        name: "Gents Silver Pearl Shalwar Kameez",
        description: "Immaculate standard fit gent's outfit, featuring clean minimal chest pocket embroidery and rigid formal collar.",
        price: 5800,
        gender: "gents",
        category: "formal",
        image: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?auto=format&fit=crop&q=80&w=400",
        fabric: "Poly-Cotton Breeze Soft",
        color: "Silver White Pearl"
      }
    ]
  },
  {
    id: "shop-20",
    name: "Bonanza Satrangi",
    city: "Peshawar",
    rating: 4.6,
    featured: false,
    specialization: "Cosy winter karandi prints & gents floral waistcoats",
    description: "Rich collections ranging from refreshing summer lawn colors to snug, beautiful winter soft wools.",
    deliveryRange: "Overall Pakistan",
    products: [
      {
        id: "p-bs-1",
        name: "Ladies Plum Karandi Heavy Embroidered 3-Piece",
        description: "Warm plum-colored winter Karandi suite with a highly ornate wool-blend shawl. Cozy and beautiful.",
        price: 9900,
        gender: "ladies",
        category: "casual",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=400",
        fabric: "Winter Karandi Texture",
        color: "Grape Plum"
      },
      {
        id: "p-bs-2",
        name: "Gents Golden Brocade Waistcoat",
        description: "Beautifully styled waistcoat to pair over plain white or black shalwar kameez for weddings.",
        price: 7500,
        gender: "gents",
        category: "partywear",
        image: "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?auto=format&fit=crop&q=80&w=400",
        fabric: "Brocade Silk Jamawar",
        color: "Champagne Golden"
      }
    ]
  },
  {
    id: "shop-21",
    name: "Zellbury",
    city: "Sialkot",
    rating: 4.5,
    featured: false,
    specialization: "Highly budget-friendly everyday wear for gents & ladies",
    description: "Stellar value-for-money fashion. Modern aesthetic prints with extremely accessible prices for all Pakistanis.",
    deliveryRange: "Overall Pakistan Courier",
    products: [
      {
        id: "p-zb-1",
        name: "Ladies Sialkot Sports Stripe Kurta",
        description: "Lightweight, breathable casual wear tunic featuring sporty neon trim borders. Dynamic and comfortable.",
        price: 1800,
        gender: "ladies",
        category: "casual",
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=400",
        fabric: "Super Light Lawn",
        color: "Mint Neon"
      },
      {
        id: "p-zb-2",
        name: "Gents Slate Blue Casual Kurta",
        description: "Plain durable cotton kurta for everyday street walks and household chilling.",
        price: 2400,
        gender: "gents",
        category: "casual",
        image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=400",
        fabric: "100% Khaddar-Cotton",
        color: "Slate Blue"
      }
    ]
  },
  {
    id: "shop-22",
    name: "ChenOne",
    city: "Faisalabad",
    rating: 4.6,
    featured: false,
    specialization: "Western styled casual wear & premium home linens",
    description: "Pioneering lifestyle store hosting modern denim, plaid shirts, chic ladies tops and winter knits.",
    deliveryRange: "Overall Pakistan",
    products: [
      {
        id: "p-co-1",
        name: "Gents Navy Gingham Plaid Shirt",
        description: "Formal/Casual button-down collared dress shirt with chest pockets. Pairs great with corporate chinos.",
        price: 3900,
        gender: "gents",
        category: "casual",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=400",
        fabric: "Pima Cotton Flannel",
        color: "Navy & White Gingham"
      }
    ]
  },
  {
    id: "shop-23",
    name: "Outfitters",
    city: "Lahore",
    rating: 4.8,
    featured: false,
    specialization: "Western street-wear, graphic hoodies & denims",
    description: "The youthful heartbeat of Pakistan. Outfitters delivers edge, trendiness, and high-quality Western wear since 2003.",
    deliveryRange: "Overall Pakistan",
    products: [
      {
        id: "p-of-1",
        name: "Gents Utility Olive Cargo Jacket",
        description: "Sturdy streetwear jacket with multi-pocket system, custom steel snaps and water repellent canvas.",
        price: 6900,
        gender: "gents",
        category: "casual",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=400",
        fabric: "Heavy Cotton Twill",
        color: "Sage Cargo Olive"
      },
      {
        id: "p-of-2",
        name: "Ladies Pastel Pink Oversized Hoodie",
        description: "Super warm soft-fleece street style hoodie with bold typography print.",
        price: 3800,
        gender: "ladies",
        category: "casual",
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=400",
        fabric: "Premium Brushed Fleece",
        color: "Baby Pink"
      }
    ]
  },
  {
    id: "shop-24",
    name: "Ethnic by Outfitters",
    city: "Lahore",
    rating: 4.7,
    featured: false,
    specialization: "Splendid ladies ethnic pret and loose fusion cuts",
    description: "Spinning traditional patterns with quirky modern silhouettes. Beloved by university students and working women.",
    deliveryRange: "Overall Pakistan",
    products: [
      {
        id: "p-et-1",
        name: "Ladies Mustard Bukhara Printed Kurti",
        description: "Loose traditional Kurti layout, boasting gorgeous Turkish motifs and statement flared sleeves.",
        price: 3900,
        gender: "ladies",
        category: "casual",
        image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&q=80&w=400",
        fabric: "Rayon Jacquard",
        color: "Bukhara Gold"
      }
    ]
  },
  {
    id: "shop-25",
    name: "Cross Stitch",
    city: "Karachi",
    rating: 4.7,
    featured: false,
    specialization: "Delicate digital silk prints and premium unstitched cambric",
    description: "Distinguished embroidery thread-work and high-quality chiffon duppatas setting high ladies styling levels.",
    deliveryRange: "Overall Pakistan",
    products: [
      {
        id: "p-cs-1",
        name: "Ladies Teal Blossom Luxury Silk Tux",
        description: "Dazzling digital printed pure silk shirt adorned with pearls along the sleek collar border.",
        price: 14900,
        gender: "ladies",
        category: "partywear",
        image: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?auto=format&fit=crop&q=80&w=400",
        fabric: "100% Pure Medium Silk",
        color: "Teal Blossom"
      }
    ]
  },
  {
    id: "shop-26",
    name: "Charizma",
    city: "Lahore",
    rating: 4.6,
    featured: false,
    specialization: "Heavy lawn collections and luxury velvet warm suites",
    description: "Bringing high embroidery richness and comfortable designer lawn right to your doorstep across Pakistan.",
    deliveryRange: "Overall Pakistan",
    products: [
      {
        id: "p-chz-1",
        name: "Ladies Chiffon Amber Festive Frock",
        description: "Three-piece heavily embroidered gold zari thread Chiffon masterpiece with fully lined satin trousers.",
        price: 18500,
        gender: "ladies",
        category: "wedding",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=400",
        fabric: "Chiffon & Jamawar",
        color: "Amber Gold Red"
      }
    ]
  },
  {
    id: "shop-27",
    name: "Generation",
    city: "Lahore",
    rating: 4.8,
    featured: true,
    specialization: "Bohemian artistic traditional ladies cuts & handlooms",
    description: "Eco-friendly, highly creative classic designs representing unique Pakistani female empowerment and artistry.",
    deliveryRange: "Overall Pakistan Home Delivery",
    products: [
      {
        id: "p-ge-1",
        name: "Artisanal Indigo Block Print Frock",
        description: "Beautiful loose flare dress styled with ancient Sindhi Ajrak block and organic natural indigo dyes. Stunningly unique.",
        price: 5900,
        gender: "ladies",
        category: "casual",
        image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&q=80&w=400",
        fabric: "Organic Handloom Khaddar",
        color: "Natural Indigo Blue"
      }
    ]
  },
  {
    id: "shop-28",
    name: "Rang Ja",
    city: "Sargodha",
    rating: 4.5,
    featured: false,
    specialization: "Quirky, ultra-colorful ethnic ladies festive wear",
    description: "Extravagant festive design bursting with traditional mirror crafts, multi-colors, and beautiful folk cuts.",
    deliveryRange: "Overall Pakistan Post",
    products: [
      {
        id: "p-rj-1",
        name: "Vibrant Multani Peacock Peplum",
        description: "Heavily beaded multi-colored short peplum shirt with vibrant orange, pink, and turquoise embroidery patches.",
        price: 8900,
        gender: "ladies",
        category: "partywear",
        image: "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&q=80&w=400",
        fabric: "Cotton-Georgette Fusion",
        color: "Rainbow Multicolored"
      }
    ]
  },
  {
    id: "shop-29",
    name: "Damas & Janoon",
    city: "Gujranwala",
    rating: 4.6,
    featured: false,
    specialization: "Stately formal gents wedding coats & premium shawls",
    description: "Traditional groom wear specialist in Gujranwala, providing royal outfits and hand-made waistcoats.",
    deliveryRange: "Overall Pakistan Delivery",
    products: [
      {
        id: "p-jn-1",
        name: "Classic Beige Gents Waistcoat",
        description: "Neatly tailored groom waistcoat styled with luxury brass shield buttons and dual pocket slips.",
        price: 6500,
        gender: "gents",
        category: "partywear",
        image: "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?auto=format&fit=crop&q=80&w=400",
        fabric: "Raw Silk Brocade",
        color: "Cream Beige"
      }
    ]
  },
  {
    id: "shop-30",
    name: "Amir Adnan",
    city: "Quetta",
    rating: 4.9,
    featured: true,
    specialization: "Imperial groom Sherwanis & classic prince suits",
    description: "Amir Adnan pioneered the revival of the modern Sherwani in Pakistan, crafting legacy pieces for prime ministers and icons.",
    deliveryRange: "Overall Pakistan bespoke deliveries",
    products: [
      {
        id: "p-aa-1",
        name: "Imperial Charcoal Prince Suit Coat",
        description: "Exquisite executive fit coat with premium structured shoulders. Adorned with monogrammed antique silver buttons.",
        price: 45000,
        gender: "gents",
        category: "wedding",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400",
        fabric: "Imperial Swati Wool-Silk",
        color: "Deep Charcoal Black"
      },
      {
        id: "p-aa-2",
        name: "Gents Pure Ruby Silk Turban (Paghri)",
        description: "Pre-tied royal silk wedding turban featuring fine golden tilla border. Adds majestic elegance to any Sherwani.",
        price: 9500,
        gender: "gents",
        category: "wedding",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=400",
        fabric: "Pure Banarsi Silk",
        color: "Ruby Crimson Gold"
      }
    ]
  }
];

export function getAllProducts(): Product[] {
  const all: Product[] = [];
  SHOPS.forEach(shop => {
    shop.products.forEach(prod => {
      all.push({
        ...prod,
        // keep track of parent shop name and city inside product too
        id: `${shop.id}-${prod.id}`
      });
    });
  });
  return all;
}
