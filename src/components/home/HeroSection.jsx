import { Link } from 'react-router-dom';
import { useScrollReveal, useParallax } from '../../hooks/useScrollReveal';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [parallaxRef, offset] = useParallax(0.3);

  return (
    <section ref={parallaxRef} className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1920&q=80")',
            transform: `scale(1.05) translateY(${offset * 0.1}px)`,
            transition: 'transform 0.05s linear'
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 pt-20 pb-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            >
              Authentic <span className="text-amber-400">Flavors</span>,
              <br />
              Straight From <span className="text-orange-300">The Kitchen</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl font-medium"
            >
              Traditional Andhra-style pickles handcrafted with farm-fresh ingredients,
              time-honored recipes, and zero preservatives. Taste the heritage in every jar.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/shop" className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 text-gray-900 font-semibold rounded-full text-base hover:bg-amber-300 transition-all duration-300 group">
                Explore Our Collection
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full text-base hover:bg-white/10 transition-all duration-300">
                Our Story
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-8"
            >
              {[
                { value: '20+', label: 'Pickle Varieties' },
                { value: '80K+', label: 'Happy Families' },
                { value: '4.3', label: 'Rated Stars' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="font-sans text-3xl font-extrabold text-white">{stat.value}</span>
                  <span className="text-sm text-white/80 font-semibold">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Animated Pickle Jar */}
          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5,
                type: "spring",
                stiffness: 50
              }}
              className="relative"
            >
              {/* Decorative rings */}
              <div className="absolute -inset-8 rounded-full border-2 border-amber-400/30 animate-pulse" />
              <div className="absolute -inset-4 rounded-full border border-amber-400/20" />
              
              {/* Pickle Jar */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-amber-100/30 to-orange-100/30 overflow-hidden flex items-center justify-center border-4 border-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" 
                  alt="Pickle Jar" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-amber-400/20"
              >
                <span className="text-xs font-bold text-orange-600">No Preservatives</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-amber-400/20"
              >
                <span className="text-xs font-bold text-amber-600">Farm Fresh</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
