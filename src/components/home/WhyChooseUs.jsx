import { Leaf, ShieldCheck, ChefHat, BadgeCheck, Sprout, Heart } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const features = [
  { icon: Leaf, title: '100% Natural', desc: 'Where traditional Andhra recipes meet farm-fresh ingredients — our handcrafted pickles deliver authentic homestyle taste with zero preservatives.' },
  { icon: ShieldCheck, title: 'No Preservatives', desc: 'No artificial preservatives, no chemicals, no shortcuts. Our pickles are made in small batches with natural preservation methods — just pure spices, oil, and love in every jar.' },
  { icon: ChefHat, title: 'Traditional Recipes', desc: 'Our pickles are crafted using age-old Andhra recipes passed down through generations. Every jar preserves the authentic taste of homemade pickles — made the way grandmothers have done it for centuries.' },
  { icon: BadgeCheck, title: 'FSSAI Certified', desc: 'Certified food safety standards ensuring the highest quality and hygiene.' },
  { icon: Sprout, title: 'Farm Fresh Ingredients', desc: 'We source only the freshest vegetables, raw mangoes, and premium spices directly from farms. Cold-pressed oils and handpicked ingredients ensure every jar bursts with natural flavour.' },
  { icon: Heart, title: 'Handcrafted with Love', desc: 'Every jar is made by hand with care, attention, and passion for authentic taste.' },
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
