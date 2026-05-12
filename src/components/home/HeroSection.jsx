import { Link } from 'react-router-dom';
import { useScrollReveal, useParallax } from '../../hooks/useScrollReveal';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [parallaxRef, offset] = useParallax(0.6);

  return (
    <section ref={parallaxRef} className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/heroBg.png" 
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            transform: `scale(1.05) translateY(${offset * 0.1}px)`,
            transition: 'transform 0.05s linear'
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 pt-24 pb-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-5">
            {/* Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-2xl"
            >
              Authentic <span className="text-amber-300">Flavors</span>, Straight From <span className="text-orange-200">The Kitchen</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-white leading-relaxed max-w-2xl font-semibold drop-shadow-lg"
            >
              Traditional Andhra-style pickles handcrafted with farm-fresh ingredients,
              time-honored recipes, and zero preservatives. Taste the heritage in every jar.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2 sm:gap-3"
            >
              <Link to="/shop" className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-amber-400 text-gray-900 font-semibold rounded-full text-sm hover:bg-amber-300 transition-all duration-300 group">
                Explore Our Collection
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-white text-white font-bold rounded-full text-sm hover:bg-white/10 transition-all duration-300 drop-shadow-lg">
                Our Story
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 sm:gap-6 items-center pt-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-white drop-shadow-2xl">20+</span>
                <span className="text-sm font-semibold text-white/90 drop-shadow-lg">Pickle Varieties</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-white drop-shadow-2xl">80K+</span>
                <span className="text-sm font-semibold text-white/90 drop-shadow-lg">Happy Families</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-white drop-shadow-2xl">4.3</span>
                <span className="text-sm font-semibold text-white/90 drop-shadow-lg">Rated Stars</span>
              </div>
            </motion.div>
          </div>

          {/* Right Image (hidden on mobile/tablet) */}
          <div className="hidden lg:flex relative items-center justify-center">
            {/* Animated Pickle Jar */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
              className="relative"
            >
              {/* Decorative rings */}
              <div className="absolute -inset-8 border-2 border-amber-400/30 rounded-full animate-pulse" />
              <div className="absolute -inset-16 border border-amber-400/20 rounded-full" />
              
              {/* Main image */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
                <img 
                  src="/images/single jar.png" 
                  alt="Pickle Jar"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg"
              >
                <span className="text-sm font-bold text-amber-600">No Preservatives</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg"
              >
                <span className="text-sm font-bold text-amber-600">Farm Fresh</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
