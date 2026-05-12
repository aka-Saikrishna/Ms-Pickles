import HeroSection from '../components/home/HeroSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import FeaturedCollections from '../components/home/FeaturedCollections';
import BestsellersCarousel from '../components/home/BestsellersCarousel';
import RecipeIdeas from '../components/home/RecipeIdeas';
import Testimonials from '../components/home/Testimonials';
import JourneyTimeline from '../components/home/JourneyTimeline';
import MeetFounder from '../components/home/MeetFounder';
import InstagramGrid from '../components/home/InstagramGrid';
import TrustBadges from '../components/home/TrustBadges';

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <WhyChooseUs />
      <FeaturedCollections />
      <BestsellersCarousel />
      <RecipeIdeas />
      <Testimonials />
      <JourneyTimeline />
      {/* <MeetFounder /> */}
      <InstagramGrid />
      <TrustBadges />
    </div>
  );
}
