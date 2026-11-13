import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutPinnedSection from '../components/home/AboutPinnedSection';
import ShowcaseMarqueeSection from '../components/home/ShowcaseMarqueeSection';
import SelectedWorksSection from '../components/home/SelectedWorksSection';
import ServicesSection from '../components/home/ServicesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FaqSection from '../components/home/FaqSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPinnedSection />
      <ShowcaseMarqueeSection />
      <SelectedWorksSection />
      <ServicesSection />
      <TestimonialsSection />
      <FaqSection />
    </>
  );
}
