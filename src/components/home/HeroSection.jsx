import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("/images/heroBg.png")'
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="w-full px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
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
                className="text-xs sm:text-sm md:text-base text-white leading-relaxed max-w-sm font-semibold drop-shadow-lg"
              >
                Traditional Andhra-style pickles handcrafted with farm-fresh ingredients,
                time-honored recipes, and zero preservatives. Taste the heritage in every jar.
              </motion.p>

              {/* Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                <Link to="/shop" className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400 text-gray-900 font-semibold rounded-full text-xs sm:text-sm hover:bg-amber-300 transition-all duration-300 group">
                  Explore Our Collection
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/about" className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-white text-white font-semibold rounded-full text-xs sm:text-sm hover:bg-white/10 transition-all duration-300 drop-shadow-lg">
                  Our Story
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center gap-4 sm:gap-6"
              >
                {[
                  { value: '20+', label: 'Pickle Varieties' },
                  { value: '80K+', label: 'Happy Families' },
                  { value: '4.3', label: 'Rated Stars' },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="font-sans text-xl sm:text-2xl font-extrabold text-white drop-shadow-2xl">{stat.value}</span>
                    <span className="text-[10px] sm:text-xs text-white font-semibold drop-shadow-lg">{stat.label}</span>
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
                {/* Pickle Jar */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden flex items-center justify-center border-4 border-white/30 shadow-2xl">
                  <img 
                    src="/images/single jar.png" 
                    alt="Pickle Jar" 
                    className="w-full h-full object-cover"
                  />
                </div>

              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
