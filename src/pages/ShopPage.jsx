import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Filter, ChevronDown, ShoppingBag, Star, LayoutGrid, List } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ShopPage() {
  const { category: categoryId } = useParams();
  const [ref, visible] = useScrollReveal(0.1);
  const { addItem } = useCart();

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
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-outline-variant text-sm font-medium">
              <span className="text-on-surface-variant">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-none outline-none text-on-surface cursor-pointer"
              >
                <option value="popular">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Alphabetical</option>
              </select>
            </div>
            <div className="hidden md:flex items-center bg-white rounded-lg border border-outline-variant p-1">
              <button
                onClick={() => setViewType('grid')}
                className={`p-1.5 rounded ${viewType === 'grid' ? 'bg-gold-light/40 text-gold-dark' : 'text-on-surface-variant'}`}
              >
                <LayoutGrid size={18} />
              </button>
              <button
                onClick={() => setViewType('list')}
                className={`p-1.5 rounded ${viewType === 'list' ? 'bg-gold-light/40 text-gold-dark' : 'text-on-surface-variant'}`}
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
                  className={`text-sm py-1.5 transition-colors ${!categoryId ? 'text-gold-dark font-bold' : 'text-on-surface-variant hover:text-gold-dark'}`}
                >
                  All Collections
                </Link>
                {categories.map(cat => (
                  <Link
                    key={cat.id}
                    to={`/shop/${cat.id}`}
                    className={`text-sm py-1.5 transition-colors ${categoryId === cat.id ? 'text-gold-dark font-bold' : 'text-on-surface-variant hover:text-gold-dark'}`}
                  >
                    {cat.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-on-surface">Filter by Price</h3>
              <div className="space-y-4">
                <input
                  type="range"
                  min="0"
                  max="2000"
                  step="50"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-gold"
                />
                <div className="flex justify-between text-xs font-bold text-on-surface-variant">
                  <span>Rs. 0</span>
                  <span>Rs. {priceRange[1]}</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gold-light/20 rounded-xl border border-gold/10">
              <h4 className="text-xs font-bold text-gold-dark uppercase tracking-widest mb-2">Need Help?</h4>
              <p className="text-[11px] text-on-surface-variant leading-relaxed mb-4">
                Can't find what you are looking for? Chat with our heritage expert.
              </p>
              <a href="tel:+918074638357" className="text-xs font-bold text-charcoal hover:underline">Contact Support</a>
            </div>
          </aside>

          {/* Product Grid */}
          <div className={`space-y-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-between text-xs text-on-surface-variant font-medium">
              <span>Showing {filteredProducts.length} results</span>
            </div>

            {filteredProducts.length > 0 ? (
              <div className={viewType === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8" : "flex flex-col gap-6"}>
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className={`glass-card group overflow-hidden ${viewType === 'list' ? 'flex flex-col md:flex-row h-auto md:h-64' : ''}`}
                  >
                    <Link
                      to={`/product/${product.id}`}
                      className={`relative overflow-hidden ${viewType === 'list' ? 'w-full md:w-64 h-64 md:h-full shrink-0' : 'aspect-[4/5]'}`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-gold-light/20 to-spice-light/10 group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <ShoppingBag size={48} className="text-gold" />
                      </div>
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {product.tags.map(tag => (
                          <span key={tag} className="px-2 py-0.5 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-bold text-gold-dark border border-gold/20 uppercase tracking-widest">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Link>

                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div className="space-y-3">
                        <div className="flex items-center gap-1 text-gold-dark">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={10} fill={i < 4 ? "currentColor" : "none"} />
                          ))}
                        </div>
                        <div>
                          <Link to={`/product/${product.id}`}>
                            <h3 className="font-serif text-lg font-bold text-on-surface hover:text-gold-dark transition-colors">{product.name}</h3>
                          </Link>
                          <p className="text-xs text-on-surface-variant italic">{product.tagline}</p>
                        </div>
                        {viewType === 'list' && (
                          <p className="text-sm text-on-surface-variant line-clamp-2">{product.description}</p>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-6">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Starts from</span>
                          <span className="text-lg font-bold text-on-surface">Rs. {Object.values(product.prices)[0]}</span>
                        </div>
                        <button
                          onClick={() => addItem(product, Object.keys(product.prices)[0])}
                          className="flex items-center gap-2 px-5 py-2.5 bg-gold text-charcoal text-xs font-bold rounded-md hover:shadow-gold-glow transition-all"
                        >
                          Add to Cart
                        </button>
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
