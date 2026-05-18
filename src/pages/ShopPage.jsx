import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Filter, ChevronDown, ShoppingBag, Star, LayoutGrid, List, Heart, Search } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ShopPage() {
  const { category: categoryId } = useParams();
  const [ref, visible] = useScrollReveal(0.1);
  const { addItem } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [viewType, setViewType] = useState('grid');

  const filteredProducts = useMemo(() => {
    let list = categoryId ? products.filter(p => p.category === categoryId) : products;

    // Filter by price
    list = list.filter(p => {
      const minPrice = Math.min(...Object.values(p.prices));
      return minPrice >= priceRange[0] && minPrice <= priceRange[1];
    });

    // Sort
    if (sortBy === 'price-low') list.sort((a, b) => Math.min(...Object.values(a.prices)) - Math.min(...Object.values(b.prices)));
    if (sortBy === 'price-high') list.sort((a, b) => Math.min(...Object.values(b.prices)) - Math.min(...Object.values(a.prices)));
    if (sortBy === 'name') list.sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [categoryId, sortBy, priceRange]);

  const activeCategoryName = useMemo(() => {
    if (!categoryId) return 'All Collections';
    return categories.find(c => c.id === categoryId)?.name || 'Collection';
  }, [categoryId]);

  return (
    <div className="bg-surface min-h-screen pt-20 pb-24" ref={ref}>
      {/* Header */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <nav className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-on-surface-variant/60">
              <Link to="/" className="hover:text-gold-dark">Home</Link>
              <span>/</span>
              <span className="text-gold-dark">Shop</span>
            </nav>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-on-surface">{activeCategoryName}</h1>
            <p className="text-on-surface-variant max-w-xl text-sm">
              Discover our handcrafted Andhra heritage. Every jar is a journey back to the authentic flavors of tradition.
            </p>
          </div>

          <div className="flex items-center gap-4 border-t md:border-t-0 pt-6 md:pt-0">
            <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl border-2 border-outline-variant text-sm font-medium hover:border-gold/40 transition-all relative">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-none outline-none text-on-surface font-bold cursor-pointer text-sm appearance-none pr-6"
                style={{
                  WebkitAppearance: 'none',
                  MozAppearance: 'none'
                }}
              >
                <option value="popular">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Alphabetical</option>
              </select>
              <ChevronDown size={16} className="text-on-surface-variant pointer-events-none" />
            </div>
            <div className="hidden md:flex items-center bg-white rounded-lg border border-outline-variant p-1">
              <button
                onClick={() => setViewType('grid')}
                className={`p-1.5 rounded transition-all ${viewType === 'grid' ? 'bg-gold-light/40 text-gold-dark' : 'text-on-surface-variant'}`}
              >
                <LayoutGrid size={18} />
              </button>
              <button
                onClick={() => setViewType('list')}
                className={`p-1.5 rounded transition-all ${viewType === 'list' ? 'bg-gold-light/40 text-gold-dark' : 'text-on-surface-variant'}`}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="grid lg:grid-cols-[240px_1fr] gap-12">
          {/* Filters Sidebar */}
          <aside className="hidden lg:block space-y-10">
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-on-surface flex items-center gap-2">
                <Filter size={18} className="text-gold-dark" /> Categories
              </h3>
              <nav className="flex flex-col gap-2">
                <Link
                  to="/shop"
                  className={`px-4 py-2.5 rounded-lg border-2 font-bold text-sm transition-all ${!categoryId ? 'border-gold bg-gold-light/10 text-gold-dark shadow-md' : 'border-outline-variant text-on-surface-variant hover:border-gold/40'}`}
                >
                  All Collections
                </Link>
                {categories.map(cat => (
                  <Link
                    key={cat.id}
                    to={`/shop/${cat.id}`}
                    className={`px-4 py-2.5 rounded-lg border-2 font-bold text-sm transition-all ${categoryId === cat.id ? 'border-gold bg-gold-light/10 text-gold-dark shadow-md' : 'border-outline-variant text-on-surface-variant hover:border-gold/40'}`}
                  >
                    {cat.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-on-surface">Filter by Price</h3>
              <div className="space-y-4 p-4 bg-surface-container/30 rounded-xl">
                <input
                  type="range"
                  min="0"
                  max="2000"
                  step="50"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-gold cursor-pointer"
                />
                <div className="flex justify-between text-xs font-bold text-on-surface-variant">
                  <span className="px-3 py-1 bg-white rounded-md border border-outline-variant">Rs. 0</span>
                  <span className="px-3 py-1 bg-gold-light/30 rounded-md border border-gold/20 text-gold-dark">Rs. {priceRange[1]}</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gold-light/20 rounded-xl border border-gold/10">
              <h4 className="text-xs font-bold text-gold-dark uppercase tracking-widest mb-2">Need Help?</h4>
              <p className="text-[11px] text-on-surface-variant leading-relaxed mb-4">
                Can't find what you are looking for? Chat with our heritage expert.
              </p>
              <a href="tel:+918074638357" className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-charcoal text-xs font-bold rounded-md hover:shadow-gold-glow transition-all">
                Contact Support
              </a>
            </div>
          </aside>

          {/* Product Grid */}
          <div className={`space-y-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-between text-xs text-on-surface-variant font-medium">
              <span>Showing {filteredProducts.length} results</span>
            </div>

            {filteredProducts.length > 0 ? (
              <div className={viewType === 'grid' ? "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6" : "flex flex-col gap-6"}>
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white">
                    <Link to={`/product/${product.id}`} className="block relative mb-4">
                      <div className="relative w-full aspect-square overflow-hidden border-4 border-gray-200">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
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

                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-1">
                        {product.categories?.slice(0, 3).map((cat, i) => (
                          <span key={i} className="text-xs text-gray-500">{cat}.</span>
                        ))}
                      </div>

                      <Link to={`/product/${product.id}`} className="block">
                        <h3 className="font-medium text-gray-900 text-sm">
                          {product.name}
                        </h3>
                      </Link>

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
            ) : (
              <div className="py-24 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mx-auto text-on-surface-variant/40">
                  <Search size={32} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-on-surface">No products found</h3>
                <p className="text-on-surface-variant">Try adjusting your filters or search criteria.</p>
                <button
                  onClick={() => { setCategoryId(null); setPriceRange([0, 2000]); setSortBy('popular'); }}
                  className="text-gold-dark font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
