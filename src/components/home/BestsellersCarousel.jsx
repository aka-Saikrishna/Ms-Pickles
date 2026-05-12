import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, ShoppingBag } from 'lucide-react';
import gsap from 'gsap';
import { getBestsellers } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function BestsellersCarousel() {
  const scrollRef = useRef(null);
  const bestsellers = getBestsellers();
  const { addItem } = useCart();

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = direction === 'left' ? -400 : 400;
    gsap.to(scrollRef.current, {
      scrollLeft: scrollRef.current.scrollLeft + scrollAmount,
      duration: 0.6,
      ease: 'power2.out'
    });
  };

  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="flex items-end justify-between mb-12">
          <div className="space-y-3">
            <span className="label-gold">Top Picks</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-on-surface">
              Our <span className="text-gold-dark">Bestsellers</span>
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:border-gold hover:text-gold-dark transition-all"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:border-gold hover:text-gold-dark transition-all"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x"
          style={{ scrollBehavior: 'auto' }}
        >
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="min-w-[280px] md:min-w-[320px] snap-start glass-card group relative"
            >
              {/* Product Image Placeholder */}
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden rounded-t-xl">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-gold-dark border border-gold/20 shadow-sm uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-1 text-gold-dark">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill={i < 4 ? "currentColor" : "none"} strokeWidth={2} />
                  ))}
                  <span className="text-[10px] text-on-surface-variant font-semibold ml-1">4.8 (120+)</span>
                </div>

                <div>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-serif text-xl font-bold text-on-surface hover:text-gold-dark transition-colors">{product.name}</h3>
                  </Link>
                  <p className="text-xs text-on-surface-variant italic mt-1">{product.tagline}</p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-lg font-bold text-on-surface">
                    Rs. {Object.values(product.prices)[0]}
                  </span>
                  <button
                    onClick={() => addItem(product, Object.keys(product.prices)[0])}
                    className="flex items-center gap-2 px-4 py-2 bg-gold text-charcoal text-xs font-bold rounded-md hover:shadow-gold-glow transition-all"
                  >
                    Add <ShoppingBag size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
