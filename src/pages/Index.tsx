import SaoHero from '@/components/SaoHero';
import SaoNav from '@/components/SaoNav';
import SaoAbout from '@/components/SaoAbout';
import SaoBrands from '@/components/SaoBrands';
import SaoEyeExam from '@/components/SaoEyeExam';
import SaoFooter from '@/components/SaoFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SaoHero />
      <SaoNav />
      <SaoAbout />
      <SaoBrands />
      <SaoEyeExam />
      <SaoFooter />
    </div>
  );
};

export default Index;
