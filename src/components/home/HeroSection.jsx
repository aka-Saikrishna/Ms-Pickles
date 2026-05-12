import { Link } from 'react-router-dom';
import { useScrollReveal, useParallax } from '../../hooks/useScrollReveal';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [parallaxRef, offset] = useParallax(0.6);

  return (
    <section ref={parallaxRef} className="relative h-screen flex items-center overflow-hidden bg-[#0f172a]">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/heroBg.png")',
            transform: `scale(1.05) translateY(${offset * 0.1}px)`,
            transition: 'transform 0.05s linear'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Heading */}
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight"
            >
              Where Cravings
              <br />
              Meet Their Perfect
              <br />
              <span className="text-amber-300">Match</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-gray-300 leading-relaxed max-w-md"
            >
              Traditional Andhra-style pickles handcrafted with farm-fresh ingredients,
              time-honored recipes, and zero preservatives. Taste the heritage in every jar.
            </motion.p>

            {/* Button */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Link to="/shop" className="inline-flex items-center gap-3 px-6 py-3 border-2 border-amber-300 text-amber-300 font-serif rounded-sm hover:bg-amber-300 hover:text-gray-900 transition-all duration-300">
                Explore Our Collection
                <ChevronRight size={18} />
              </Link>
            </motion.div>

            {/* Rating */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex items-center gap-3 text-gray-400"
            >
              <span className="text-2xl font-serif">4.8/5</span>
              <div className="flex gap-1 text-amber-300">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
              </div>
              <span className="font-sans text-sm">Average Rating</span>
            </motion.div>
          </div>

          {/* Right Side - Pickle Jar & Floating Leaves */}
          <div className="relative">
            {/* Floating Leaves */}
            {[
              { top: '10%', right: '5%', delay: 0, rotate: -15 },
              { top: '30%', right: '15%', delay: 0.2, rotate: 20 },
              { top: '70%', right: '10%', delay: 0.4, rotate: -10 },
              { top: '80%', right: '25%', delay: 0.6, rotate: 15 }
            ].map((leaf, i) => (
              <motion.img
                key={i}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Cellipse cx='50' cy='30' rx='40' ry='20' fill='%234ade80' opacity='0.8'/%3E%3Cpath d='M50 30 L50 5' stroke='%2316a34a' stroke-width='2' fill='none'/%3E%3C/svg%3E"
                alt="Floating Leaf"
                className="absolute w-20 h-12 object-contain"
                style={{ top: leaf.top, right: leaf.right, transform: `rotate(${leaf.rotate}deg)` }}
                initial={{ opacity: 0, x: 100, y: 50 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  y: [0, -20, 0], 
                  rotate: [leaf.rotate, leaf.rotate + 5, leaf.rotate]
                }}
                transition={{ 
                  duration: 1, 
                  delay: leaf.delay,
                  y: { 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  },
                  rotate: { 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }
                }}
              />
            ))}

            {/* Pickle Jar */}
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              {/* Decorative rings */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-amber-300/30 rounded-full scale-110" />
              <div className="absolute -top-8 -left-8 w-full h-full border border-amber-300/20 rounded-full scale-125" />
              
              <img 
                src="/images/single jar.png" 
                alt="Premium Pickle Jar"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
