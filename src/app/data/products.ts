export interface Category {
    id: number;
    name: string;
    name_es: string;
}

export interface Product {
    id: number;
    name: string;
    name_es: string;
    text?: string;
    text_es?: string;
    price: number;
    url_image?: string;
}

export const categories: Category[] = [
  {
    "id": 1,
    "name": "Custom Prescription Glasses",
    "name_es": "Gafas graduadas personalizadas"
  },
  {
    "id": 2,
    "name": "Half Rim",
    "name_es": "Medio Aro"
  },
  {
    "id": 3,
    "name": "Rimless",
    "name_es": "Sin Aro"
  },
  {
    "id": 4,
    "name": "Aviator",
    "name_es": "Aviador"
  },
  {
    "id": 5,
    "name": "Round",
    "name_es": "Redondos"
  },
  {
    "id": 6,
    "name": "Square",
    "name_es": "Cuadrados"
  },
  {
    "id": 7,
    "name": "Cat Eye",
    "name_es": "Ojo de Gato"
  },
  {
    "id": 8,
    "name": "Sport",
    "name_es": "Deportivos"
  },
  {
    "id": 9,
    "name": "Full Rim",
    "name_es": "Aro Completo"
  }
];

export const products: Product[] = [
  {
    "id": 1,
    "name": "Classic Round Glasses",
    "name_es": "Espejuelos Redondos Clásicos",
    "text": "Lightweight round metal frame with a vintage look.",
    "text_es": "Montura metálica redonda y ligera con estilo vintage.",
    "price": 49.99,
    "url_image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083"
  },
  {
    "id": 2,
    "name": "Modern Square Glasses",
    "name_es": "Espejuelos Cuadrados Modernos",
    "text": "Bold square frame ideal for a contemporary style.",
    "text_es": "Montura cuadrada llamativa ideal para un estilo contemporáneo.",
    "price": 59.99,
    "url_image": "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb"
  },
  {
    "id": 3,
    "name": "Thin Metal Frame",
    "name_es": "Montura Metálica Delgada",
    "text": "Minimalist thin metal frame for a clean aesthetic.",
    "text_es": "Montura metálica delgada y minimalista para una estética limpia.",
    "price": 54.50,
    "url_image": "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43"
  },
  {
    "id": 4,
    "name": "Aviator Glasses",
    "name_es": "Espejuelos Aviador",
    "text": "Classic aviator frame with a timeless design.",
    "text_es": "Montura aviador clásica con un diseño atemporal.",
    "price": 69.99,
    "url_image": "https://images.unsplash.com/photo-1518544801958-efcbf8a7ec10"
  },
  {
    "id": 5,
    "name": "Transparent Frame Glasses",
    "name_es": "Espejuelos de Montura Transparente",
    "text": "Trendy transparent acetate frame.",
    "text_es": "Moderna montura de acetato transparente.",
    "price": 64.99,
    "url_image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
  },
  {
    "id": 6,
    "name": "Retro Thick Frame",
    "name_es": "Montura Gruesa Retro",
    "text": "Thick retro-style frame for a bold look.",
    "text_es": "Montura gruesa de estilo retro para un look atrevido.",
    "price": 57.25,
    "url_image": "https://images.unsplash.com/photo-1521120098171-4a1121188589"
  },
  {
    "id": 7,
    "name": "Cat Eye Glasses",
    "name_es": "Espejuelos Cat Eye",
    "text": "Elegant cat-eye frame with a feminine touch.",
    "text_es": "Elegante montura cat-eye con un toque femenino.",
    "price": 72.00,
    "url_image": "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b"
  },
  {
    "id": 8,
    "name": "Sporty Wrap Glasses",
    "name_es": "Espejuelos Deportivos Envolventes",
    "text": "Wrap-around frame ideal for sports and outdoor use.",
    "text_es": "Montura envolvente ideal para deportes y uso exterior.",
    "price": 79.99,
    "url_image": "https://images.unsplash.com/photo-1516571137133-1be29e37143a"
  },
  {
    "id": 9,
    "name": "Wooden Frame Glasses",
    "name_es": "Espejuelos de Montura de Madera",
    "text": "Eco-friendly wooden frame with a natural finish.",
    "text_es": "Montura ecológica de madera con acabado natural.",
    "price": 89.99,
    "url_image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
  },
  {
    "id": 10,
    "name": "Half-Rim Glasses",
    "name_es": "Espejuelos Semi-Montura",
    "text": "Half-rim frame offering a lightweight feel.",
    "text_es": "Montura semi-rim que ofrece una sensación ligera.",
    "price": 52.00,
    "url_image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
  },

  {
    "id": 11,
    "name": "Matte Black Frame",
    "name_es": "Montura Negra Mate",
    "text": "Sleek matte black finish for a modern look.",
    "text_es": "Acabado negro mate elegante para un look moderno.",
    "price": 63.99,
    "url_image": "https://images.unsplash.com/photo-1511497584788-876760111969"
  },
  {
    "id": 12,
    "name": "Blue Light Blockers",
    "name_es": "Espejuelos Anti-Luz Azul",
    "text": "Protective lenses designed for screen use.",
    "text_es": "Lentes protectores diseñados para uso frente a pantallas.",
    "price": 45.00,
    "url_image": "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a"
  },
  {
    "id": 13,
    "name": "Vintage Oval Glasses",
    "name_es": "Espejuelos Ovalados Vintage",
    "text": "Oval metal frame inspired by retro fashion.",
    "text_es": "Montura ovalada metálica inspirada en la moda retro.",
    "price": 58.99,
    "url_image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
  },
  {
    "id": 14,
    "name": "Bold Tortoise Frame",
    "name_es": "Montura Carey Atrevida",
    "text": "Thick tortoise-shell acetate frame.",
    "text_es": "Montura gruesa de acetato estilo carey.",
    "price": 67.50,
    "url_image": "https://images.unsplash.com/photo-1521120413309-42c7da31c9c2"
  },
  {
    "id": 15,
    "name": "Minimalist Rimless",
    "name_es": "Espejuelos Sin Montura",
    "text": "Rimless design for maximum lightness.",
    "text_es": "Diseño sin montura para máxima ligereza.",
    "price": 74.99,
    "url_image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
  },
  {
    "id": 16,
    "name": "Square Metal Frame",
    "name_es": "Montura Metálica Cuadrada",
    "text": "Metal frame with sharp square edges.",
    "text_es": "Montura metálica con bordes cuadrados definidos.",
    "price": 61.00,
    "url_image": "https://images.unsplash.com/photo-1511497584788-876760111969"
  },
  {
    "id": 17,
    "name": "Rounded Acetate Frame",
    "name_es": "Montura Redonda de Acetato",
    "text": "Soft rounded acetate frame for comfort.",
    "text_es": "Montura redonda de acetato suave para mayor comodidad.",
    "price": 56.75,
    "url_image": "https://images.unsplash.com/photo-1521120098171-4a1121188589"
  },
  {
    "id": 18,
    "name": "Hybrid Metal-Acetate",
    "name_es": "Montura Híbrida Metal-Acetato",
    "text": "Combination frame offering durability and style.",
    "text_es": "Montura combinada que ofrece durabilidad y estilo.",
    "price": 68.99,
    "url_image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
  },
  {
    "id": 19,
    "name": "Slim Rectangle Glasses",
    "name_es": "Espejuelos Rectangulares Delgados",
    "text": "Slim rectangular frame for a sharp look.",
    "text_es": "Montura rectangular delgada para un look definido.",
    "price": 49.50,
    "url_image": "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb"
  },
  {
    "id": 20,
    "name": "Wide Frame Glasses",
    "name_es": "Espejuelos de Montura Ancha",
    "text": "Wide frame ideal for larger face shapes.",
    "text_es": "Montura ancha ideal para rostros más grandes.",
    "price": 62.00,
    "url_image": "https://images.unsplash.com/photo-1521120413309-42c7da31c9c2"
  },

  {
    "id": 21,
    "name": "Eco Bamboo Frame",
    "name_es": "Montura de Bambú Ecológica",
    "text": "Sustainable bamboo frame with natural texture.",
    "text_es": "Montura sostenible de bambú con textura natural.",
    "price": 84.99,
    "url_image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
  },
  {
    "id": 22,
    "name": "Futuristic Shield Glasses",
    "name_es": "Espejuelos Futuristas Tipo Visera",
    "text": "Single-lens shield design for a bold statement.",
    "text_es": "Diseño de visera de una sola lente para un estilo atrevido.",
    "price": 95.00,
    "url_image": "https://images.unsplash.com/photo-1516571137133-1be29e37143a"
  },
  {
    "id": 23,
    "name": "Classic Browline",
    "name_es": "Espejuelos Browline Clásicos",
    "text": "Iconic browline frame with retro charm.",
    "text_es": "Icónica montura browline con encanto retro.",
    "price": 66.99,
    "url_image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083"
  },
  {
    "id": 24,
    "name": "Kids Flexible Frame",
    "name_es": "Montura Flexible para Niños",
    "text": "Durable flexible frame designed for kids.",
    "text_es": "Montura flexible y duradera diseñada para niños.",
    "price": 39.99,
    "url_image": "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a"
  },
  {
    "id": 25,
    "name": "Premium Acetate Frame",
    "name_es": "Montura de Acetato Premium",
    "text": "High-quality acetate frame with polished finish.",
    "text_es": "Montura de acetato de alta calidad con acabado pulido.",
    "price": 89.50,
    "url_image": "https://images.unsplash.com/photo-1521120098171-4a1121188589"
  },
  {
    "id": 26,
    "name": "Ultra-Light Nylon Frame",
    "name_es": "Montura de Nylon Ultraligera",
    "text": "Nylon frame offering extreme lightness.",
    "text_es": "Montura de nylon que ofrece extrema ligereza.",
    "price": 72.99,
    "url_image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
  },
  {
    "id": 27,
    "name": "Geometric Hexagon Glasses",
    "name_es": "Espejuelos Hexagonales Geométricos",
    "text": "Unique hexagon-shaped metal frame.",
    "text_es": "Montura metálica con forma hexagonal única.",
    "price": 78.00,
    "url_image": "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43"
  },
  {
    "id": 28,
    "name": "Oversized Fashion Frame",
    "name_es": "Montura Oversize de Moda",
    "text": "Large statement frame for bold fashion.",
    "text_es": "Montura grande y llamativa para un estilo atrevido.",
    "price": 82.50,
    "url_image": "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b"
  },
  {
    "id": 29,
    "name": "Slim Titanium Frame",
    "name_es": "Montura de Titanio Delgada",
    "text": "Ultra-light titanium frame with durability.",
    "text_es": "Montura de titanio ultraligera y duradera.",
    "price": 119.99,
    "url_image": "https://images.unsplash.com/photo-1511497584788-876760111969"
  },
  {
    "id": 30,
    "name": "Rounded Retro Metal",
    "name_es": "Montura Metálica Retro Redonda",
    "text": "Retro-inspired round metal frame.",
    "text_es": "Montura metálica redonda inspirada en lo retro.",
    "price": 58.00,
    "url_image": "https://images.unsplash.com/photo-1521120413309-42c7da31c9c2"
  },

  {
    "id": 31,
    "name": "Hybrid Sport Frame",
    "name_es": "Montura Deportiva Híbrida",
    "text": "Sporty frame with flexible temples.",
    "text_es": "Montura deportiva con patillas flexibles.",
    "price": 74.99,
    "url_image": "https://images.unsplash.com/photo-1516571137133-1be29e37143a"
  },
  {
    "id": 32,
    "name": "Clear Blue Frame",
    "name_es": "Montura Azul Transparente",
    "text": "Transparent blue acetate frame.",
    "text_es": "Montura de acetato azul transparente.",
    "price": 63.50,
    "url_image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
  },
  {
    "id": 33,
    "name": "Matte Brown Frame",
    "name_es": "Montura Marrón Mate",
    "text": "Soft matte brown finish.",
    "text_es": "Acabado marrón mate suave.",
    "price": 59.99,
    "url_image": "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb"
  },
  {
    "id": 34,
    "name": "Ultra-Wide Shield",
    "name_es": "Visera Ultra Ancha",
    "text": "Wide shield lens for full coverage.",
    "text_es": "Lente tipo visera ancha para cobertura total.",
    "price": 98.00,
    "url_image": "https://images.unsplash.com/photo-1518544801958-efcbf8a7ec10"
  },
  {
    "id": 35,
    "name": "Slim Cat Eye",
    "name_es": "Cat Eye Delgados",
    "text": "Thin cat-eye frame with elegance.",
    "text_es": "Montura cat-eye delgada y elegante.",
    "price": 71.00,
    "url_image": "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b"
  },
  {
    "id": 36,
    "name": "Rounded Matte Frame",
    "name_es": "Montura Redonda Mate",
    "text": "Matte finish with rounded edges.",
    "text_es": "Acabado mate con bordes redondeados.",
    "price": 55.99,
    "url_image": "https://images.unsplash.com/photo-1521120098171-4a1121188589"
  },
  {
    "id": 37,
    "name": "Classic Rectangle",
    "name_es": "Rectangulares Clásicos",
    "text": "Classic rectangular frame for everyday use.",
    "text_es": "Montura rectangular clásica para uso diario.",
    "price": 48.50,
    "url_image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083"
  },
  {
    "id": 38,
    "name": "Wide Acetate Frame",
    "name_es": "Montura Ancha de Acetato",
    "text": "Wide acetate frame with bold presence.",
    "text_es": "Montura ancha de acetato con presencia llamativa.",
    "price": 69.00,
    "url_image": "https://images.unsplash.com/photo-1521120413309-42c7da31c9c2"
  },
  {
    "id": 39,
    "name": "Metal Bridge Frame",
    "name_es": "Montura con Puente Metálico",
    "text": "Acetate frame with metal bridge detail.",
    "text_es": "Montura de acetato con detalle de puente metálico.",
    "price": 65.99,
    "url_image": "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43"
  }
]