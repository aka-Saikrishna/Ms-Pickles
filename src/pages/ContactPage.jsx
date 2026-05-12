import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ContactPage() {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <div className="bg-surface min-h-screen pt-32 pb-24" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="text-center mb-20 space-y-4">
          <span className="label-gold">Get In Touch</span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-on-surface">
            We'd Love to <span className="text-gold-dark">Hear From You</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            Have questions about our pickles, bulk orders, or international shipping? Reach out and our team will get back to you promptly.
          </p>
        </div>

        <div className={`grid lg:grid-cols-[1fr_420px] gap-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Contact Form */}
          <div className="glass-card p-10 space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <MessageSquare size={24} className="text-gold-dark" />
              <h2 className="font-serif text-2xl font-bold text-on-surface">Send Us a Message</h2>
            </div>

            <form onSubmit={e => e.preventDefault()} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Full Name</label>
                  <input type="text" className="input-field" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Email Address</label>
                  <input type="email" className="input-field" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Phone Number</label>
                <input type="tel" className="input-field" placeholder="+91 00000 00000" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Subject</label>
                <select className="input-field">
                  <option>General Inquiry</option>
                  <option>Bulk/Wholesale Order</option>
                  <option>International Shipping</option>
                  <option>Product Quality Issue</option>
                  <option>Partnership/Collaboration</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Message</label>
                <textarea rows="5" className="input-field resize-none" placeholder="Tell us how we can help..." />
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 py-4 bg-gold text-charcoal font-bold rounded-lg text-base hover:shadow-gold-glow transition-all">
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {[
              { icon: Phone, title: 'Call / WhatsApp', value: '+91 8074638357', link: 'tel:+918074638357', desc: 'Mon - Sat, 9AM - 7PM IST' },
              { icon: Mail, title: 'Email Us', value: 'info@mshomemadepickles.com', link: 'mailto:info@mshomemadepickles.com', desc: 'We respond within 24 hours' },
              { icon: MapPin, title: 'Location', value: 'Andhra Pradesh, India', link: null, desc: 'Home kitchen based operations' },
              { icon: Clock, title: 'Business Hours', value: 'Mon - Sat: 9AM - 7PM', link: null, desc: 'Sunday closed for preparation' },
            ].map((info, i) => (
              <div key={i} className="flex gap-5 p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-outline-variant/30 hover:border-gold/30 hover:shadow-sunlight transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gold-light/30 flex items-center justify-center shrink-0">
                  <info.icon size={22} className="text-gold-dark" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="font-serif text-lg font-bold text-on-surface hover:text-gold-dark transition-colors">{info.value}</a>
                  ) : (
                    <p className="font-serif text-lg font-bold text-on-surface">{info.value}</p>
                  )}
                  <p className="text-xs text-on-surface-variant">{info.desc}</p>
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918074638357"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full p-6 rounded-2xl bg-veg text-white text-center hover:shadow-lg transition-all"
            >
              <p className="font-bold text-lg mb-1">Quick Order via WhatsApp</p>
              <p className="text-sm text-white/80">Tap to chat with us directly</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
