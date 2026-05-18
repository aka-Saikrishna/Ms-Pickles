import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { getBestsellers } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export default function BestsellersCarousel() {
  const bestsellers = getBestsellers();
  const { addItem } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  return (
    <section className="py-16 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-gray-900">
            Shop bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="bg-white">
              {/* Product Image */}
              <Link to={`/product/${product.id}`} className="block relative mb-4">
                <div className="relative w-full aspect-square overflow-hidden border-4 border-gray-200">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                  />
                </div>
                {/* Wishlist Icon */}
                <button 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product);
                  }}
                  className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"
                >
                  <Heart 
                    size={18} 
                    className={isInWishlist(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'} 
                  />
                </button>
              </Link>

              {/* Content */}
              <div className="space-y-2">
                {/* Category Tags */}
                <div className="flex flex-wrap gap-1">
                  {product.categories?.slice(0, 3).map((cat, i) => (
                    <span key={i} className="text-xs text-gray-500">{cat}.</span>
                  ))}
                </div>

                {/* Product Name */}
                <Link to={`/product/${product.id}`} className="block">
                  <h3 className="font-medium text-gray-900 text-sm">
                    {product.name}
                  </h3>
                </Link>

                {/* Price */}
                <div className="flex items-center gap-2">
                  {Object.keys(product.prices).length > 1 && (
                    <span className="text-gray-400 line-through text-sm">
                      Rs. {Object.values(product.prices)[Object.values(product.prices).length - 1]}
                    </span>
                  )}
                  <span className="font-semibold text-gray-900 text-base">
                    Rs. {Object.values(product.prices)[0]}
                  </span>
                  {Object.keys(product.prices).length > 1 && (
                    <span className="text-xs text-gray-500">
                      {Object.keys(product.prices)[0]}
                    </span>
                  )}
                </div>

                {/* Button */}
                <div className="pt-1">
                  <Link
                    to={`/product/${product.id}`}
                    className="w-full flex items-center justify-center px-4 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-700 transition-colors"
                  >
                    SELECT OPTIONS
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
