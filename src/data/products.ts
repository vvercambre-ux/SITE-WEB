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
  // ═══ SACS PUFFER ═══
  {
    id: "sac-001",
    name: "Puffer Bag Noir",
    slug: "puffer-bag-noir",
    price: 89,
    originalPrice: 109,
    category: "sacs",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
    ],
    description: "Le sac puffer noir iconique. Volume généreux, texture matelassée ultra-douce et look streetwear chic. Le compagnon parfait pour affirmer votre style au quotidien.",
    details: [
      "Nylon ripstop premium",
      "Rembourrage synthétique léger",
      "Double anse rembourrée",
      "Fermeture zippée principale",
      "Poche intérieure + poche frontale",
      "Dimensions : 35 x 25 x 15 cm",
    ],
    colors: ["Noir", "Kaki", "Crème"],
    badge: "Best-seller",
    rating: 4.9,
    reviews: 187,
    inStock: true,
  },
  {
    id: "sac-002",
    name: "Puffer Bag Kaki",
    slug: "puffer-bag-kaki",
    price: 89,
    category: "sacs",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&q=80",
    ],
    description: "Le puffer bag kaki qui fusionne l'esprit militaire et le streetwear moderne. Coloris olive profond, texture gonflée et allure affirmée pour un style urbain sans effort.",
    details: [
      "Nylon ripstop premium",
      "Rembourrage synthétique léger",
      "Double anse rembourrée",
      "Fermeture zippée principale",
      "Poche intérieure + poche frontale",
      "Dimensions : 35 x 25 x 15 cm",
    ],
    colors: ["Kaki", "Noir", "Crème"],
    badge: "Tendance",
    rating: 4.8,
    reviews: 134,
    inStock: true,
  },
  {
    id: "sac-003",
    name: "Puffer Bag Crème",
    slug: "puffer-bag-creme",
    price: 89,
    category: "sacs",
    images: [
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
    ],
    description: "Le puffer bag crème vanille, doux et lumineux. Sa teinte claire apporte de la fraîcheur à n'importe quel look, tout en gardant le caractère puffer signature.",
    details: [
      "Nylon ripstop premium",
      "Rembourrage synthétique léger",
      "Double anse rembourrée",
      "Fermeture zippée principale",
      "Poche intérieure + poche frontale",
      "Dimensions : 35 x 25 x 15 cm",
    ],
    colors: ["Crème", "Noir", "Kaki"],
    badge: "Nouveau",
    rating: 4.9,
    reviews: 98,
    inStock: true,
  },
  {
    id: "sac-004",
    name: "Mini Puffer Chaîne",
    slug: "mini-puffer-chaine",
    price: 69,
    category: "sacs",
    images: [
      "https://images.unsplash.com/photo-1612902456551-404b5b8e5b44?w=800&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
    ],
    description: "Le mini puffer avec chaîne dorée pour les sorties. Format compact, look affirmé et texture puffer iconique. Parfait pour emporter juste l'essentiel avec style.",
    details: [
      "Nylon matelassé",
      "Chaîne dorée amovible",
      "Bandoulière ajustable",
      "Fermoir magnétique",
      "Une poche intérieure",
      "Dimensions : 22 x 15 x 8 cm",
    ],
    colors: ["Noir", "Crème", "Kaki"],
    rating: 4.7,
    reviews: 76,
    inStock: true,
  },

  // ═══ SNEAKERS ═══
  {
    id: "snk-001",
    name: "Gazelle Bold Earth",
    slug: "gazelle-bold-earth",
    price: 129,
    originalPrice: 149,
    category: "sneakers",
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
    ],
    description: "La Gazelle Bold revisitée dans un coloris earth chaud. Tige suede beige, bandes terracotta et vert forêt, semelle gomme épaisse. Le style rétro-moderne par excellence.",
    details: [
      "Tige suede premium",
      "Bandes contrastées cuir",
      "Semelle plateforme gomme 4 cm",
      "Lacets plats coton",
      "Doublure textile respirante",
      "Poids : 340g",
    ],
    colors: ["Beige/Terracotta", "Noir/Blanc", "Crème/Vert"],
    sizes: ["36", "37", "38", "39", "40", "41"],
    badge: "Best-seller",
    rating: 4.9,
    reviews: 243,
    inStock: true,
  },
  {
    id: "snk-002",
    name: "Spezial Léopard",
    slug: "spezial-leopard",
    price: 139,
    category: "sneakers",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
    ],
    description: "La Spezial en imprimé léopard — audacieuse et irrésistible. Pony hair texturé, bandes blanches contrastées, semelle gomme chunky et détail bleu ciel. Le statement piece.",
    details: [
      "Tige pony hair imprimé léopard",
      "Bandes cuir blanc",
      "Semelle plateforme gomme 4.5 cm",
      "Languette et col rembourrés bleu ciel",
      "Œillets dorés",
      "Poids : 360g",
    ],
    colors: ["Léopard", "Noir", "Blanc"],
    sizes: ["36", "37", "38", "39", "40", "41"],
    badge: "Nouveau",
    rating: 4.8,
    reviews: 156,
    inStock: true,
  },
  {
    id: "snk-003",
    name: "Platform Retro Cream",
    slug: "platform-retro-cream",
    price: 119,
    category: "sneakers",
    images: [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
    ],
    description: "Rétro et moderne à la fois. La Platform Retro Cream offre une silhouette affirmée avec sa semelle chunky et son cuir crème texturé. Parfaite en toute saison.",
    details: [
      "Cuir synthétique premium",
      "Semelle plateforme 5 cm",
      "Insert gel anti-choc",
      "Œillets métalliques dorés",
      "Doublure confort",
      "Poids : 350g",
    ],
    colors: ["Crème", "Noir", "Rose poudré"],
    sizes: ["36", "37", "38", "39", "40", "41"],
    badge: "Tendance",
    rating: 4.7,
    reviews: 189,
    inStock: true,
  },
  {
    id: "snk-004",
    name: "Runner Noir Minimal",
    slug: "runner-noir-minimal",
    price: 109,
    category: "sneakers",
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
    ],
    description: "L'élégance dans sa forme la plus pure. Les Runner Noir Minimal allient design épuré et confort premium pour un quotidien stylé sans effort.",
    details: [
      "Tige mesh et cuir synthétique",
      "Semelle profilée confort",
      "Intérieur microfibre",
      "Lacets cirés",
      "Semelle extérieure caoutchouc",
      "Poids : 280g",
    ],
    colors: ["Noir", "Blanc", "Kaki"],
    sizes: ["36", "37", "38", "39", "40", "41"],
    rating: 4.6,
    reviews: 112,
    inStock: true,
  },

  // ═══ ACCESSOIRES ═══
  {
    id: "acc-001",
    name: "Ceinture Chaîne Gold",
    slug: "ceinture-chaine-gold",
    price: 59,
    category: "accessoires",
    images: [
      "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=800&q=80",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
    ],
    description: "La ceinture chaîne qui transforme n'importe quelle tenue. Maillons dorés élégants, cuir souple — l'accessoire mode indispensable de la saison.",
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
    reviews: 94,
    inStock: true,
  },
  {
    id: "acc-002",
    name: "Lunettes Oversize Élara",
    slug: "lunettes-oversize-elara",
    price: 79,
    category: "accessoires",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    ],
    description: "Des lunettes oversize au caractère affirmé. Monture acétate, verres dégradés et une allure qui ne passe jamais inaperçue.",
    details: [
      "Monture acétate premium",
      "Verres dégradés UV400",
      "Charnières métal renforcées",
      "Étui rigide inclus",
      "Largeur : 14.5 cm",
    ],
    colors: ["Noir", "Écaille", "Crème"],
    rating: 4.8,
    reviews: 68,
    inStock: true,
  },
  {
    id: "acc-003",
    name: "Écharpe Cachemire Sable",
    slug: "echarpe-cachemire-sable",
    price: 99,
    originalPrice: 129,
    category: "accessoires",
    images: [
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80",
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80",
    ],
    description: "Douceur et élégance incarnées. Cette écharpe en mélange cachemire offre un toucher incomparable et une chaleur enveloppante.",
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
    price: 149,
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
    reviews: 77,
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
  return products.filter((p) => p.badge === "Best-seller" || p.reviews > 150);
};

export const getNewArrivals = (): Product[] => {
  return products.filter((p) => p.badge === "Nouveau" || p.badge === "Tendance");
};

export const getSimilarProducts = (product: Product): Product[] => {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
};
