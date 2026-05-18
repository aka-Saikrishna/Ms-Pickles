// MS Homemade Pickles — Full Product Catalog
// Extracted from menu.webp

export const categories = [
  { id: 'veg', name: 'Veg Pickles', description: 'Traditional vegetarian pickles made with farm-fresh ingredients' },
  { id: 'nonveg', name: 'Non-Veg Pickles', description: 'Authentic Andhra-style meat and seafood pickles' },
  { id: 'special', name: 'Special Items', description: 'Signature Gongura-infused specialty pickles' },
  { id: 'powders', name: 'Powders & Podis', description: 'Handcrafted spice blends and karam powders' },
  { id: 'sweets', name: 'Sweets', description: 'Traditional Andhra sweets and festival delights' },
  { id: 'hots', name: "Hot's & Savories", description: 'Spicy savories, murukulu and home-style hot snacks' },
];

export const products = [
  // ── Veg Pickles ──
  { id: 'tomato-pickle', name: 'Tomato Pickle', category: 'veg', tagline: 'Tangy & Bold', description: 'Sun-ripened tomatoes slow-cooked with traditional Andhra spices. Perfect with hot rice and ghee.', prices: { '250g': 199, '500g': 349, '1kg': 599 }, spiceLevel: 3, isVeg: true, tags: ['HAND-MADE', 'NO PRESERVATIVES'], inStock: true, preferences: ['With Garlic', 'Without Garlic'], image: '/images/tomato-pickle.jpg' },
  { id: 'gongura-pickle', name: 'Gongura Pickle', category: 'veg', tagline: 'The Andhra Classic', description: 'Tangy sorrel leaves ground with aromatic spices. The crown jewel of Andhra pickles.', prices: { '250g': 229, '500g': 399, '1kg': 699 }, spiceLevel: 4, isVeg: true, tags: ['HAND-MADE', 'BESTSELLER'], inStock: true, preferences: ['With Garlic', 'Without Garlic'], image: '/images/gongura-pickle.jpg' },
  { id: 'lemon-pickle', name: 'Lemon Pickle', category: 'veg', tagline: 'Citrus Burst', description: 'Fresh lemons aged in mustard oil and spices for that perfect tang.', prices: { '250g': 179, '500g': 299, '1kg': 499 }, spiceLevel: 2, isVeg: true, tags: ['HAND-MADE', 'NO PRESERVATIVES'], inStock: true, preferences: ['Mild', 'Spicy'], image: '/images/lemon-pickle.jpg' },
  { id: 'pudina-pickle', name: 'Pudina Pickle', category: 'veg', tagline: 'Fresh & Fragrant', description: 'Farm-fresh mint leaves blended with green chilies and aromatic spices.', prices: { '250g': 199, '500g': 349, '1kg': 599 }, spiceLevel: 3, isVeg: true, tags: ['HAND-MADE'], inStock: true, preferences: [], image: '/images/pudina-pickle.jpg' },
  { id: 'kothimir-pickle', name: 'Kothimir Pickle', category: 'veg', tagline: 'Herb Infused', description: 'Coriander leaves pickle with a unique blend of traditional spices.', prices: { '250g': 199, '500g': 349, '1kg': 599 }, spiceLevel: 2, isVeg: true, tags: ['HAND-MADE'], inStock: true, preferences: [], image: '/images/kothimir-pickle.jpg' },
  { id: 'kakarkai-pickle', name: 'Kakarkai Pickle', category: 'veg', tagline: 'Bitter-Sweet Delight', description: 'Bitter gourd transformed into a delightful pickle with the right spice balance.', prices: { '250g': 199, '500g': 349, '1kg': 599 }, spiceLevel: 3, isVeg: true, tags: ['HAND-MADE'], inStock: true, preferences: ['With Garlic', 'Without Garlic'], image: '/images/kakarkai-pickle.jpg' },
  { id: 'ginger-pickle', name: 'Ginger Pickle', category: 'veg', tagline: 'Warming Zest', description: 'Fresh ginger root pickled with mustard seeds and red chili for a warming kick.', prices: { '250g': 219, '500g': 379, '1kg': 649 }, spiceLevel: 3, isVeg: true, tags: ['HAND-MADE'], inStock: true, preferences: [], image: '/images/ginger-pickle.jpg' },
  { id: 'amla-pickle', name: 'Amla Pickle', category: 'veg', tagline: 'Vitamin C Rich', description: 'Indian gooseberry pickle packed with natural goodness and tangy flavor.', prices: { '250g': 199, '500g': 349, '1kg': 599 }, spiceLevel: 2, isVeg: true, tags: ['HAND-MADE', 'HEALTHY'], inStock: true, preferences: [], image: '/images/amla-pickle.jpg' },
  { id: 'drumstick-pickle', name: 'Drumstick Pickle', category: 'veg', tagline: 'Unique & Nutritious', description: 'Tender drumstick pieces infused with aromatic south Indian spices.', prices: { '250g': 229, '500g': 399, '1kg': 699 }, spiceLevel: 3, isVeg: true, tags: ['HAND-MADE'], inStock: true, preferences: [], image: '/images/drumstick-pickle.jpg' },
  { id: 'chinthakai-pickle', name: 'Chinthakai Pickle', category: 'veg', tagline: 'Tamarind Temptation', description: 'Raw tamarind pickle with a perfect balance of sour, spice and oil.', prices: { '250g': 199, '500g': 349, '1kg': 599 }, spiceLevel: 3, isVeg: true, tags: ['HAND-MADE', 'NO PRESERVATIVES'], inStock: true, preferences: [], image: '/images/chinthakai-pickle.jpg' },

  // ── Non-Veg Pickles ──
  { id: 'chicken-bone-pickle', name: 'Chicken Bone Pickle', category: 'nonveg', tagline: 'Bone-In Goodness', description: 'Tender chicken on the bone, marinated and cooked in traditional Andhra spice paste.', prices: { '250g': 349, '500g': 599, '1kg': 999 }, spiceLevel: 4, isVeg: false, tags: ['HAND-MADE', 'BESTSELLER'], inStock: true, preferences: ['With Gongura', 'Without Gongura'], image: '/images/chicken-bone.jpg' },
  { id: 'chicken-boneless-pickle', name: 'Chicken Boneless Pickle', category: 'nonveg', tagline: 'Premium Boneless', description: 'Succulent boneless chicken pieces in rich, aromatic pickle masala.', prices: { '250g': 379, '500g': 649, '1kg': 1099 }, spiceLevel: 4, isVeg: false, tags: ['HAND-MADE', 'BESTSELLER'], inStock: true, preferences: ['With Gongura', 'Without Gongura'], image: '/images/chicken-boneless.jpg' },
  { id: 'chicken-tokku-pickle', name: 'Chicken Tokku Pickle', category: 'nonveg', tagline: 'Slow Cooked', description: 'Slow-simmered chicken tokku with concentrated spices and sesame oil.', prices: { '250g': 349, '500g': 599, '1kg': 999 }, spiceLevel: 4, isVeg: false, tags: ['HAND-MADE'], inStock: true, preferences: [], image: '/images/chicken-tokku.jpg' },
  { id: 'mutton-bone-pickle', name: 'Mutton Bone Pickle', category: 'nonveg', tagline: 'Rich & Robust', description: 'Premium mutton on the bone pickled in a robust Andhra masala blend.', prices: { '250g': 449, '500g': 799, '1kg': 1399 }, spiceLevel: 4, isVeg: false, tags: ['HAND-MADE', 'PREMIUM'], inStock: true, preferences: ['With Gongura', 'Without Gongura'], image: '/images/mutton-bone.jpg' },
  { id: 'mutton-boneless-pickle', name: 'Mutton Boneless Pickle', category: 'nonveg', tagline: 'Tender & Spiced', description: 'Select boneless mutton cuts in a fiery, heritage-recipe pickle.', prices: { '250g': 499, '500g': 899, '1kg': 1599 }, spiceLevel: 5, isVeg: false, tags: ['HAND-MADE', 'PREMIUM'], inStock: true, preferences: ['With Gongura', 'Without Gongura'], image: '/images/mutton-boneless.jpg' },
  { id: 'mutton-keema-pickle', name: 'Mutton Keema Pickle', category: 'nonveg', tagline: 'Minced Perfection', description: 'Finely minced premium mutton cooked with robust spices for a rich, textured pickle.', prices: { '250g': 499, '500g': 899, '1kg': 1599 }, spiceLevel: 5, isVeg: false, tags: ['HAND-MADE', 'PREMIUM'], inStock: true, preferences: [], image: '/images/mutton-keema.jpg' },
  { id: 'boti-pickle', name: 'Boti Pickle', category: 'nonveg', tagline: 'Offal Delicacy', description: 'Traditional boti (organ meat) pickle, a rare Andhra delicacy.', prices: { '250g': 349, '500g': 599, '1kg': 999 }, spiceLevel: 4, isVeg: false, tags: ['HAND-MADE'], inStock: true, preferences: [], image: '/images/boti.jpg' },
  { id: 'fish-pickle', name: 'Fish (Koramen) Pickle', category: 'nonveg', tagline: 'Coastal Flavor', description: 'Fresh Koramen fish marinated and pickled with coastal spice blend.', prices: { '250g': 379, '500g': 649, '1kg': 1099 }, spiceLevel: 3, isVeg: false, tags: ['HAND-MADE'], inStock: true, preferences: [], image: '/images/fish-pickle.jpg' },
  { id: 'prawns-pickle', name: 'Prawns Pickle', category: 'nonveg', tagline: 'Sea to Jar', description: 'Plump prawns cooked in tangy, spicy pickle masala with sesame oil.', prices: { '250g': 449, '500g': 799, '1kg': 1399 }, spiceLevel: 3, isVeg: false, tags: ['HAND-MADE', 'PREMIUM'], inStock: true, preferences: [], image: '/images/prawns.jpg' },

  // ── Special Items (Now in Non-Veg) ──
  { id: 'gongura-chicken', name: 'Gongura Chicken Pickle', category: 'nonveg', tagline: 'Signature Fusion', description: 'The ultimate fusion: tangy gongura meets succulent chicken in our signature recipe.', prices: { '250g': 399, '500g': 699, '1kg': 1199 }, spiceLevel: 4, isVeg: false, tags: ['HAND-MADE', 'SIGNATURE'], inStock: true, preferences: [], image: '/images/gongura-chicken.jpg' },
  { id: 'gongura-mutton', name: 'Gongura Mutton Pickle', category: 'nonveg', tagline: 'Heritage Special', description: 'Premium mutton enriched with tangy gongura leaves in a unique heritage recipe.', prices: { '250g': 499, '500g': 899, '1kg': 1599 }, spiceLevel: 5, isVeg: false, tags: ['HAND-MADE', 'SIGNATURE'], inStock: true, preferences: [], image: '/images/gongura-mutton.jpg' },
  { id: 'gongura-prawns', name: 'Gongura Prawns Pickle', category: 'nonveg', tagline: 'Coastal Heritage', description: 'Fresh prawns married with tangy gongura for a coastal Andhra masterpiece.', prices: { '250g': 499, '500g': 899, '1kg': 1599 }, spiceLevel: 4, isVeg: false, tags: ['HAND-MADE', 'SIGNATURE'], inStock: true, preferences: [], image: '/images/gongura-prawns.jpg' },
  { id: 'gongura-boti', name: 'Gongura Boti Pickle', category: 'nonveg', tagline: 'Bold & Tangy', description: 'Tender boti complemented by the sour punch of fresh gongura leaves.', prices: { '250g': 399, '500g': 699, '1kg': 1199 }, spiceLevel: 4, isVeg: false, tags: ['HAND-MADE', 'SIGNATURE'], inStock: true, preferences: [], image: '/images/gongura-boti.jpg' },

  // ── Powders ──
  { id: 'munagaku-podi', name: 'Munagaku Podi', category: 'powders', tagline: 'Drumstick Leaf Powder', description: 'Nutrient-rich moringa leaf powder, dry roasted with lentils and spices.', prices: { '100g': 149, '250g': 299, '500g': 499 }, spiceLevel: 2, isVeg: true, tags: ['HAND-MADE', 'HEALTHY'], inStock: true, preferences: [], image: '/images/munagaku-podi.jpg' },
  { id: 'karevepaku-podi', name: 'Karevepaku Podi', category: 'powders', tagline: 'Curry Leaf Magic', description: 'Aromatic curry leaf powder blended with urad dal and dried red chilies.', prices: { '100g': 129, '250g': 249, '500g': 449 }, spiceLevel: 3, isVeg: true, tags: ['HAND-MADE', 'AROMATIC'], inStock: true, preferences: [], image: '/images/karevepaku-podi.jpg' },
  { id: 'kakarkai-podi', name: 'Kakarkai Podi', category: 'powders', tagline: 'Bitter Gourd Spice', description: 'Dried bitter gourd powder with a balanced spice blend. Great with rice and ghee.', prices: { '100g': 139, '250g': 269, '500g': 469 }, spiceLevel: 2, isVeg: true, tags: ['HAND-MADE'], inStock: true, preferences: [], image: '/images/kakarkai-podi.jpg' },
  { id: 'palli-podi', name: 'Palli Podi', category: 'powders', tagline: 'Peanut Power', description: 'Roasted peanut powder with red chilies and garlic. A crunchy, nutty delight.', prices: { '100g': 119, '250g': 229, '500g': 399 }, spiceLevel: 2, isVeg: true, tags: ['HAND-MADE', 'BESTSELLER'], inStock: true, preferences: [], image: '/images/palli-podi.jpg' },
  { id: 'vellulli-karam-podi', name: 'Vellulli Karam Podi', category: 'powders', tagline: 'Garlic Heat', description: 'Fiery garlic karam podi, the quintessential Andhra accompaniment.', prices: { '250g': 199, '500g': 349 }, spiceLevel: 5, isVeg: true, tags: ['HAND-MADE', 'FIERY'], inStock: true, preferences: [], image: '/images/vellulli-karam-podi.jpg' },
];

export const testimonials = [
  { id: 1, name: 'Madhavi Villuri', location: 'Verified Buyer', rating: 5, text: 'Really awesome and tasty, no words to say that much super, amma pachidi laga undi 😍' },
  { id: 2, name: 'Suresh P', location: 'Bangalore', rating: 5, text: 'We received order just now. Chicken pickle taste is awesome. Super packing. No leakage. We are from Bangalore. Thank you Babai.' },
  { id: 3, name: 'Divya Sarika', location: 'Verified Buyer', rating: 5, text: 'Really, the pickle taste was awesome. Fresh and full of authentic flavour!' },
  { id: 4, name: 'Ravi Sankarnagaraja S', location: 'Verified Buyer', rating: 5, text: 'Excellent taste of Andhra pickles. Especially the vegetable pickle is very tasty.' },
  { id: 5, name: 'Priya Reddy', location: 'Hyderabad', rating: 5, text: 'Authentic & perfectly balanced. The veg mixed pickle is very tasty and well-balanced. The vegetables are fresh, spices are perfect, and the flavor is authentic. Not too oily or too spicy — just right. Goes very well with rice and curd. Overall, excellent quality and highly satisfying.' },
  { id: 6, name: 'Rajesh Kumar', location: 'Bangalore', rating: 5, text: 'Nothing like this in the market. You would not get this taste from any branded pickles in the market. Totally worth ordering for its authenticity and traditional tastes. The quality is unmatched — feels like homemade pickle from a Telugu kitchen.' },
];

export const faqs = [
  { q: 'Do your pickles contain any preservatives?', a: 'No. All our pickles are made with zero artificial preservatives. We use only traditional ingredients like mustard oil, sesame oil, and natural spices to ensure a long shelf life.' },
  { q: 'What is the shelf life of your pickles?', a: 'Our pickles have a shelf life of 6-8 months when stored properly. Non-veg pickles should be refrigerated after opening and consumed within 3-4 months.' },
  { q: 'Do I need to refrigerate the pickles?', a: 'Veg pickles can be stored at room temperature in a cool, dry place. Non-veg pickles must be refrigerated after opening. Always use a dry spoon.' },
  { q: 'Are your products FSSAI certified?', a: 'Yes, all our products are FSSAI certified. We maintain the highest standards of food safety and hygiene in our production process.' },
  { q: 'What oils do you use?', a: 'We primarily use cold-pressed sesame oil (nuvvula nune) and mustard oil. These traditional oils enhance flavor and act as natural preservatives.' },
  { q: 'Do you offer international shipping?', a: 'Yes! We provide international delivery with international packaging standards. Shipping charges and delivery times vary by destination.' },
  { q: 'Can I return or get a refund?', a: 'Due to the perishable nature of our products, we do not accept returns. However, if there is a quality issue, we will process a full refund within 48 hours of your complaint.' },
  { q: 'Do you offer bulk/wholesale orders?', a: 'Yes, we offer bulk and wholesale pricing for restaurants, retailers, and events. Please contact us via WhatsApp at +91 8074638357 for custom quotes.' },
];

export function getProductById(id) {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(categoryId) {
  return products.filter(p => p.category === categoryId);
}

export function getBestsellers() {
  return products.filter(p => p.tags.includes('BESTSELLER'));
}

export function getSpecialItems() {
  return products.filter(p => p.category === 'special');
}
