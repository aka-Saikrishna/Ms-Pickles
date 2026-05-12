import { useScrollReveal } from '../../hooks/useScrollReveal';

const IconInstagram = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export default function InstagramGrid() {
  const [ref, visible] = useScrollReveal(0.1);

  const instaImages = [
    { url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80', w: 1, h: 1 },
    { url: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80', w: 1, h: 2 },
    { url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80', w: 1, h: 1 },
    { url: 'https://images.unsplash.com/photo-1590779033100-9f60705a2f3b?w=400&q=80', w: 2, h: 1 },
    { url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80', w: 1, h: 1 },
    { url: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400&q=80', w: 1, h: 1 },
    { url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80', w: 1, h: 1 },
    { url: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80', w: 1, h: 1 },
  ];

  return (
    <section className="py-24 bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <div className="text-center md:text-left space-y-3">
            <span className="label-gold">Social Community</span>
            <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-on-surface">
              Join our <span className="text-gold-dark">Family</span>
            </h2>
          </div>
          <a
            href="https://instagram.com/ms_homemade_pickles"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary group"
          >
            <IconInstagram size={20} className="mr-2" />
            @ms_homemade_pickles
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {instaImages.map((item, i) => (
            <div
              key={i}
              className={`relative rounded-xl overflow-hidden group transition-all duration-700 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ 
                transitionDelay: `${i * 100}ms`,
                gridColumn: `span ${item.w}`,
                gridRow: `span ${item.h}`
              }}
            >
              {/* Background Image */}
              <img 
                src={item.url} 
                alt="Instagram post"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-50 group-hover:scale-100 transition-transform duration-300">
                  <IconInstagram size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
