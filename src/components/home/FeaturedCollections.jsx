import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { categories } from '../../data/products';

const categoryImages = {
  veg: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&h=400&fit=crop',
  nonveg: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop',
  special: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&h=400&fit=crop',
  powders: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&h=400&fit=crop',
};

export default function FeaturedCollections() {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <section className="py-24 md:py-32 bg-surface-low relative" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="text-center mb-16 space-y-4">
          <span className="label-gold">Our Collections</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-on-surface">
            Shop by <span className="text-gold-dark">Category</span>
          </h2>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/shop/${cat.id}`}
              className="group relative h-64 md:h-72 rounded-2xl overflow-hidden border border-outline-variant/30 hover:border-gold/40 transition-all duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Background Image */}
              <img 
                src={categoryImages[cat.id]} 
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal/80 via-charcoal/50 to-charcoal/90 z-10" />
              <div className="absolute inset-0 bg-gold/5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-20 h-full flex flex-col justify-end p-8">
                <span className="label-gold text-gold-light/80 mb-2">{cat.id === 'veg' ? 'Vegetarian' : cat.id === 'nonveg' ? 'Non-Vegetarian' : cat.id === 'special' ? 'Signature' : 'Spice Blends'}</span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">{cat.name}</h3>
                <p className="text-sm text-white/70 mb-4 max-w-md">{cat.description}</p>
                <div className="flex items-center gap-2 text-gold-dim font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  Shop Now <ArrowRight size={16} />
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-45">
                <ArrowRight size={16} className="text-gold" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
