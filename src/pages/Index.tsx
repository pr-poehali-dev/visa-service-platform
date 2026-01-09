import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import VisaCalculator from '@/components/VisaCalculator';
import ContentSections from '@/components/ContentSections';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <VisaCalculator />
      <ContentSections />
    </div>
  );
};

export default Index;