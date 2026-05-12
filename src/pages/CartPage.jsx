import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, ChevronLeft, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <div className="bg-surface min-h-screen pt-32 pb-24" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div className="space-y-2">
            <h1 className="font-serif text-4xl font-bold text-on-surface">Your Shopping Bag</h1>
            <p className="text-on-surface-variant font-medium">You have {totalItems} items in your cart.</p>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-bold text-gold-dark hover:underline">
            <ChevronLeft size={16} /> Continue Shopping
          </Link>
        </div>

        {items.length > 0 ? (
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">
            {/* Items List */}
            <div className={`space-y-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {items.map((item, index) => (
                <div key={`${item.id}-${index}`} className="glass-card p-6 flex flex-col sm:flex-row items-center gap-6 group">
                  <div className="w-24 h-24 rounded-xl overflow-hidden bg-surface-container shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-gold-light/20 to-spice-light/10" />
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-serif text-lg font-bold text-on-surface">{item.name}</h3>
                        <p className="text-xs text-on-surface-variant font-semibold uppercase tracking-wider">{item.weight} • {item.preference || 'Standard'}</p>
                      </div>
                      <span className="font-bold text-on-surface">Rs. {item.price * item.quantity}</span>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-outline-variant rounded-lg p-0.5 bg-white">
                        <button onClick={() => updateQuantity(index, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center text-on-surface hover:text-gold transition-colors">
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-on-surface">{item.quantity}</span>
                        <button onClick={() => updateQuantity(index, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center text-on-surface hover:text-gold transition-colors">
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(index)}
                        className="text-on-surface-variant hover:text-error transition-colors flex items-center gap-1.5 text-xs font-bold"
                      >
                        <Trash2 size={14} /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <aside className={`glass-card p-8 space-y-8 sticky top-32 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <h2 className="font-serif text-2xl font-bold text-on-surface">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Subtotal</span>
                  <span className="font-bold text-on-surface">Rs. {totalPrice}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Shipping</span>
                  <span className="font-bold text-veg">FREE</span>
                </div>
                <div className="pt-4 border-t border-outline-variant/30 flex justify-between">
                  <span className="font-serif text-xl font-bold text-on-surface">Total</span>
                  <span className="font-serif text-xl font-bold text-gold-dark">Rs. {totalPrice}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="w-full flex items-center justify-center gap-2 py-4 bg-charcoal text-white font-bold rounded-lg text-base hover:bg-on-surface-variant transition-all shadow-lg"
              >
                Proceed to Checkout <ArrowRight size={18} />
              </Link>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3 text-xs text-on-surface-variant font-medium">
                  <CreditCard size={16} className="text-gold-dark" />
                  Secure SSL Encryption
                </div>
                <div className="flex items-center gap-3 text-xs text-on-surface-variant font-medium">
                  <ShoppingBag size={16} className="text-gold-dark" />
                  International Packaging Standards
                </div>
              </div>
            </aside>
          </div>
        ) : (
          <div className="py-24 text-center space-y-6 glass-card border-dashed">
            <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center mx-auto text-on-surface-variant/40">
              <ShoppingBag size={40} />
            </div>
            <div className="space-y-2">
              <h2 className="font-serif text-3xl font-bold text-on-surface">Your bag is empty</h2>
              <p className="text-on-surface-variant max-w-sm mx-auto">Looks like you haven't added any of our heritage pickles yet.</p>
            </div>
            <Link to="/shop" className="btn btn-primary btn-lg">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
