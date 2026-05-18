import { ShieldCheck, ChefHat, Globe, Package } from 'lucide-react';

const badges = [
  { icon: ShieldCheck, title: '100% Pure & Hygienic', desc: 'Prepared under strict sanitary guidelines.' },
  { icon: ChefHat, title: 'Homemade Spices', desc: 'Natural, hand-ground authentic spice blends.' },
  { icon: Globe, title: 'International Delivery', desc: 'Global shipping straight to your doorstep.' },
  { icon: Package, title: 'High Standard Packing', desc: 'Leak-proof food-grade export packing.' },
];

export default function TrustBadges() {
  return (
    <section className="py-12 border-t border-b border-outline-variant/30 bg-surface-lowest">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4">
              <div className="w-10 h-10 rounded-full bg-gold-light/20 flex items-center justify-center text-gold-dark shrink-0">
                <badge.icon size={20} strokeWidth={1.5} />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-on-surface">{badge.title}</h4>
                <p className="text-[11px] text-on-surface-variant uppercase tracking-wider font-medium">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
