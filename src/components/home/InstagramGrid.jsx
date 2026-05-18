import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function InstagramGrid() {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <section className="py-16 bg-surface-lowest relative overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
        <div className={`glass-card p-6 md:p-14 border border-gold/25 bg-surface/50 text-center space-y-6 transition-all duration-700 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="space-y-2">
            <span className="label-gold">Social Community</span>
            <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-on-surface">
              Join our <span className="text-gold-dark">Family</span>
            </h2>
          </div>
          <p className="text-xs md:text-base text-on-surface-variant max-w-xl mx-auto leading-relaxed px-2">
            Follow us on Instagram to see behind-the-scenes highlights of our hygienic kitchen, 
            get exclusive subscriber discount codes, and share in our home-style cooking stories!
          </p>
          <div className="pt-2 flex justify-center">
            <a
              href="https://instagram.com/ms_homemade_pickles"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-xs md:text-sm py-3 px-6 md:px-8 w-full sm:w-auto max-w-[280px] sm:max-w-none shadow-gold-glow hover:scale-105 transition-transform duration-200"
            >
              Follow @ms_homemade_pickles
            </a>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-y-2.5 sm:gap-x-6 text-[10px] md:text-xs font-bold text-on-surface-variant/80 tracking-wider">
            <span>Kitchen Highlights</span>
            <span className="hidden sm:inline text-gold">•</span>
            <span>Exclusive Discounts</span>
            <span className="hidden sm:inline text-gold">•</span>
            <span>Customer Stories</span>
          </div>
        </div>
      </div>
      
      {/* Sleek background design accents */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gold-light/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-terracotta-light/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
