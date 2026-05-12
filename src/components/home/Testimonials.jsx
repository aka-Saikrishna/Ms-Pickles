import { Quote, Star } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <section className="py-24 bg-surface relative" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="text-center mb-16 space-y-4">
          <span className="label-gold">Testimonials</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-on-surface">
            Loved by <span className="text-gold-dark">Enthusiasts</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`glass-card p-8 relative transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="absolute top-6 right-8 text-gold/20" size={48} />

              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="var(--color-gold)" className="text-gold" />
                ))}
              </div>

              <p className="text-on-surface-variant italic leading-relaxed mb-6">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-light/30 flex items-center justify-center font-serif font-bold text-gold-dark">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-sm">{t.name}</h4>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
