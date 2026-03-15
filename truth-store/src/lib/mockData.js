export const products = [
  {
    id: '1',
    name: 'Light Jersey',
    category: 'tops',
    season: 'Season 1',
    price: 45000,
    status: 'Coming Soon',
    description: 'A lightweight jersey built for the different. Clean lines, quiet luxury.',
    image: null,
    colorways: [
      { name: 'Colorway 1', hex: '#f5c6d0' },
      { name: 'Exclusion C.W', hex: '#1a1a2e' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    accuracy: 95,
  },
  {
    id: '2',
    name: 'Crux Sweats',
    category: 'bottoms',
    season: 'Season 1',
    price: 125000,
    status: 'Coming Soon',
    description: 'Crux Sweats — the foundation piece. Worn by those who move with purpose.',
    image: null,
    colorways: [
      { name: 'Colorway 1', hex: '#1a1a1a' },
      { name: 'Colorway 2', hex: '#4a90d9' },
      { name: 'Colorway 3', hex: '#2d4a2d' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    accuracy: 95,
  },
  {
    id: '3',
    name: 'Walker Man Shirt',
    category: 'tops',
    season: 'Season 1',
    price: 30000,
    status: 'Coming Soon',
    description: 'Pinstripe overshirt. Built for the walker, the thinker, the mover.',
    image: null,
    colorways: [
      { name: 'Colorway 1', hex: '#b8d4e8' },
      { name: 'Colorway 2', hex: '#1a1a2e' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    accuracy: 95,
  },
  {
    id: '4',
    name: 'Star Tee LS',
    category: 'tops',
    season: 'Season 1',
    price: 30000,
    status: 'Coming Soon',
    description: 'Long sleeve graphic tee. Worn by those who carry meaning on their sleeve.',
    image: null,
    colorways: [
      { name: 'Colorway 1', hex: '#ffffff' },
      { name: 'Colorway 2', hex: '#1a1a2e' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    accuracy: 95,
  },
];

export const getProductById = (id) => products.find(p => p.id === id);
export const getProductsByCategory = (cat) =>
  cat ? products.filter(p => p.category === cat) : products;
export const getFeaturedProducts = () => products.slice(0, 3);
