import headingSao from '@/assets/heading-sao.png';

const SaoHero = () => {
  return (
    <section className="flex flex-col items-center justify-center pt-16 pb-8 md:pt-24 md:pb-12 px-4">
      <img
        src={headingSao}
        alt="SAO"
        className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-[650px] h-auto"
        width={1200}
        height={512}
      />
    </section>
  );
};

export default SaoHero;
