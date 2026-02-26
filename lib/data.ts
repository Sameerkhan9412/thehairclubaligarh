export interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  price?: string;
  category: "facial" | "hair" | "grooming" | "body";
  icon: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "korean-hydra-facial",
    name: "Korean Hydra Facial",
    description:
      "Deep cleansing, exfoliation, and hydration using advanced Korean skincare technology for a radiant, glass-skin glow.",
    duration: "60 min",
    price: "₹1,499",
    category: "facial",
    icon: "✦",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=750&fit=crop&crop=faces",
  },
  {
    id: "o3-whitening-facial",
    name: "O3 Whitening / Brightening Facial",
    description:
      "Professional-grade brightening treatment that evens skin tone and restores natural luminosity with O3+ products.",
    duration: "75 min",
    price: "₹1,299",
    category: "facial",
    icon: "◈",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=750&fit=crop&crop=faces",
  },
  {
    id: "premium-hair-spa",
    name: "Premium Hair Spa",
    description:
      "Luxurious deep conditioning treatment with hot oil massage, steam therapy, and premium hair masks for silky, revitalized hair.",
    duration: "90 min",
    price: "₹999",
    category: "hair",
    icon: "❋",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=750&fit=crop",
  },
  {
    id: "premium-pedicure",
    name: "Premium Pedicure",
    description:
      "Complete foot care experience with exfoliation, massage, and premium nail care for perfectly groomed feet.",
    duration: "45 min",
    price: "₹699",
    category: "body",
    icon: "◆",
    image:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&h=750&fit=crop",
  },
  {
    id: "premium-manicure",
    name: "Premium Manicure",
    description:
      "Elegant hand care with cuticle treatment, moisturizing massage, and flawless nail shaping and finishing.",
    duration: "40 min",
    price: "₹599",
    category: "body",
    icon: "◇",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=750&fit=crop",
  },
  {
    id: "half-leg-wax",
    name: "Half Leg Wax",
    description:
      "Professional waxing using premium, gentle wax for smooth, lasting results with minimal discomfort.",
    duration: "30 min",
    price: "₹399",
    category: "body",
    icon: "▹",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=750&fit=crop",
  },
  {
    id: "half-hand-wax",
    name: "Half Hand Wax",
    description:
      "Expert waxing service using hypoallergenic premium wax for silky-smooth arms and long-lasting results.",
    duration: "25 min",
    price: "₹349",
    category: "body",
    icon: "▸",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=750&fit=crop",
  },
  {
    id: "advanced-haircut",
    name: "Advanced Haircut",
    description:
      "Precision haircut by expert stylists using advanced techniques tailored to your face shape and personal style.",
    duration: "45 min",
    price: "₹499",
    category: "hair",
    icon: "✂",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=750&fit=crop&crop=faces",
  },
  {
    id: "thread-work",
    name: "Thread Work",
    description:
      "Precise facial threading for clean, defined brows and a polished appearance using traditional techniques.",
    duration: "20 min",
    price: "₹149",
    category: "grooming",
    icon: "◌",
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=750&fit=crop",
  },
  {
    id: "hair-color",
    name: "Hair Color",
    description:
      "Professional hair coloring with premium ammonia-free products. From subtle highlights to bold transformations.",
    duration: "120 min",
    price: "₹1,999",
    category: "hair",
    icon: "◎",
    image:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=750&fit=crop&crop=faces",
  },
  {
    id: "beard-grooming",
    name: "Beard Grooming",
    description:
      "Expert beard shaping, trimming, and conditioning with premium oils for a distinguished, well-groomed look.",
    duration: "30 min",
    price: "₹349",
    category: "grooming",
    icon: "⬥",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=750&fit=crop&crop=faces",
  },
  {
    id: "head-massage",
    name: "Head Massage",
    description:
      "Relaxing therapeutic head massage with premium herbal oils to relieve stress and promote hair health.",
    duration: "30 min",
    price: "₹299",
    category: "grooming",
    icon: "❂",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=750&fit=crop",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    service: "Advanced Haircut & Beard Grooming",
    text: "Absolutely the best grooming experience in Aligarh. The attention to detail and the premium ambiance make every visit feel special. Highly recommend The Hair Club.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
  },
  {
    id: 2,
    name: "Aarav Gupta",
    service: "Korean Hydra Facial",
    text: "The Korean Hydra Facial transformed my skin completely. The staff is incredibly professional, and the hygiene standards are top-notch. A truly luxury experience.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
  },
  {
    id: 3,
    name: "Vikram Singh",
    service: "Premium Hair Spa",
    text: "I've been to many salons, but The Hair Club is in a league of its own. The premium hair spa left my hair feeling incredible. Worth every rupee.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
  },
  {
    id: 4,
    name: "Arjun Verma",
    service: "Hair Color",
    text: "Professional service from start to finish. The stylist understood exactly what I wanted and delivered beyond expectations. This is the gold standard for Aligarh.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=faces",
  },
];

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Classic Taper Fade",
    category: "haircut",
    beforeImage:
      "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=600&h=800&fit=crop&crop=faces",
    afterImage:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=800&fit=crop&crop=faces",
    description: "Precision taper fade with textured top styling",
  },
  {
    id: 2,
    title: "Beard Sculpting",
    category: "grooming",
    beforeImage:
      "https://images.unsplash.com/photo-1543357480-c60d40007a3f?w=600&h=800&fit=crop&crop=faces",
    afterImage:
      "https://images.unsplash.com/photo-1567894340315-735d7c361db7?w=600&h=800&fit=crop&crop=faces",
    description: "Expert beard shaping with defined neckline and cheek line",
  },
  {
    id: 3,
    title: "Korean Hydra Glow",
    category: "facial",
    beforeImage:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=800&fit=crop&crop=faces",
    afterImage:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=800&fit=crop&crop=faces",
    description: "Glass-skin transformation with Korean hydra facial",
  },
  {
    id: 4,
    title: "Hair Color Transformation",
    category: "color",
    beforeImage:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=800&fit=crop&crop=faces",
    afterImage:
      "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=600&h=800&fit=crop&crop=faces",
    description: "Bold color transformation with premium ammonia-free products",
  },
  {
    id: 5,
    title: "Textured Crop",
    category: "haircut",
    beforeImage:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=600&h=800&fit=crop&crop=faces",
    afterImage:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=800&fit=crop&crop=faces",
    description: "Modern textured crop with seamless fade sides",
  },
  {
    id: 6,
    title: "Premium Hair Spa Results",
    category: "treatment",
    beforeImage:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=800&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=800&fit=crop",
    description: "Deep conditioning spa treatment for silky revitalized hair",
  },
  {
    id: 7,
    title: "Full Beard Makeover",
    category: "grooming",
    beforeImage:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=600&h=800&fit=crop&crop=faces",
    afterImage:
      "https://images.unsplash.com/photo-1619533394727-57d522857f89?w=600&h=800&fit=crop&crop=faces",
    description: "Complete beard transformation from unkempt to refined",
  },
  {
    id: 8,
    title: "Skin Brightening",
    category: "facial",
    beforeImage:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=800&fit=crop&crop=faces",
    afterImage:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=800&fit=crop&crop=faces",
    description: "O3+ brightening facial for even-toned radiant complexion",
  },
  {
    id: 9,
    title: "Pompadour Style",
    category: "haircut",
    beforeImage:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop&crop=faces",
    afterImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop&crop=faces",
    description: "Classic pompadour with modern finishing and hold",
  },
  {
    id: 10,
    title: "Relaxing Head Massage",
    category: "treatment",
    beforeImage:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=800&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=600&h=800&fit=crop",
    description: "Therapeutic head massage with premium herbal oils",
  },
  {
    id: 11,
    title: "Blonde Highlights",
    category: "color",
    beforeImage:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&h=800&fit=crop&crop=faces",
    afterImage:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=800&fit=crop&crop=faces",
    description: "Subtle blonde highlights for a natural sun-kissed look",
  },
  {
    id: 12,
    title: "Clean Shave & Facial",
    category: "grooming",
    beforeImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=faces",
    afterImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=faces",
    description: "Premium clean shave with hot towel treatment",
  },
];

// Hero & About section images
export const brandImages = {
  hero:
    "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=1920&h=1080&fit=crop&crop=faces",
  heroBg:
    "https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?w=1920&h=1080&fit=crop",
  about1:
    "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=800&h=1000&fit=crop&crop=faces",
  about2:
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=1000&fit=crop&crop=faces",
  salonInterior:
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1200&h=800&fit=crop",
  salonChair:
    "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=800&h=1000&fit=crop",
  tools:
    "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=800&h=600&fit=crop",
  team:
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=600&fit=crop&crop=faces",
  specialOffer:
    "https://images.unsplash.com/photo-1567894340315-735d7c361db7?w=800&h=1000&fit=crop&crop=faces",
};