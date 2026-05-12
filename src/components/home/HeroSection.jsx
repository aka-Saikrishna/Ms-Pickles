import { Link } from 'react-router-dom';
import { useScrollReveal, useParallax } from '../../hooks/useScrollReveal';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const [parallaxRef, offset] = useParallax(0.3);

  return (
    <section ref={parallaxRef} className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-surface via-surface-low to-gold-light/20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gold/5 blur-3xl" style={{ transform: `translateY(${offset * 0.5}px)` }} />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-terracotta/5 blur-3xl" style={{ transform: `translateY(${-offset * 0.3}px)` }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold/10" style={{ transform: `translate(-50%, -50%) rotate(${offset * 0.1}deg)` }} />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-16 w-full grid lg:grid-cols-2 gap-12 items-center py-20 relative z-10">
        {/* Text Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-light/30 border border-gold/20">
            <Sparkles size={14} className="text-gold-dark" />
            <span className="text-xs font-semibold text-gold-dark tracking-wider uppercase">Handcrafted with Love</span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-on-surface leading-tight tracking-tight">
            Authentic <span className="text-gold-dark">Flavors</span>,
            <br />
            Straight From <span className="text-terracotta-deep">The Kitchen</span>
          </h1>

          <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed">
            Traditional Andhra-style pickles handcrafted with farm-fresh ingredients,
            time-honored recipes, and zero preservatives. Taste the heritage in every jar.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/shop" className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-charcoal font-semibold rounded-md text-base hover:shadow-gold-glow transition-all duration-300 group">
              Explore Our Collection
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gold text-gold-dark font-semibold rounded-md text-base hover:bg-gold/5 transition-all duration-300">
              Our Story
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            {[
              { value: '20+', label: 'Pickle Varieties' },
              { value: '80K+', label: 'Happy Families' },
              { value: '4.3', label: 'Rated Stars' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="font-serif text-2xl font-bold text-gold-dark">{stat.value}</span>
                <span className="text-xs text-on-surface-variant font-medium uppercase tracking-wider">{stat.label}</span>
                {i < 2 && <span className="w-px h-8 bg-outline-variant ml-3" />}
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image Area */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-full border-2 border-gold/20 animate-[gold-pulse_3s_ease-in-out_infinite]" />
            <div className="absolute inset-4 rounded-full border border-gold/10" />
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-gold-light/30 to-spice-light/30 overflow-hidden flex items-center justify-center border-4 border-white shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80" 
                alt="Heritage Pickle Jar" 
                className="w-full h-full object-cover animate-float hover:scale-110 transition-transform duration-700" 
              />
            </div>

            {/* Floating badges */}
            <div className="absolute -top-2 right-8 px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-gold/20 animate-[float_4s_ease-in-out_infinite]">
              <span className="text-xs font-bold text-terracotta-deep">No Preservatives</span>
            </div>
            <div className="absolute -bottom-2 left-4 px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-gold/20 animate-[float_5s_ease-in-out_infinite_0.5s]">
              <span className="text-xs font-bold text-gold-dark">Farm Fresh</span>
            </div>
            <div className="absolute top-1/2 -right-4 px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-gold/20 animate-[float_4.5s_ease-in-out_infinite_1s]">
              <span className="text-xs font-bold text-spice-deep">Traditional Recipes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
