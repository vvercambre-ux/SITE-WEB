export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  category: "sacs" | "sneakers" | "accessoires";
  images: string[];
  description: string;
  details: string[];
  colors: string[];
  sizes?: string[];
  badge?: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}

export const products: Product[] = [
  // SACS
  {
    id: "sac-001",
    name: "Matelassé Noir Élégance",
    slug: "matelasse-noir-elegance",
    price: 189,
    originalPrice: 229,
    category: "sacs",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
    ],
    description: "Un sac matelassé noir intemporel qui sublime chaque silhouette. Cuir souple au toucher, finitions dorées et chaîne amovible pour un style versatile du jour à la nuit.",
    details: [
      "Cuir vegan premium",
      "Chaîne dorée amovible",
      "Doublure satin intérieure",
      "Poche intérieure zippée",
      "Dimensions : 26 x 16 x 8 cm",
    ],
    colors: ["Noir", "Crème", "Kaki"],
    badge: "Best-seller",
    rating: 4.9,
    reviews: 127,
    inStock: true,
  },
  {
    id: "sac-002",
    name: "Pochette Crème Signature",
    slug: "pochette-creme-signature",
    price: 149,
    category: "sacs",
    images: [
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
    ],
    description: "La pochette crème Signature incarne l'élégance décontractée. Son format compact et sa matière premium en font le compagnon idéal des soirées et des journées stylées.",
    details: [
      "Cuir vegan texturé",
      "Fermoir magnétique doré",
      "Bandoulière fine amovible",
      "Compartiment principal + poche carte",
      "Dimensions : 22 x 14 x 5 cm",
    ],
    colors: ["Crème", "Noir", "Rose poudré"],
    badge: "Nouveau",
    rating: 4.8,
    reviews: 84,
    inStock: true,
  },
  {
    id: "sac-003",
    name: "Sac Kaki Urban Chic",
    slug: "sac-kaki-urban-chic",
    price: 219,
    category: "sacs",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&q=80",
    ],
    description: "Le sac Kaki Urban Chic fusionne l'esprit streetwear et l'élégance. Grande capacité, détails métalliques soignés et une allure qui ne passe jamais inaperçue.",
    details: [
      "Cuir vegan grain fin",
      "Double compartiment",
      "Poches intérieures multiples",
      "Anses + bandoulière ajustable",
      "Dimensions : 32 x 24 x 12 cm",
    ],
    colors: ["Kaki", "Noir", "Camel"],
    rating: 4.7,
    reviews: 63,
    inStock: true,
  },
  {
    id: "sac-004",
    name: "Mini Sac Chaîne Doré",
    slug: "mini-sac-chaine-dore",
    price: 129,
    category: "sacs",
    images: [
      "https://images.unsplash.com/photo-1612902456551-404b5b8e5b44?w=800&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
    ],
    description: "Le mini sac parfait pour les essentiels. Chaîne dorée, format compact et design matelassé — tout ce qu'il faut pour un look affirmé.",
    details: [
      "Cuir vegan matelassé",
      "Chaîne dorée fixe",
      "Fermoir clapet magnétique",
      "Une poche intérieure",
      "Dimensions : 18 x 12 x 6 cm",
    ],
    colors: ["Noir", "Blanc", "Rose"],
    badge: "Tendance",
    rating: 4.8,
    reviews: 95,
    inStock: true,
  },

  // SNEAKERS
  {
    id: "snk-001",
    name: "Sneakers Chunky Cloud",
    slug: "sneakers-chunky-cloud",
    price: 169,
    originalPrice: 199,
    category: "sneakers",
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
    ],
    description: "Les Chunky Cloud redéfinissent le confort avec style. Semelle épaisse ultra-légère, design sculptural et coloris blanc cassé qui se marie avec tout.",
    details: [
      "Tige en mesh et cuir synthétique",
      "Semelle plateforme 5 cm",
      "Semelle intérieure mémoire de forme",
      "Lacets plats oversized",
      "Poids : 320g",
    ],
    colors: ["Blanc cassé", "Noir", "Beige"],
    sizes: ["36", "37", "38", "39", "40", "41"],
    badge: "Best-seller",
    rating: 4.9,
    reviews: 203,
    inStock: true,
  },
  {
    id: "snk-002",
    name: "Runner Kaki Street",
    slug: "runner-kaki-street",
    price: 159,
    category: "sneakers",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
    ],
    description: "La Runner Kaki Street apporte du caractère à chaque pas. Coloris kaki profond, détails réfléchissants et semelle texturée pour un look résolument urbain.",
    details: [
      "Tige textile respirante",
      "Semelle en caoutchouc texturé",
      "Détails réfléchissants",
      "Languette rembourrée",
      "Poids : 290g",
    ],
    colors: ["Kaki", "Noir", "Gris"],
    sizes: ["36", "37", "38", "39", "40", "41"],
    badge: "Nouveau",
    rating: 4.7,
    reviews: 89,
    inStock: true,
  },
  {
    id: "snk-003",
    name: "Platform Retro Cream",
    slug: "platform-retro-cream",
    price: 179,
    category: "sneakers",
    images: [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
    ],
    description: "Rétro et moderne à la fois. La Platform Retro Cream offre une silhouette affirmée avec sa semelle chunky et son cuir crème texturé.",
    details: [
      "Cuir synthétique premium",
      "Semelle plateforme 6 cm",
      "Insert gel anti-choc",
      "Œillets métalliques dorés",
      "Poids : 350g",
    ],
    colors: ["Crème", "Noir", "Rose poudré"],
    sizes: ["36", "37", "38", "39", "40", "41"],
    rating: 4.8,
    reviews: 156,
    inStock: true,
  },
  {
    id: "snk-004",
    name: "Sneakers Noir Minimal",
    slug: "sneakers-noir-minimal",
    price: 149,
    category: "sneakers",
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
    ],
    description: "L'élégance dans sa forme la plus pure. Les Sneakers Noir Minimal allient design épuré et confort premium pour un quotidien stylé sans effort.",
    details: [
      "Cuir vegan lisse",
      "Semelle fine profilée",
      "Intérieur microfibre",
      "Lacets cirés",
      "Poids : 260g",
    ],
    colors: ["Noir", "Blanc", "Marine"],
    sizes: ["36", "37", "38", "39", "40", "41"],
    rating: 4.6,
    reviews: 112,
    inStock: true,
  },

  // ACCESSOIRES
  {
    id: "acc-001",
    name: "Ceinture Chaîne Or",
    slug: "ceinture-chaine-or",
    price: 79,
    category: "accessoires",
    images: [
      "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=800&q=80",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
    ],
    description: "La ceinture chaîne qui transforme n'importe quelle tenue. Maillons dorés élégants, cuir souple — l'accessoire mode indispensable.",
    details: [
      "Chaîne en métal doré",
      "Cuir vegan souple",
      "Boucle ajustable",
      "Largeur : 2 cm",
      "Taille unique ajustable",
    ],
    colors: ["Or/Noir", "Or/Crème", "Argent/Noir"],
    badge: "Tendance",
    rating: 4.7,
    reviews: 74,
    inStock: true,
  },
  {
    id: "acc-002",
    name: "Lunettes Oversize Élara",
    slug: "lunettes-oversize-elara",
    price: 99,
    category: "accessoires",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    ],
    description: "Des lunettes oversize au caractère affirmé. Monture acétate, verres dégradés et une allure star qui ne passe jamais inaperçue.",
    details: [
      "Monture acétate premium",
      "Verres dégradés UV400",
      "Charnières métal renforcées",
      "Étui rigide inclus",
      "Largeur : 14.5 cm",
    ],
    colors: ["Noir", "Écaille", "Crème"],
    rating: 4.8,
    reviews: 58,
    inStock: true,
  },
  {
    id: "acc-003",
    name: "Écharpe Cachemire Sable",
    slug: "echarpe-cachemire-sable",
    price: 119,
    originalPrice: 149,
    category: "accessoires",
    images: [
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80",
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80",
    ],
    description: "Douceur et élégance incarnées. Cette écharpe en mélange cachemire offre un toucher incomparable et une chaleur enveloppante pour les journées fraîches.",
    details: [
      "70% laine, 30% cachemire",
      "Finitions franges",
      "Tissage fin et léger",
      "Dimensions : 200 x 70 cm",
      "Entretien : nettoyage à sec",
    ],
    colors: ["Sable", "Gris chiné", "Noir"],
    badge: "Promo",
    rating: 4.9,
    reviews: 91,
    inStock: true,
  },
  {
    id: "acc-004",
    name: "Montre Minimal Gold",
    slug: "montre-minimal-gold",
    price: 199,
    category: "accessoires",
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
    ],
    description: "Le temps en mode élégant. Cadran épuré, bracelet mesh doré et un design qui traverse les tendances sans prendre une ride.",
    details: [
      "Mouvement quartz japonais",
      "Bracelet mesh acier doré",
      "Cadran 34mm",
      "Étanche 3 ATM",
      "Garantie 2 ans",
    ],
    colors: ["Or", "Or rose", "Argent"],
    rating: 4.8,
    reviews: 67,
    inStock: true,
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((p) => p.category === category);
};

export const getBestSellers = (): Product[] => {
  return products.filter((p) => p.badge === "Best-seller" || p.reviews > 100);
};

export const getNewArrivals = (): Product[] => {
  return products.filter((p) => p.badge === "Nouveau" || p.badge === "Tendance");
};

export const getSimilarProducts = (product: Product): Product[] => {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
};
