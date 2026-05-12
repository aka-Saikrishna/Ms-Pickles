import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
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
    <section className="py-24 overflow-hidden" style={{ backgroundColor: '#fdf7f2' }}>
      <div className="max-w-8xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-gray-900">
            Shop bestsellers
          </h2>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x"
          style={{ scrollBehavior: 'auto' }}
        >
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="min-w-[240px] md:min-w-[280px] snap-start group bg-white rounded-3xl border border-gray-200 overflow-hidden"
            >
              {/* Product Image */}
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/3] overflow-hidden p-1">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Sale Badge */}
                {product.tags.includes('BESTSELLER') && (
                  <div className="absolute top-2 right-2 px-3 py-1 bg-gray-800 text-white text-xs font-semibold rounded-full">
                    Sale!
                  </div>
                )}
              </Link>

              {/* Content */}
              <div className="p-3 space-y-2">
                <div>
                  <Link to={`/product/${product.id}`} className="block">
                    <h3 className="font-medium text-gray-900 text-base leading-snug hover:text-gray-600 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  {Object.keys(product.prices).length > 1 && (
                    <span className="text-gray-500 line-through text-sm">
                      Rs. {Object.values(product.prices)[Object.values(product.prices).length - 1]}
                    </span>
                  )}
                  <span className="font-semibold text-gray-900 text-lg">
                    Rs. {Object.values(product.prices)[0]}
                  </span>
                </div>

                {/* Button */}
                <div className="pt-2">
                  {Object.keys(product.prices).length > 1 ? (
                    <Link
                      to={`/product/${product.id}`}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-700 transition-colors"
                    >
                      Select Options
                    </Link>
                  ) : (
                    <button
                      onClick={() => addItem(product, Object.keys(product.prices)[0])}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-700 transition-colors"
                    >
                      Add To Cart
                      <ShoppingBag size={16} />
                    </button>
                  )}
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
