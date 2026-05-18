import { Link } from 'react-router-dom';

const categories = [
  { id: 'all', name: 'Shop All', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&q=80' },
  { id: 'snacks', name: 'Healthy Snacks', img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=200&q=80' },
  { id: 'new', name: 'Newly Added', img: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200&q=80' },
  { id: 'sweets', name: 'Sweets', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&q=80' },
  { id: 'hots', name: 'Hot\'s', img: 'https://images.unsplash.com/photo-1590779033100-9f60705a2f3b?w=200&q=80' },
  { id: 'powders', name: 'Powder\'s', img: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=200&q=80' },
  { id: 'spices', name: 'Spice\'s', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&q=80' },
  { id: 'nonveg', name: 'Non-Veg Pickles', img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=200&q=80' },
  { id: 'veg', name: 'Veg Pickles', img: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200&q=80' },
];

export default function CategoriesSection() {
  return (
    <section className="py-8 bg-amber-50">
      <div className="px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8 text-gray-800">Our Categories</h2>
        
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              to={`/shop/${cat.id}`}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-amber-200 shadow-md group-hover:scale-105 transition-transform">
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm md:text-base font-semibold text-gray-800 text-center">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
