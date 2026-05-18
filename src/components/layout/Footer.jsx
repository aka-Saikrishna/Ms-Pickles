import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

// Inline SVGs for social icons not available in this lucide-react version
const IconInstagram = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const IconFacebook = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const IconYoutube = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-surface-low">
      <div className="gold-divider" />

      <div className="max-w-[1280px] mx-auto px-4 md:px-16 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <img src="/logo-light.png" alt="MS Homemade Pickles" className="w-14 h-14 rounded-full object-cover" />
            <div>
              <h3 className="font-serif text-lg font-bold text-on-surface">MS Homemade Pickles</h3>
              <p className="label-gold">Authentic Flavors, Straight From The Kitchen</p>
            </div>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Handcrafted Andhra-style pickles made with farm-fresh ingredients,
            traditional recipes, and zero preservatives.
          </p>
          <div className="flex items-center gap-3">
            <a href="https://instagram.com/ms_homemade_pickles" target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-gold hover:text-gold-dark hover:bg-gold-light/20 transition-all duration-300 hover:scale-110 shadow-sm" aria-label="Instagram">
              <IconInstagram size={24} />
            </a>
          </div>

          <div className="p-5 rounded-xl bg-surface-lowest border border-outline-variant/50 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <img src="/images/google-qr.jpg" alt="Check us out on Google" className="w-32 h-32 rounded-lg object-contain bg-white p-1.5 border border-outline-variant/30 shrink-0" />
            <div className="space-y-1">
              <p className="text-sm font-bold text-on-surface">Check us out on Google</p>
              <p className="text-xs text-on-surface-variant leading-relaxed">Scan to view our business listing & customer reviews!</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-base font-semibold text-on-surface mb-5">Quick Links</h4>
          <nav className="flex flex-col gap-3">
            {[
              { to: '/', label: 'Home' },
              { to: '/shop', label: 'Shop All' },
              { to: '/shop/special', label: 'Specials' },
              { to: '/about', label: 'About Us' },
              { to: '/faq', label: 'FAQ' },
            ].map(link => (
              <Link key={link.to} to={link.to} className="text-sm text-on-surface-variant hover:text-gold-dark transition-colors duration-150">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Collections */}
        <div>
          <h4 className="font-serif text-base font-semibold text-on-surface mb-5">Collections</h4>
          <nav className="flex flex-col gap-3">
            {[
              { to: '/shop/veg', label: 'Veg Pickles' },
              { to: '/shop/nonveg', label: 'Non-Veg Pickles' },
              { to: '/shop/special', label: 'Special Items' },
              { to: '/shop/powders', label: 'Powders & Podis' },
            ].map(link => (
              <Link key={link.to} to={link.to} className="text-sm text-on-surface-variant hover:text-gold-dark transition-colors duration-150">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact + Newsletter */}
        <div className="space-y-6">
          <div>
            <h4 className="font-serif text-base font-semibold text-on-surface mb-5">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+918074638357" className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-gold-dark transition-colors">
                <Phone size={15} /> +91 8074638357
              </a>
              <a href="mailto:info@mshomemadepickles.com" className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-gold-dark transition-colors">
                <Mail size={15} /> info@mshomemadepickles.com
              </a>
              <span className="flex items-center gap-2 text-sm text-on-surface-variant">
                <MapPin size={15} /> Andhra Pradesh, India
              </span>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-on-surface mb-2">Subscribe for offers</p>
            <form onSubmit={e => e.preventDefault()} className="flex gap-2">
              <input type="email" placeholder="Your email" className="flex-1 px-3 py-2.5 bg-surface-lowest border border-outline-variant rounded-md text-sm focus:border-gold focus:ring-2 focus:ring-gold/10 outline-none transition-all" />
              <button type="submit" className="px-4 py-2.5 bg-gold text-charcoal text-sm font-semibold rounded-md hover:shadow-gold-glow transition-shadow shrink-0">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-outline-variant/50">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-on-surface-variant">&copy; {new Date().getFullYear()} MS Homemade Pickles. All rights reserved.</p>
          <div className="flex items-center gap-3 text-xs">
            <span className="label-gold">FSSAI Certified</span>
            <span className="w-1 h-1 rounded-full bg-outline-variant" />
            <span className="label-gold">International Packaging Standards</span>
          </div>
          <button onClick={scrollToTop} className="w-9 h-9 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-gold hover:text-gold-dark transition-all" aria-label="Back to top">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
