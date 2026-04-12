import SaoHero from '@/components/SaoHero';
import SaoNav from '@/components/SaoNav';
import SaoAbout from '@/components/SaoAbout';
import SaoBrands from '@/components/SaoBrands';
import SaoEyeExam from '@/components/SaoEyeExam';
import SaoFooter from '@/components/SaoFooter';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <SaoHero />
      <SaoNav />
      <SaoAbout />
      <SaoBrands />
      <SaoEyeExam />
      <SaoFooter />
    </main>
  );
};

export default Index;
