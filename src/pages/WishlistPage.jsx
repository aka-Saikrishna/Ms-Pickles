import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addItem } = useCart();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-white">
        <div className="text-center">
          <Heart size={64} className="mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Wishlist is Empty</h2>
          <p className="text-gray-500 mb-6">Add your favorite products here!</p>
          <Link to="/shop" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors">
            Browse Products
          </Link>
        </div>
      </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
          <p className="text-gray-500">{wishlist.length} items</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div key={product.id} className="bg-white">
              <Link to={`/product/${product.id}`} className="block relative mb-4">
                <div className="relative w-full aspect-square overflow-hidden border-4 border-gray-200">
                  <img 
                    src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
              </Link>

              <div className="space-y-2">
                <div className="flex flex-wrap gap-1">
                  {product.categories?.slice(0, 2).map((cat, i) => (
                    <span key={i} className="text-xs text-gray-500">{cat}.</span>
                  ))}
                </div>
                <Link to={`/product/${product.id}`} className="block">
                  <h3 className="font-medium text-gray-900 text-sm">{product.name}</h3>
                </Link>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900 text-base">
                    Rs. {Object.values(product.prices)[0]}
                  </span>
                </div>
                <div className="flex gap-2 pt-1">
                  <button
                    onClick={() => addItem(product, Object.keys(product.prices)[0])}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-700 transition-colors"
                  >
                    <ShoppingBag size={16} />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="px-3 py-2 bg-red-50 text-red-600 rounded-full hover:bg-red-100 transition-colors"
                  >
                    <Trash2 size={18} className="text-red-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
