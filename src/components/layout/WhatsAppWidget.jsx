import { useState, useEffect } from 'react';

// Custom Official Filled WhatsApp SVG Icon with solid green circle & white receiver
const IconWhatsApp = ({ size = 36 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Solid official WhatsApp green speech bubble background */}
    <path 
      fill="#25D366" 
      d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.73.44 3.36 1.2 4.79L2 22l5.35-1.4c1.37.74 2.93 1.17 4.65 1.17 5.52 0 10-4.48 10-10C22.004 6.48 17.52 2 12.004 2z"
    />
    {/* Solid white phone receiver outline & speech bubble tail cutouts */}
    <path 
      fill="#FFF" 
      d="M16.92 14.86c-.25-.12-1.47-.72-1.69-.8-.23-.08-.39-.12-.56.12-.17.25-.66.8-.81.98-.15.17-.3.2-.55.07-1-.5-1.66-.88-2.31-2-1-.87-.8-1.57-.45-1.92.17-.18.35-.4.5-.6.1-.17.15-.3.22-.45.07-.15.03-.28-.02-.38-.05-.1-.45-1.1-.62-1.5-.17-.4-.36-.34-.5-.34h-.42c-.15 0-.39.06-.6.28-.2.22-.78.76-.78 1.85 0 1.09.8 2.15.9 2.3.1.15 1.57 2.41 3.8 3.38 1.86.8 2.24.64 2.64.6.4-.04 1.47-.6 1.67-1.18.2-.58.2-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"
    />
  </svg>
);

export default function WhatsAppWidget() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 2.5 seconds to draw gentle attention
    const timer = setTimeout(() => setShowTooltip(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const phoneNumber = '918074638357';
    const message = encodeURIComponent("Hi! I'm interested in ordering some delicious MS Homemade Pickles. Can you help me?");
    const waUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed z-[999] bottom-20 md:bottom-6 right-6 flex items-center gap-3 select-none">
      {/* Tooltip */}
      {showTooltip && (
        <div 
          onClick={handleClick}
          className="bg-white text-charcoal font-sans text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg border border-gray-100 flex items-center gap-1.5 cursor-pointer animate-fade-in hover:text-green-600 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
          Order & Chat on WhatsApp
        </div>
      )}

      {/* Floating White Circular Container Button */}
      <button
        onClick={handleClick}
        className="relative w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 group border border-gray-150"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing rings around the white button for gentle motion */}
        <span className="absolute inset-0 rounded-full animate-ping group-hover:animate-none opacity-45 pointer-events-none" style={{ backgroundColor: '#25D366' }} />
        <span className="absolute -inset-1 rounded-full animate-pulse group-hover:animate-none opacity-15 pointer-events-none" style={{ backgroundColor: '#25D366' }} />
        
        {/* WhatsApp Official Solid Icon - larger and drop-shadowed for absolute clarity */}
        <div className="relative z-10 flex items-center justify-center hover:rotate-[12deg] transition-transform duration-300">
          <IconWhatsApp size={42} />
        </div>
      </button>
    </div>
  );
}
