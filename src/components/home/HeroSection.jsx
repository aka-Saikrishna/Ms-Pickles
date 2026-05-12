import { Link } from 'react-router-dom';
import { useScrollReveal, useParallax } from '../../hooks/useScrollReveal';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const [parallaxRef, offset] = useParallax(0.3);

  return (
    <section ref={parallaxRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1920&q=80")',
            transform: `scale(1.1) translateY(${offset * 0.15}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Sparkles size={14} className="text-white" />
            <span className="text-xs font-semibold text-white tracking-wider uppercase">Handcrafted with Love</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Authentic <span className="text-amber-400">Flavors</span>,
            <br />
            Straight From <span className="text-orange-300">The Kitchen</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
            Traditional Andhra-style pickles handcrafted with farm-fresh ingredients,
            time-honored recipes, and zero preservatives. Taste the heritage in every jar.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Link to="/shop" className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 text-gray-900 font-semibold rounded-full text-base hover:bg-amber-300 transition-all duration-300 group">
              Explore Our Collection
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full text-base hover:bg-white/10 transition-all duration-300">
              Our Story
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-8">
            {[
              { value: '20+', label: 'Pickle Varieties' },
              { value: '80K+', label: 'Happy Families' },
              { value: '4.3', label: 'Rated Stars' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="font-serif text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-sm text-white/70 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
