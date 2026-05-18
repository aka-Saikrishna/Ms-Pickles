import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-screen min-h-[80vh] flex items-center justify-center overflow-hidden bg-surface pt-32 pb-24">
      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 max-w-4xl mx-auto overflow-hidden text-center">
        <div className="space-y-8 flex flex-col items-center">
          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight"
          >
            Authentic <span className="text-amber-600">Flavors</span>, Straight From <span className="text-orange-600">The Kitchen</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl font-medium"
          >
            Traditional Andhra-style pickles handcrafted with farm-fresh ingredients,
            time-honored recipes, and zero preservatives. Taste the heritage in every jar.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <Link to="/shop" className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 text-gray-900 font-bold rounded-full text-base hover:bg-amber-500 transition-all duration-300 shadow-md group">
              Explore Our Collection
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-900 text-gray-900 font-bold rounded-full text-base hover:bg-gray-100 transition-all duration-300">
              Our Story
            </Link>
          </motion.div>


        </div>
      </div>
    </section>
  );
}
