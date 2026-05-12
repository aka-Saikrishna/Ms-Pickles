import { useScrollReveal, useParallax } from '../../hooks/useScrollReveal';

export default function RecipeIdeas() {
  const [ref, visible] = useScrollReveal(0.1);
  const [pRef, offset] = useParallax(0.5);

  const recipes = [
    { title: 'Perfect with Hot Rice', desc: 'Mix a spoonful of pickle with steaming hot rice and a dash of ghee. The heat releases the rich aroma of spices, creating the ultimate comfort meal — a staple in every Andhra household.', accent: 'gold' },
    { title: 'Side with Dosa & Idli', desc: 'Pair our tangy pickles as a side with crispy dosas or soft idlis. The burst of spice elevates your breakfast, adding that authentic Andhra kick to your morning routine.', accent: 'terracotta' },
    { title: 'Spread on Roti & Paratha', desc: 'Spread a thin layer of our gongura or mango pickle on warm roti or paratha for a flavour-packed meal. The tangy, spicy taste turns a simple flatbread into something extraordinary.', accent: 'spice' },
    { title: 'Flavour Boost for Curries', desc: 'Add a spoonful of our pickle to dals, gravies, or stir-fries for an instant depth of flavour. It works as a secret ingredient that transforms everyday cooking into something special.', accent: 'gold' },
  ];

  return (
    <section className="py-24 bg-surface-container relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images Grid */}
          <div className="relative h-[400px] md:h-[500px]" ref={pRef}>
            <div
              className={`absolute top-0 left-0 w-1/2 h-1/2 rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
              style={{ transform: `translateY(${offset * 0.4}px)` }}
            >
              <img 
                src="/images/chicken.jpeg" 
                alt="Chicken Pickle"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`absolute bottom-0 right-0 w-1/2 h-1/2 rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
              style={{ transform: `translateY(${-offset * 0.6}px)` }}
            >
              <img 
                src="/images/recip.png" 
                alt="Pickle Recipe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-10 transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="space-y-4">
              <span className="label-gold">Serving Suggestions</span>
              <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-on-surface">
                One Pickle, <br />
                <span className="text-gold-dark">Multiple Ways</span>
              </h2>
              <p className="text-on-surface-variant text-lg">
                Our pickles aren't just sides; they are versatile culinary companions that transform every meal into a gourmet experience.
              </p>
            </div>

            <div className="space-y-6">
              {recipes.map((recipe, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <span className="font-sans text-xl font-extrabold text-gold-dark">{i + 1}</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-sans text-xl font-extrabold text-on-surface group-hover:text-gold-dark transition-colors">{recipe.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{recipe.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn btn-secondary btn-lg group">
              View More Recipes
              <div className="w-8 h-[1px] bg-gold ml-2 transition-all group-hover:w-12" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
