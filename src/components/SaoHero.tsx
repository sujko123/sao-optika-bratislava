const SaoHero = () => {
  return (
    <section className="flex flex-col items-center justify-center pt-16 pb-8 md:pt-24 md:pb-12 px-4">
      <div className="flex items-center justify-center -space-x-8 md:-space-x-12">
        {['S', 'A', 'O'].map((letter) => (
          <div
            key={letter}
            className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full bg-sao-pink flex items-center justify-center"
          >
            <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-foreground">
              {letter}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SaoHero;
