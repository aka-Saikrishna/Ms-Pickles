import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Star, ShieldCheck, Truck, RefreshCcw, ChevronRight, ChevronLeft, Plus, Minus, Heart } from 'lucide-react';
import { products, getProductById, getProductsByCategory } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ProductPage() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [ref, visible] = useScrollReveal(0.1);

  const [selectedWeight, setSelectedWeight] = useState('');
  const [selectedPreference, setSelectedPreference] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    if (product) {
      setSelectedWeight(Object.keys(product.prices)[0]);
      if (product.preferences.length > 0) setSelectedPreference(product.preferences[0]);
      setQuantity(1);
    }
  }, [product]);

  if (!product) return <div className="pt-32 text-center">Product not found</div>;

  const relatedProducts = getProductsByCategory(product.category).filter(p => p.id !== product.id).slice(0, 4);

  const features = [
    { icon: ShieldCheck, title: 'FSSAI Certified', desc: 'Quality & Safety' },
    { icon: Truck, title: 'Safe Delivery', desc: 'Secure Packaging' },
    { icon: RefreshCcw, title: 'Natural Prep', desc: 'No Preservatives' },
  ];

  return (
    <div className="bg-surface min-h-screen pt-20" ref={ref}>
      {/* Breadcrumbs */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 py-8">
        <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">
          <Link to="/" className="hover:text-gold-dark">Home</Link>
          <ChevronRight size={10} />
          <Link to="/shop" className="hover:text-gold-dark">Shop</Link>
          <ChevronRight size={10} />
          <Link to={`/shop/${product.category}`} className="hover:text-gold-dark">{product.category}</Link>
          <ChevronRight size={10} />
          <span className="text-gold-dark">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Product Images */}
          <div className="space-y-6">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative glass border border-gold/10">
              <img 
                src={product.image} 
                alt={product.name} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent pointer-events-none" />

              {/* Tags */}
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                {product.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-gold-dark border border-gold/20 shadow-sm uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`aspect-square rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${i === 1 ? 'border-gold shadow-md' : 'border-transparent opacity-60 hover:opacity-100'}`}>
                  <img src={product.image} alt="thumbnail" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className={`space-y-10 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill={i < 4 ? "currentColor" : "none"} strokeWidth={2} />)}
                  <span className="text-sm font-bold text-on-surface-variant ml-2">4.9 (48 Reviews)</span>
                </div>
                <button 
                  onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)}
                  className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center transition-all hover:border-error"
                >
                  <Heart 
                    size={20} 
                    className={isInWishlist(product.id) ? 'fill-red-500 text-red-500' : 'text-on-surface-variant hover:text-red-500'} 
                  />
                </button>
              </div>

              <div>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-on-surface">{product.name}</h1>
                <p className="text-gold-dark italic font-serif text-lg mt-1">{product.tagline}</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-on-surface">Rs. {product.prices[selectedWeight]}</span>
                <span className="px-3 py-1 bg-gold-light/30 rounded text-[10px] font-bold text-gold-dark uppercase tracking-widest border border-gold/10">Inclusive of all taxes</span>
              </div>
            </div>

            {/* Selection Areas */}
            <div className="space-y-8">
              {/* Weight Selector */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest flex justify-between">
                  Select Weight <span>(Grams)</span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {Object.keys(product.prices).map((w) => (
                    <button
                      key={w}
                      onClick={() => setSelectedWeight(w)}
                      className={`px-6 py-3 rounded-lg border-2 font-bold text-sm transition-all ${selectedWeight === w ? 'border-gold bg-gold-light/10 text-gold-dark shadow-md' : 'border-outline-variant text-on-surface-variant hover:border-gold/40'}`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preference Selector */}
              {product.preferences.length > 0 && (
                <div className="space-y-3">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Preference</label>
                  <div className="flex flex-wrap gap-3">
                    {product.preferences.map((p) => (
                      <button
                        key={p}
                        onClick={() => setSelectedPreference(p)}
                        className={`px-5 py-2.5 rounded-lg border-2 font-bold text-sm transition-all ${selectedPreference === p ? 'border-terracotta bg-terracotta-light/10 text-terracotta-deep shadow-md' : 'border-outline-variant text-on-surface-variant hover:border-terracotta/40'}`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity and CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <div className="flex items-center border-2 border-outline-variant rounded-lg p-1 bg-white">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center text-on-surface hover:text-gold transition-colors">
                    <Minus size={18} />
                  </button>
                  <span className="w-12 text-center font-bold text-on-surface">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center text-on-surface hover:text-gold transition-colors">
                    <Plus size={18} />
                  </button>
                </div>
                <button
                  onClick={() => addItem(product, selectedWeight, selectedPreference)}
                  className="flex-1 w-full flex items-center justify-center gap-3 py-4 bg-gold text-charcoal font-bold rounded-lg text-lg hover:shadow-gold-glow transition-all"
                >
                  <ShoppingBag size={22} /> Add to Cart
                </button>
              </div>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {features.map((f, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-2 p-4 rounded-xl bg-surface-container/50">
                  <f.icon size={20} className="text-gold-dark" />
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-bold text-on-surface uppercase tracking-tighter">{f.title}</p>
                    <p className="text-[9px] text-on-surface-variant">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tabs Area */}
            <div className="pt-8 border-t border-outline-variant/30">
              <div className="flex border-b border-outline-variant/30">
                {['description', 'shipping', 'faq'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all relative ${activeTab === tab ? 'text-gold-dark' : 'text-on-surface-variant hover:text-gold'}`}
                  >
                    {tab}
                    {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gold" />}
                  </button>
                ))}
              </div>
              <div className="py-6 min-h-[150px]">
                {activeTab === 'description' && (
                  <p className="text-sm text-on-surface-variant leading-relaxed">{product.description}</p>
                )}
                {activeTab === 'shipping' && (
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Standard shipping Rs.60. Delivery within 7-10 business days. International delivery available with premium packaging standards.
                  </p>
                )}
                {activeTab === 'faq' && (
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Zero artificial preservatives. Refrigerate non-veg pickles after opening. Use only dry spoons for long shelf life.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-24 border-t border-outline-variant/30">
            <div className="flex items-end justify-between mb-12">
              <div className="space-y-3">
                <span className="label-gold">You May Also Like</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-on-surface">Related <span className="text-gold-dark">Delicacies</span></h2>
              </div>
              <Link to="/shop" className="text-sm font-bold text-gold-dark hover:underline flex items-center gap-1">
                View All <ChevronRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => (
                <Link key={p.id} to={`/product/${p.id}`} className="glass-card group p-4 block">
                  <div className="aspect-square rounded-xl overflow-hidden mb-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-light/10 to-spice-light/5 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-on-surface group-hover:text-gold-dark transition-colors">{p.name}</h3>
                  <p className="text-xs text-on-surface-variant mt-1">Rs. {Object.values(p.prices)[0]}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
