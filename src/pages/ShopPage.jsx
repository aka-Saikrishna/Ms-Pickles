import { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Filter, ChevronDown, ShoppingBag, Star, LayoutGrid, List, Heart, Search, ArrowRight, SlidersHorizontal, ChevronRight, Check } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
export default function ShopPage() {
  const { category: categoryId } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [viewType, setViewType] = useState('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false); // For mobile

  const filteredProducts = useMemo(() => {
    let list = categoryId ? products.filter(p => p.category === categoryId) : products;

    list = list.filter(p => {
      const minPrice = Math.min(...Object.values(p.prices));
      return minPrice >= priceRange[0] && minPrice <= priceRange[1];
    });

    if (sortBy === 'price-low') list.sort((a, b) => Math.min(...Object.values(a.prices)) - Math.min(...Object.values(b.prices)));
    if (sortBy === 'price-high') list.sort((a, b) => Math.min(...Object.values(b.prices)) - Math.min(...Object.values(a.prices)));
    if (sortBy === 'name') list.sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [categoryId, sortBy, priceRange]);

  const activeCategoryName = useMemo(() => {
    if (!categoryId) return 'All Collections';
    return categories.find(c => c.id === categoryId)?.name || 'Collection';
  }, [categoryId]);

  const clearFilters = () => {
    navigate('/shop');
    setPriceRange([0, 2000]);
    setSortBy('popular');
  };


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <div className="bg-surface min-h-screen pt-24 pb-24">
      {/* Dynamic Header */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-16 mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl bg-surface-container border border-outline-variant/30 p-8 md:p-16 flex flex-col items-center justify-center text-center isolate"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-light/20 via-transparent to-transparent -z-10" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold-light/30 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-spice-light/20 rounded-full blur-3xl -z-10" />

          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant/60 mb-6">
            <Link to="/" className="hover:text-gold-dark transition-colors">Home</Link>
            <span className="w-1 h-1 rounded-full bg-gold-dark/50" />
            <span className="text-gold-dark">Shop</span>
          </nav>

          <h1 className="font-serif text-5xl md:text-7xl font-bold text-on-surface mb-6 tracking-tight">
            {activeCategoryName}
          </h1>

          <p className="text-on-surface-variant max-w-2xl text-sm md:text-base leading-relaxed">
            Discover our handcrafted Andhra heritage. Every jar is a journey back to the authentic flavors of tradition, prepared with age-old recipes and pure ingredients.
          </p>
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-16">
        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-8 border-b border-outline-variant/30">
          <button
            className="md:hidden flex items-center justify-center gap-2 w-full py-3 bg-surface-container rounded-xl font-bold text-sm text-on-surface border border-outline-variant/50"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <SlidersHorizontal size={18} />
            Filters & Sorting
          </button>

          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-surface-container/50 rounded-xl border border-outline-variant/50 text-sm font-medium hover:border-gold/30 transition-colors">
              <SlidersHorizontal size={16} className="text-gold-dark" />
              <span className="text-on-surface-variant">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-none outline-none text-on-surface cursor-pointer font-bold appearance-none pr-4"
              >
                <option value="popular">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Alphabetical</option>
              </select>
              <ChevronDown size={16} className="text-on-surface-variant pointer-events-none" />
            </div>

            <div className="flex items-center bg-surface-container/50 rounded-xl border border-outline-variant/50 p-1">
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

          <div className="hidden md:block text-sm font-bold text-on-surface-variant bg-surface-container/50 px-4 py-2.5 rounded-xl border border-outline-variant/50">
            Showing <span className="text-gold-dark">{filteredProducts.length}</span> products
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
                  className={`group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${!categoryId ? 'bg-gold text-charcoal shadow-md shadow-gold/20 font-bold' : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'}`}
                >
                  <span className="text-sm">All Collections</span>
                  {!categoryId && <Check size={16} />}
                </Link>
                {categories.map(cat => (
                  <Link
                    key={cat.id}
                    to={`/shop/${cat.id}`}
                    className={`group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${categoryId === cat.id ? 'bg-gold text-charcoal shadow-md shadow-gold/20 font-bold' : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'}`}
                  >
                    <span className="text-sm">{cat.name}</span>
                    {categoryId === cat.id && <Check size={16} />}
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

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            {(categoryId === 'sweets' || categoryId === 'hots') ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-24 px-8 text-center bg-surface-lowest border border-gold/25 rounded-3xl max-w-2xl mx-auto shadow-sunlight space-y-6 relative overflow-hidden"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-gold via-spice to-gold" />
                
                <div className="w-24 h-24 rounded-full bg-gold-light/20 flex items-center justify-center mx-auto text-gold-dark mb-4">
                  <ShoppingBag size={48} strokeWidth={1.5} className="animate-float text-gold-dark" />
                </div>
                
                <span className="label-gold">Heritage Kitchen</span>
                <h3 className="font-serif text-4xl md:text-5xl font-bold text-on-surface tracking-tight">
                  Crafting <span className="text-gold-dark">Sweets & Hots</span>
                </h3>
                
                <p className="text-sm md:text-base text-on-surface-variant max-w-md mx-auto leading-relaxed">
                  Our authentic home-style {categoryId === 'sweets' ? 'Sweets' : "Hot's & Savories"} are currently being prepared in our traditional family kitchen. We'll be launch-ready very soon!
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={`https://wa.me/918074638357?text=Hi!%20I'd%20love%20to%20get%20notified%20when%20your%20delicious%20MS%20Homemade%20${categoryId === 'sweets' ? 'Sweets' : 'Hots'}%20are%20launched.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full sm:w-auto py-3 px-8 shadow-gold-glow hover:scale-105 transition-transform"
                  >
                    Notify me on WhatsApp
                  </a>
                  <Link
                    to="/shop"
                    className="btn btn-secondary w-full sm:w-auto py-3 px-8 hover:scale-105 transition-transform"
                  >
                    Browse Pickles & Podis
                  </Link>
                </div>
              </motion.div>
            ) : filteredProducts.length > 0 ? (
              <motion.div
                className={viewType === 'grid' ? "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6" : "flex flex-col gap-6"}
              >
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, scale: 0.9 }}
                      className={`bg-surface-lowest border border-outline-variant/30 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group ${
                        viewType === 'list' 
                          ? 'flex flex-col sm:flex-row gap-6 p-4' 
                          : 'p-3 md:p-4 flex flex-col justify-between h-full'
                      }`}
                    >
                      {/* Product Image and Overlay Tags */}
                      <Link 
                        to={`/product/${product.id}`} 
                        className={`block relative overflow-hidden bg-surface-container rounded-xl ${
                          viewType === 'list' 
                            ? 'w-full sm:w-44 h-44 aspect-square shrink-0' 
                            : 'w-full aspect-square mb-4'
                        }`}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                        />
                        
                        {/* Custom Badges (e.g. Vegetarian, Bestseller) */}
                        <div className="absolute top-2 left-2 flex flex-col gap-1.5 pointer-events-none z-10">
                          {product.tags?.includes('BESTSELLER') && (
                            <span className="bg-amber-950/90 text-gold text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow-sm border border-gold/20">
                              Bestseller
                            </span>
                          )}
                          {product.isVeg && (
                            <div className="w-5 h-5 bg-white rounded border border-green-600 flex items-center justify-center shadow-sm">
                              <span className="w-2.5 h-2.5 bg-green-600 rounded-full" />
                            </div>
                          )}
                        </div>

                        {/* Floating Wishlist Button */}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product);
                          }}
                          className="absolute top-2 right-2 w-9 h-9 bg-white/95 border border-outline-variant/30 rounded-full flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all text-on-surface-variant hover:text-red-500 z-10"
                        >
                          <Heart
                            size={18}
                            className={isInWishlist(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}
                          />
                        </button>
                      </Link>

                      {/* Product Content Details */}
                      <div className={`flex-1 flex flex-col justify-between ${viewType === 'list' ? 'py-1' : 'space-y-3'}`}>
                        <div className="space-y-1">
                          <span className="text-[9px] uppercase font-bold tracking-widest text-gold-dark block">
                            {product.category === 'veg' ? 'Veg Pickle' : product.category === 'nonveg' ? 'Non-Veg Pickle' : product.category === 'powders' ? 'Powder & Podi' : 'Heritage Special'}
                          </span>

                          <Link to={`/product/${product.id}`} className="block">
                            <h3 className="font-serif text-sm md:text-base font-extrabold text-on-surface hover:text-gold-dark transition-colors line-clamp-2 leading-tight">
                              {product.name}
                            </h3>
                          </Link>

                          {/* List View Description */}
                          {viewType === 'list' && (
                            <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-2 my-2 max-w-xl">
                              {product.description}
                            </p>
                          )}

                          {/* Spice Level Indicator */}
                          {product.spiceLevel && (
                            <div className="flex items-center gap-1.5 text-[9px] font-bold text-red-500 tracking-wider">
                              <span className="text-on-surface-variant/50 uppercase">Spice:</span>
                              <div className="flex gap-0.5">
                                {Array.from({ length: product.spiceLevel }).map((_, i) => (
                                  <span key={i}>🌶️</span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Price Block and CTA Select Button */}
                        <div className={`space-y-2.5 ${viewType === 'list' ? 'mt-4 sm:mt-1 flex flex-row items-center justify-between gap-4' : 'mt-auto pt-3'}`}>
                          <div className="space-y-0.5">
                            {/* Original Price */}
                            {Object.keys(product.prices).length > 1 && (
                              <div className="text-[10px] text-on-surface-variant/40 line-through">
                                Rs. {Object.values(product.prices)[Object.values(product.prices).length - 1]}
                              </div>
                            )}
                            {/* Active Price Row */}
                            <div className="flex items-center gap-1 flex-wrap">
                              <span className="font-serif text-sm md:text-lg font-extrabold text-amber-950">
                                Rs. {Object.values(product.prices)[0]}
                              </span>
                              {Object.keys(product.prices).length > 1 && (
                                <span className="text-[9px] md:text-[10px] text-on-surface-variant/65 font-semibold">
                                  / {Object.keys(product.prices)[0]}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className={`w-full ${viewType === 'list' ? 'sm:w-44 shrink-0' : ''}`}>
                            <Link
                              to={`/product/${product.id}`}
                              className="w-full flex items-center justify-center py-2 sm:py-2.5 px-3 bg-amber-900 hover:bg-amber-950 text-white text-[10px] sm:text-xs font-bold uppercase tracking-normal sm:tracking-widest rounded-xl hover:shadow-gold-glow transition-all duration-300 gap-1 group/btn"
                            >
                              <span>Select Options</span>
                              <ArrowRight size={10} className="group-hover/btn:translate-x-1 transition-transform shrink-0" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-32 px-6 text-center bg-surface-container border border-outline-variant/30 rounded-3xl"
              >
                <div className="w-24 h-24 rounded-full bg-surface border border-outline-variant/50 flex items-center justify-center mx-auto text-on-surface-variant/30 mb-8 shadow-inner">
                  <Search size={40} />
                </div>
                <h3 className="font-serif text-3xl font-bold text-on-surface mb-4">No products found</h3>
                <p className="text-on-surface-variant mb-8 max-w-md mx-auto">We couldn't find any products matching your current filters. Try adjusting them or clear all filters to see everything.</p>
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-charcoal font-bold rounded-xl hover:bg-gold-dark hover:shadow-xl hover:shadow-gold/20 transition-all"
                >
                  Clear all filters <ChevronRight size={18} />
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
