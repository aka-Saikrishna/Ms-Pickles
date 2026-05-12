import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Users } from 'lucide-react';

export default function MeetFounder() {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <section className="py-24 bg-surface relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-orange-500/20" />
              <div className="absolute inset-0 flex items-center justify-center text-white/20 font-sans text-8xl font-bold">Chef</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-amber-400/10 text-amber-700 text-xs font-semibold tracking-wider uppercase rounded-full">Meet The Founder</span>
              <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-gray-900">
                Chef Murala <span className="text-amber-600">Venkatesh</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                With 40+ years of culinary experience, Chef Venkatesh from Kolluru, Andhra Pradesh brings the authentic flavours of Andhra & Telangana cuisine to your home. From outdoor cooking in nature to handcrafting every jar of pickle — the tradition lives on.
              </p>
            </div>

            {/* Stats */}
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-gray-200 shadow-lg">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-700">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="font-sans text-3xl font-extrabold text-gray-900">3.9M+</h3>
                  <p className="text-sm text-gray-600">Trusted Followers</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Across YouTube, Instagram & Facebook</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
