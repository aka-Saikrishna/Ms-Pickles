import { useScrollReveal, useParallax } from '../../hooks/useScrollReveal';
import { motion } from 'framer-motion';

export default function RecipeIdeas() {
  const [ref, visible] = useScrollReveal(0.1);
  const [pRef, offset] = useParallax(0.5);

  const recipes = [
    { 
      title: 'Perfect with Hot Rice', 
      desc: 'Mix a spoonful of pickle with steaming hot rice and a dash of ghee. The heat releases the rich aroma of spices.',
      icon: '🍚',
      color: 'from-amber-500 to-orange-500'
    },
    { 
      title: 'Side with Dosa & Idli', 
      desc: 'Pair our tangy pickles as a side with crispy dosas or soft idlis. The burst of spice elevates your breakfast.',
      icon: '🥞',
      color: 'from-orange-500 to-red-500'
    },
    { 
      title: 'Spread on Roti & Paratha', 
      desc: 'Spread a thin layer of our gongura or mango pickle on warm roti or paratha for a flavour-packed meal.',
      icon: '🫓',
      color: 'from-red-500 to-rose-500'
    },
    { 
      title: 'Flavour Boost for Curries', 
      desc: 'Add a spoonful of our pickle to dals, gravies, or stir-fries for an instant depth of flavour.',
      icon: '🍲',
      color: 'from-rose-500 to-pink-500'
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-surface to-surface-container relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="label-gold"
          >
            Serving Suggestions
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-4xl md:text-6xl font-extrabold text-on-surface mt-4"
          >
            One Pickle, <span className="text-gold-dark">Endless Possibilities</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-on-surface-variant text-lg mt-4 max-w-2xl mx-auto"
          >
            Our pickles aren't just sides — they're versatile culinary companions
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Side */}
          <div className="relative" ref={pRef}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={visible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main Image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/heroBg.png" 
                  alt="Pickle Serving Ideas"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 z-20 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="text-4xl">🌶️</div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 z-20 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="text-4xl">🥭</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Recipe Cards */}
          <div className="space-y-4">
            {recipes.map((recipe, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={visible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                whileHover={{ x: -8, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${recipe.color}`} />
                <div className="pl-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                      {recipe.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-sans text-xl font-extrabold text-on-surface group-hover:text-gold-dark transition-colors">
                        {recipe.title}
                      </h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed mt-1">
                        {recipe.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
