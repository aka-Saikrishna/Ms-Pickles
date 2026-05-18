import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingCart, User, Heart, Package } from 'lucide-react';

export default function BottomNav() {
  const location = useLocation();
  
  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/shop', icon: Package, label: 'Shop' },
    { to: '/wishlist', icon: Heart, label: 'Wishlist' },
    { to: '/cart', icon: ShoppingCart, label: 'Cart' },
    { to: '/account', icon: User, label: 'My Account' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex flex-col items-center gap-1 px-3 py-2 ${isActive ? 'text-amber-600' : 'text-gray-600'}`}
            >
              <item.icon size={20} className={isActive ? 'text-amber-600' : 'text-gray-500'} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
