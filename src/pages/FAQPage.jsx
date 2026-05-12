import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '../data/products';
import { useScrollReveal } from '../hooks/useScrollReveal';

function FAQItem({ faq, isOpen, toggle }) {
  return (
    <div className={`border border-outline-variant/30 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white shadow-md border-gold/20' : 'bg-white/60 hover:bg-white/80'}`}>
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-6 text-left gap-4"
      >
        <h3 className={`font-serif text-lg font-semibold transition-colors ${isOpen ? 'text-gold-dark' : 'text-on-surface'}`}>
          {faq.q}
        </h3>
        <ChevronDown
          size={20}
          className={`shrink-0 text-on-surface-variant transition-transform duration-300 ${isOpen ? 'rotate-180 text-gold-dark' : ''}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="px-6 text-on-surface-variant leading-relaxed text-sm">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <div className="bg-surface min-h-screen pt-32 pb-24" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 md:px-16">
        <div className="text-center mb-16 space-y-4">
          <span className="label-gold">Support</span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-on-surface">
            Frequently Asked <span className="text-gold-dark">Questions</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-xl mx-auto">
            Everything you need to know about our handcrafted pickles, ordering, and shipping.
          </p>
        </div>

        <div className={`space-y-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-16 p-10 rounded-3xl bg-charcoal text-white text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto">
            <HelpCircle size={32} className="text-gold" />
          </div>
          <h2 className="font-serif text-3xl font-bold">Still have questions?</h2>
          <p className="text-white/60 max-w-md mx-auto">
            Our team is ready to help. Reach us via WhatsApp or phone for instant support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/918074638357"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gold text-charcoal font-bold rounded-lg hover:shadow-gold-glow transition-all"
            >
              Chat on WhatsApp
            </a>
            <a href="tel:+918074638357" className="px-8 py-4 border-2 border-gold/40 text-gold font-bold rounded-lg hover:bg-gold/10 transition-all">
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
