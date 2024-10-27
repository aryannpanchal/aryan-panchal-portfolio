
import NavbarSection from './../components/Navbar';
import HeroSection from './../components/Hero';
import Stats from './../components/Stats';
import Offer from './../components/Offer';
import Testimonials from './../components/Testimonials';
import Footer from './../components/Footer';
import About from './../components/About';
import Companies from '@/components/Companies';
import { MarqueeSection } from '@/components/MarqueeSection';
import Work from '@/components/Work';

export default function Home() {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <About />
      <MarqueeSection />
      <Stats />
      <Companies />
      <Work />
      <Offer />
      <Testimonials />
      <Footer />
    </>
  );
}
