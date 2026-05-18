import { Link } from 'react-router-dom';

const categories = [
  { id: 'all', name: 'Shop All', img: '/images/all.jpg' },
  { id: 'sweets', name: 'Sweets', img: '/images/sweets.jpg' },
  { id: 'hots', name: 'Hot\'s', img: '/images/hots.jpg' },
  { id: 'powders', name: 'Powder\'s', img: '/images/powders.jpg' },
  { id: 'nonveg', name: 'Non-Veg Pickles', img: '/images/nonveg.jpg' },
  { id: 'veg', name: 'Veg Pickles', img: '/images/veg.jpg' },
];

export default function CategoriesSection() {
  return (
    <section className="py-8 bg-amber-50">
      <div className="px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8 text-gray-800">Our Categories</h2>
        
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-4 justify-items-center">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              to={`/shop/${cat.id}`}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border-4 border-amber-200 shadow-md group-hover:scale-105 transition-transform">
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-base md:text-lg font-bold text-gray-800 text-center mt-1">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
