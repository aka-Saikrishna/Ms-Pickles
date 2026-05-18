import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Heart, Phone } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems: cartItems } = useCart();
  const { totalItems: wishlistItems } = useWishlist();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/shop/special', label: 'Specials' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/faq', label: 'FAQ' },
  ];

  return (
    <>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300
        ${scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200' 
          : isHomePage 
            ? 'bg-transparent' 
            : 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200'
        }`}
        style={{ opacity: 1, visibility: 'visible' }}
      >
        {/* Scrolling Announcement Bar */}
        <div className="bg-amber-950 text-amber-100/90 py-2.5 overflow-hidden border-b border-amber-900/30 select-none text-[10px] md:text-xs font-bold uppercase tracking-widest font-sans">
          <div className="flex whitespace-nowrap overflow-hidden">
            <div className="animate-marquee inline-flex gap-8 shrink-0">
              <span>No Palm Oil</span>
              <span className="text-amber-400/60">•</span>
              <span>Zero Preservatives</span>
              <span className="text-amber-400/60">•</span>
              <span>No Artificial Colors</span>
              <span className="text-amber-400/60">•</span>
              <span>100% Homemade</span>
              <span className="text-amber-400/60">•</span>
              <span>Pure Cold-Pressed Oils</span>
              <span className="text-amber-400/60">•</span>

              <span>No Palm Oil</span>
              <span className="text-amber-400/60">•</span>
              <span>Zero Preservatives</span>
              <span className="text-amber-400/60">•</span>
              <span>No Artificial Colors</span>
              <span className="text-amber-400/60">•</span>
              <span>100% Homemade</span>
              <span className="text-amber-400/60">•</span>
              <span>Pure Cold-Pressed Oils</span>
              <span className="text-amber-400/60">•</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src="/logo-light.png" alt="MS Homemade Pickles" className="w-12 h-12 rounded-full object-cover" />
            <div className="flex flex-col">
              <span className="font-sans text-lg font-extrabold tracking-tight text-gray-900">
                MS Pickles
              </span>
              <span className="text-[11px] font-bold tracking-widest uppercase text-amber-600">
                Homemade Heritage
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-sm font-bold py-1.5 transition-colors duration-150 group
                  ${location.pathname === link.to ? 'text-amber-600' : 'text-gray-600 hover:text-amber-600'}`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transition-transform duration-300 origin-center
                  ${location.pathname === link.to ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link to="/wishlist" className="relative flex items-center justify-center w-11 h-11 rounded-full transition-colors text-gray-700 hover:bg-gray-100" aria-label="Wishlist">
              <Heart size={22} strokeWidth={1.8} />
              {wishlistItems > 0 && (
                <span className="absolute top-1 right-1 min-w-[18px] h-[18px] rounded-full bg-red-500 text-white text-[11px] font-bold flex items-center justify-center">
                  {wishlistItems}
                </span>
              )}
            </Link>
            <Link to="/cart" className="relative flex items-center justify-center w-11 h-11 rounded-full transition-colors text-gray-700 hover:bg-gray-100" aria-label="Shopping cart">
              <ShoppingBag size={22} strokeWidth={1.8} />
              {cartItems > 0 && (
                <span className="absolute top-1 right-1 min-w-[18px] h-[18px] rounded-full bg-amber-400 text-gray-900 text-[11px] font-bold flex items-center justify-center animate-scale-in">
                  {cartItems}
                </span>
              )}
            </Link>
            <button
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-md text-gray-700"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[999] transition-opacity duration-300
        ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div
          className={`absolute right-0 top-0 w-80 max-w-[85vw] h-full bg-surface pt-24 px-8 pb-8 flex flex-col justify-between transition-transform duration-500
            ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={e => e.stopPropagation()}
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-serif text-[22px] font-semibold text-on-surface py-3.5 border-b border-surface-high hover:text-gold-dark transition-colors"
                style={{ animation: mobileOpen ? `slide-in-right 0.4s ease ${i * 60}ms forwards` : 'none', opacity: mobileOpen ? 0 : 1 }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a href="tel:+918074638357" className="flex items-center justify-center gap-2 w-full py-4 px-7 bg-gold text-charcoal font-semibold rounded-md text-base hover:shadow-gold-glow transition-shadow">
            <Phone size={18} /> Call to Order
          </a>
        </div>
      </div>
    </>
  );
}
