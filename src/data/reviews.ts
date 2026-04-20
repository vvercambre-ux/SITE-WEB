export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  product: string;
  date: string;
}

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Camille D.",
    avatar: "C",
    rating: 5,
    text: "Le sac matelassé noir est sublime. La qualité est incroyable pour ce prix, et il va avec absolument tout. Je l'emporte partout !",
    product: "Matelassé Noir Élégance",
    date: "Il y a 3 jours",
  },
  {
    id: "r2",
    name: "Sophie M.",
    avatar: "S",
    rating: 5,
    text: "Les Chunky Cloud sont devenues mes sneakers du quotidien. Ultra confortables et le design est tellement beau. Déjà 2 paires !",
    product: "Sneakers Chunky Cloud",
    date: "Il y a 1 semaine",
  },
  {
    id: "r3",
    name: "Léa R.",
    avatar: "L",
    rating: 5,
    text: "La montre est magnifique, très élégante au poignet. L'emballage était soigné et la livraison ultra rapide. Je recommande à 100%.",
    product: "Montre Minimal Gold",
    date: "Il y a 2 semaines",
  },
  {
    id: "r4",
    name: "Marie P.",
    avatar: "M",
    rating: 4,
    text: "La pochette crème est parfaite pour sortir. Compacte mais on peut y mettre l'essentiel. Le cuir est doux et la chaîne très chic.",
    product: "Pochette Crème Signature",
    date: "Il y a 3 semaines",
  },
  {
    id: "r5",
    name: "Inès K.",
    avatar: "I",
    rating: 5,
    text: "Fan absolue de cette marque. Chaque produit est pensé avec goût. L'écharpe cachemire est d'une douceur folle, je ne la quitte plus.",
    product: "Écharpe Cachemire Sable",
    date: "Il y a 1 mois",
  },
];
