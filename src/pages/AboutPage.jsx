import { Leaf, Heart, Users, Award, ShieldCheck, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const values = [
  { icon: Leaf, title: 'Pure Ingredients', desc: 'Every ingredient is sourced from trusted local farms with zero compromise on freshness.' },
  { icon: Heart, title: 'Made with Love', desc: 'Each jar is handcrafted with the same care and passion as a home-cooked meal.' },
  { icon: ShieldCheck, title: 'No Preservatives', desc: 'We rely only on traditional oils and spices for preservation — the way it was always done.' },
  { icon: Award, title: 'Heritage Recipes', desc: 'Recipes passed down through generations, preserving the authentic taste of Andhra cuisine.' },
];

export default function AboutPage() {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <div className="bg-surface min-h-screen pt-32 pb-24" ref={ref}>
      {/* Hero */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="space-y-4">
              <span className="label-gold">Our Story</span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-on-surface leading-tight">
                From a Village Kitchen <br />
                <span className="text-gold-dark">to Your Table</span>
              </h1>
            </div>
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-lg">
              MS Homemade Pickles was born from a simple belief: that the authentic flavors of Andhra
              cuisine deserve to be preserved and shared with the world. What started as a family tradition
              of making pickles during harvest season has grown into a passion-driven enterprise.
            </p>
            <p className="text-on-surface-variant leading-relaxed max-w-lg">
              Every jar that leaves our kitchen carries the warmth of home, the richness of tradition,
              and the promise of zero artificial ingredients. We use only cold-pressed oils, sun-dried
              spices, and farm-fresh produce to craft pickles that taste exactly like they did in our
              grandmother's kitchen.
            </p>
            <div className="flex items-center gap-8 pt-4">
              {[
                { value: '30+', label: 'Products' },
                { value: '1000+', label: 'Happy Customers' },
                { value: '5+', label: 'Countries' },
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <span className="font-serif text-3xl font-bold text-gold-dark">{stat.value}</span>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative h-[500px] transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-sunlight">
              <img 
                src="https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=1000&q=80" 
                alt="Our Kitchen Heritage" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-white shadow-lg z-10">
              <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80" alt="Pickle jars" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-surface-low py-24">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="text-center mb-16 space-y-4">
            <span className="label-gold">What Defines Us</span>
            <h2 className="font-serif text-4xl font-bold text-on-surface">Our <span className="text-gold-dark">Values</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="text-center space-y-4 p-8 rounded-2xl bg-white/80 backdrop-blur-md border border-outline-variant/30 hover:border-gold/30 hover:shadow-sunlight transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gold-light/30 flex items-center justify-center mx-auto">
                  <v.icon size={28} className="text-gold-dark" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg font-bold text-on-surface">{v.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="py-24">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="text-center mb-16 space-y-4">
            <span className="label-gold">The Process</span>
            <h2 className="font-serif text-4xl font-bold text-on-surface">How We <span className="text-gold-dark">Craft</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: '01', title: 'Source', desc: 'Fresh ingredients sourced directly from trusted local farms in Andhra Pradesh.' },
              { step: '02', title: 'Prepare', desc: 'Traditional sun-drying, hand-grinding, and slow-cooking with heritage spice blends.' },
              { step: '03', title: 'Deliver', desc: 'Sealed in airtight jars with international packaging standards for safe delivery.' },
            ].map((s, i) => (
              <div key={i} className="relative space-y-4">
                <span className="font-serif text-7xl font-bold text-gold/10 absolute -top-6 -left-4">{s.step}</span>
                <div className="relative z-10 pt-8">
                  <h3 className="font-serif text-2xl font-bold text-on-surface mb-2">{s.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{s.desc}</p>
                </div>
                {i < 2 && <div className="hidden md:block absolute top-16 right-0 w-12 h-px bg-gold/30" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
