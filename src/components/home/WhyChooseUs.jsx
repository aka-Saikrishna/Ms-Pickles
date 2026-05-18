import { ShieldCheck, ChefHat, BadgeCheck, Heart, Globe, Package } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const features = [
  { icon: ShieldCheck, title: 'Strict Hygiene & Safety', desc: 'Our state-of-the-art kitchen conforms to FSSAI guidelines, utilizing surgical-grade sanitation practices so every jar is 100% safe, clean, and pristine.' },
  { icon: ChefHat, title: '100% Homemade Spices', desc: 'No store-bought spice packets or artificial colors. We dry-roast, blend, and stone-grind our secret spice mixes in-house for that unmatched authentic Andhra aroma.' },
  { icon: Globe, title: 'International Shipping', desc: 'Bringing the taste of home to your doorstep worldwide! We proudly offer reliable international delivery to the USA, UK, Canada, Australia, Gulf, and beyond.' },
  { icon: Package, title: 'High-Standard Packing', desc: 'Packed using food-grade export containers with heavy-duty sealants and triple-layered bubble wrap, guaranteeing complete leak-proof security during long voyages.' },
  { icon: BadgeCheck, title: 'No Artificial Preservatives', desc: 'We preserve our pickles the traditional way — using strictly high-quality cold-pressed oils, natural salt, and souring agents. Absolutely zero chemicals used.' },
  { icon: Heart, title: 'Handcrafted in Small Batches', desc: 'Prepared in limited household batches under strict family supervision to preserve the heritage quality and home-cooked soul in every single spoonful.' },
];

export default function WhyChooseUs() {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <section className="py-24 md:py-32 bg-surface relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 gold-divider" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="label-gold">Why Choose Us</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-on-surface">
            Crafted with <span className="text-gold-dark">Heritage</span>
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            Every jar of MS Homemade Pickles carries the legacy of authentic Andhra cuisine,
            made with unwavering commitment to quality.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          {features.map((feat, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl bg-white/90 backdrop-blur-md border border-outline-variant/50 hover:border-gold/40 transition-all duration-300 hover:shadow-sunlight hover:-translate-y-1"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gold-light/30 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                <feat.icon size={26} strokeWidth={1.8} className="text-gold-dark" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-on-surface mb-2">{feat.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{feat.desc}</p>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-16 h-[1px] bg-gradient-to-l from-gold/30 to-transparent" />
                <div className="absolute top-0 right-0 h-16 w-[1px] bg-gradient-to-b from-gold/30 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
