import { Link } from 'react-router-dom';
import { useScrollReveal, useParallax } from '../../hooks/useScrollReveal';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [parallaxRef, offset] = useParallax(0.6);

  const leafVariants = {
    float: {
      y: [0, -20, 0],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section ref={parallaxRef} className="relative h-screen flex items-center overflow-hidden bg-[#121212]">
      {/* SVG Background Animations - Floating Leaves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.svg 
          className="absolute top-20 right-20 w-24 h-24 text-green-700/30"
          variants={leafVariants}
          animate="float"
          style={{ animationDelay: '0s' }}
          viewBox="0 0 100 100"
        >
          <path d="M50 10 C70 20 85 40 80 60 C75 80 55 90 50 95 C45 90 25 80 20 60 C15 40 30 20 50 10 Z" fill="currentColor" />
          <path d="M50 20 L50 90" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M50 40 L30 30" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M50 55 L70 45" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M50 70 L35 65" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </motion.svg>

        <motion.svg 
          className="absolute top-1/2 right-40 w-32 h-32 text-green-700/25"
          variants={leafVariants}
          animate="float"
          style={{ animationDelay: '1s' }}
          viewBox="0 0 100 100"
        >
          <path d="M50 10 C70 20 85 40 80 60 C75 80 55 90 50 95 C45 90 25 80 20 60 C15 40 30 20 50 10 Z" fill="currentColor" />
          <path d="M50 20 L50 90" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M50 40 L30 30" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M50 55 L70 45" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M50 70 L35 65" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </motion.svg>

        <motion.svg 
          className="absolute bottom-20 right-20 w-28 h-28 text-green-700/35"
          variants={leafVariants}
          animate="float"
          style={{ animationDelay: '2s' }}
          viewBox="0 0 100 100"
        >
          <path d="M50 10 C70 20 85 40 80 60 C75 80 55 90 50 95 C45 90 25 80 20 60 C15 40 30 20 50 10 Z" fill="currentColor" />
          <path d="M50 20 L50 90" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M50 40 L30 30" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M50 55 L70 45" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M50 70 L35 65" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </motion.svg>

        <motion.svg 
          className="absolute top-1/3 left-10 w-20 h-20 text-green-700/20"
          variants={leafVariants}
          animate="float"
          style={{ animationDelay: '1.5s' }}
          viewBox="0 0 100 100"
        >
          <path d="M50 10 C70 20 85 40 80 60 C75 80 55 90 50 95 C45 90 25 80 20 60 C15 40 30 20 50 10 Z" fill="currentColor" />
          <path d="M50 20 L50 90" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M50 40 L30 30" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M50 55 L70 45" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M50 70 L35 65" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </motion.svg>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 md:px-8 pt-24 pb-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-tight"
            >
              Where Cravings <br />
              Meet Their Perfect <br />
              Match
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm md:text-base text-white/80 leading-relaxed max-w-md font-light"
            >
              Discover bold flavors and unforgettable dishes in a place where every craving is satisfied with the perfect bite, crafted just for you.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <Link to="/shop" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-amber-400 text-white font-normal rounded-none hover:bg-amber-400 hover:text-gray-900 transition-all duration-300">
                BOOK YOUR TABLE
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-6 pt-4"
            >
              <span className="text-2xl font-serif text-white/70">4.8/5</span>
              <div className="flex gap-1 text-amber-400">
                {[1,2,3,4].map(i => (
                  <span key={i}>★</span>
                ))}
                <span className="text-white/30">☆</span>
              </div>
              <span className="text-sm text-white/60 font-light">Average Rating</span>
            </motion.div>
          </div>

          {/* Right Content - Single Pickle Jar */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <img 
              src="/images/single jar.png" 
              alt="Pickle Jar"
              className="w-full max-w-md lg:max-w-lg h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
