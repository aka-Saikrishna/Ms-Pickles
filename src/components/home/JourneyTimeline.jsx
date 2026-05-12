import { useScrollReveal } from '../../hooks/useScrollReveal';

const milestones = [
  { year: '2019', title: 'Born in a Home Kitchen', desc: 'Chef Venkatesh began making pickles the traditional way in his home kitchen — using family recipes passed down through generations of Andhra cooking.' },
  { year: '2021', title: 'YouTube Born', desc: 'The MS Homemade Pickles YouTube channel launched, sharing traditional Andhra cooking in nature. The authentic recipes quickly won hearts, growing to millions of subscribers.' },
  { year: '2023', title: 'From Videos to Jars', desc: 'Fans demanded the authentic pickles they saw being made on the channel. MS Homemade Pickles was born — bringing those exact recipes to your doorstep.' },
  { year: '2025', title: 'Delivering Across India & Beyond', desc: 'Now serving thousands of families with 20+ pickle varieties and even overseas orders — staying true to the same recipes, the same love, every single batch.' },
];

export default function JourneyTimeline() {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <section className="py-24 bg-charcoal text-white grain overflow-hidden" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="space-y-4">
            <span className="label-gold text-gold-light">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
              The Journey of <span className="text-gold">MS Pickles</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-sm text-sm leading-relaxed">
            From humble beginnings to a global heritage brand, our commitment to authenticity has never wavered.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute top-1/2 left-0 w-full h-px bg-white/10 hidden lg:block transition-all duration-1000 origin-left ${visible ? 'scale-x-100' : 'scale-x-0'}`} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {milestones.map((m, i) => (
              <div
                key={i}
                className={`space-y-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="relative">
                  <span className="font-serif text-5xl font-bold text-gold/20 absolute -top-4 -left-2">{i + 1}</span>
                  <div className="relative z-10 space-y-2">
                    <span className="label-gold text-gold-light/60">{m.year}</span>
                    <h3 className="text-xl font-bold font-serif text-white">{m.title}</h3>
                  </div>
                </div>

                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center lg:mx-0">
                  <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                </div>

                <p className="text-sm text-white/50 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
