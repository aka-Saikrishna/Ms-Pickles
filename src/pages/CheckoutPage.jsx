import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ShieldCheck, Truck, CheckCircle2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState(1); // 1: Info, 2: Payment, 3: Success
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(3);
      clearCart();
    }, 2000);
  };

  if (items.length === 0 && step < 3) {
    return (
      <div className="pt-40 pb-24 text-center space-y-6">
        <h2 className="font-serif text-3xl font-bold text-on-surface">Nothing to checkout</h2>
        <Link to="/shop" className="btn btn-primary">Go to Shop</Link>
      </div>
    );
  }

  return (
    <div className="bg-surface min-h-screen pt-32 pb-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        {step < 3 ? (
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-start">
            {/* Main Form */}
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <Link to="/cart" className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface hover:text-gold-dark transition-all">
                  <ChevronLeft size={20} />
                </Link>
                <div>
                  <h1 className="font-serif text-3xl font-bold text-on-surface">Checkout</h1>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${step >= 1 ? 'text-gold-dark' : 'text-on-surface-variant'}`}>Shipping</span>
                    <div className="w-8 h-px bg-outline-variant" />
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${step >= 2 ? 'text-gold-dark' : 'text-on-surface-variant'}`}>Payment</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handlePlaceOrder} className="space-y-8">
                <div className="glass-card p-8 space-y-6">
                  <h3 className="font-serif text-xl font-bold text-on-surface">Shipping Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Full Name</label>
                      <input required type="text" className="input-field" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Email Address</label>
                      <input required type="email" className="input-field" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Phone Number</label>
                      <input required type="tel" className="input-field" placeholder="+91 00000 00000" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Street Address</label>
                      <input required type="text" className="input-field" placeholder="House no, Street name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">City</label>
                      <input required type="text" className="input-field" placeholder="City" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Pincode</label>
                      <input required type="text" className="input-field" placeholder="000 000" />
                    </div>
                  </div>
                </div>

                <div className="glass-card p-8 space-y-6">
                  <h3 className="font-serif text-xl font-bold text-on-surface">Payment Method</h3>
                  <div className="space-y-4">
                    <label className="flex items-center gap-4 p-4 rounded-xl border-2 border-gold bg-gold-light/10 cursor-pointer">
                      <input type="radio" name="payment" defaultChecked className="w-4 h-4 accent-gold" />
                      <div className="flex-1">
                        <p className="text-sm font-bold text-on-surface">Cash on Delivery (COD)</p>
                        <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Pay when you receive your heritage jar</p>
                      </div>
                    </label>
                    <label className="flex items-center gap-4 p-4 rounded-xl border-2 border-outline-variant opacity-50 cursor-not-allowed">
                      <input disabled type="radio" name="payment" className="w-4 h-4 accent-gold" />
                      <div className="flex-1">
                        <p className="text-sm font-bold text-on-surface">Online Payment (Coming Soon)</p>
                        <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Secure UPI, Cards & Netbanking</p>
                      </div>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full flex items-center justify-center gap-3 py-5 bg-charcoal text-white font-bold rounded-xl text-lg hover:bg-on-surface-variant transition-all shadow-xl disabled:opacity-50"
                >
                  {isProcessing ? 'Processing Order...' : 'Place Your Order'}
                  {!isProcessing && <ArrowRight size={22} />}
                </button>
              </form>
            </div>

            {/* Order Summary Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-32">
              <div className="glass-card p-8 space-y-6">
                <h3 className="font-serif text-xl font-bold text-on-surface">Order Details</h3>
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 no-scrollbar">
                  {items.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-16 h-16 rounded-lg bg-surface-container shrink-0" />
                      <div className="flex-1 space-y-0.5">
                        <h4 className="text-sm font-bold text-on-surface line-clamp-1">{item.name}</h4>
                        <p className="text-[10px] text-on-surface-variant font-medium uppercase tracking-widest">{item.weight} • Qty: {item.quantity}</p>
                        <p className="text-xs font-bold text-gold-dark">Rs. {item.price * item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-6 border-t border-outline-variant/30">
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">Subtotal</span>
                    <span className="font-bold text-on-surface">Rs. {totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">Shipping</span>
                    <span className="font-bold text-veg">FREE</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-outline-variant/30">
                    <span className="font-serif text-xl font-bold text-on-surface">Grand Total</span>
                    <span className="font-serif text-xl font-bold text-gold-dark">Rs. {totalPrice}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-veg-light/50 border border-veg/10 flex gap-4">
                <Truck className="text-veg shrink-0" size={24} />
                <div className="space-y-1">
                  <p className="text-sm font-bold text-veg">Fast & Secure Delivery</p>
                  <p className="text-xs text-on-surface-variant">Expected delivery within 7-10 working days.</p>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-gold-light/20 border border-gold/10 flex gap-4">
                <ShieldCheck className="text-gold-dark shrink-0" size={24} />
                <div className="space-y-1">
                  <p className="text-sm font-bold text-gold-dark">Authenticity Guaranteed</p>
                  <p className="text-xs text-on-surface-variant">Handcrafted with zero preservatives.</p>
                </div>
              </div>
            </aside>
          </div>
        ) : (
          /* Success View */
          <div className="max-w-2xl mx-auto py-24 text-center space-y-8 animate-fade-in">
            <div className="w-24 h-24 rounded-full bg-veg-light flex items-center justify-center mx-auto text-veg animate-scale-in">
              <CheckCircle2 size={64} />
            </div>
            <div className="space-y-4">
              <h1 className="font-serif text-5xl font-bold text-on-surface">Order Placed!</h1>
              <p className="text-lg text-on-surface-variant">
                Thank you for choosing MS Homemade Pickles. Your heritage jar is being prepared and will be with you shortly.
              </p>
            </div>
            <div className="glass-card p-8 inline-block w-full">
              <p className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-4">Order Summary</p>
              <div className="flex justify-between text-lg font-bold text-on-surface pb-4 border-b border-outline-variant/30">
                <span>Total Amount Payable (COD)</span>
                <span className="text-gold-dark">Rs. {totalPrice}</span>
              </div>
              <p className="text-xs text-on-surface-variant mt-4">A confirmation message has been sent to your phone.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/" className="btn btn-primary btn-lg w-full sm:w-auto px-12">Return Home</Link>
              <Link to="/shop" className="btn btn-secondary btn-lg w-full sm:w-auto px-12">Shop More</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
