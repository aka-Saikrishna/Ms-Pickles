import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Users } from 'lucide-react';

export default function MeetFounder() {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <section className="py-24 bg-surface relative overflow-hidden" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className={`relative transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-spice/20" />
              <div className="absolute inset-0 flex items-center justify-center text-white/20 font-serif text-8xl">Chef</div>
            </div>
          </div>

          {/* Content Side */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="space-y-4">
              <span className="label-gold">Meet The Founder</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-on-surface">
                Chef Murala <span className="text-gold-dark">Venkatesh</span>
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                With 40+ years of culinary experience, Chef Venkatesh from Kolluru, Andhra Pradesh brings the authentic flavours of Andhra & Telangana cuisine to your home. From outdoor cooking in nature to handcrafting every jar of pickle — the tradition lives on.
              </p>
            </div>

            {/* Stats */}
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-outline-variant/50 shadow-lg">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-full bg-gold-light/30 flex items-center justify-center text-gold-dark">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-3xl font-bold text-on-surface">3.9M+</h3>
                  <p className="text-sm text-on-surface-variant">Trusted Followers</p>
                </div>
              </div>
              <p className="text-xs text-on-surface-variant uppercase tracking-wider">Across YouTube, Instagram & Facebook</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
