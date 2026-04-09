import eyeExamImg from '@/assets/eye-exam.jpg';

const SaoEyeExam = () => {
  return (
    <section id="eye-exam" className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section title with circle letters */}
        <div className="mb-10 flex justify-center">
          <div>
            <div className="flex flex-wrap gap-1 justify-center">
              <span className="w-10 h-10 rounded-full bg-sao-green flex items-center justify-center text-foreground font-semibold text-sm">M</span>
              <span className="w-10 h-10 rounded-full bg-sao-pink flex items-center justify-center text-foreground font-semibold text-sm">E</span>
              <span className="w-10 h-10 rounded-full bg-sao-green flex items-center justify-center text-foreground font-semibold text-sm">R</span>
              <span className="w-10 h-10 rounded-full bg-sao-pink flex items-center justify-center text-foreground font-semibold text-sm">A</span>
              <span className="w-10 h-10 rounded-full bg-sao-green flex items-center justify-center text-foreground font-semibold text-sm">N</span>
              <span className="w-10 h-10 rounded-full bg-sao-pink flex items-center justify-center text-foreground font-semibold text-sm">I</span>
              <span className="w-10 h-10 rounded-full bg-sao-green flex items-center justify-center text-foreground font-semibold text-sm">E</span>
            </div>
            <div className="flex flex-wrap gap-1 mt-1 justify-center">
              <span className="w-10 h-10 rounded-full bg-sao-pink flex items-center justify-center text-foreground font-semibold text-sm">Z</span>
              <span className="w-10 h-10 rounded-full bg-sao-green flex items-center justify-center text-foreground font-semibold text-sm">R</span>
              <span className="w-10 h-10 rounded-full bg-sao-pink flex items-center justify-center text-foreground font-semibold text-sm">A</span>
              <span className="w-10 h-10 rounded-full bg-sao-green flex items-center justify-center text-foreground font-semibold text-sm">K</span>
              <span className="w-10 h-10 rounded-full bg-sao-pink flex items-center justify-center text-foreground font-semibold text-sm">U</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Tvoj zrak si zaslúži viac!
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              V SAO sa oň postaráme pomocou najnovších technológií a odborného prístupu našich skúsených optometristov. V priebehu zhruba 50-minútového vyšetrenia zmeriame tvoju zrakovú ostrosť, skontrolujeme predný segment oka, priestorové videnie a stanovíme finálnu dioptriu.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Pokiaľ uvažuješ o kontaktných šošovkách, radi ti pomôžeme s ich aplikáciou a poradíme, ako sa o ne správne starať!
            </p>

            <h3 className="text-xl font-bold text-foreground mb-4">A nezabudni!</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Pokiaľ nosíš dioptrické okuliare, prines si ich so sebou. Porovnáme tvoju doterajšiu dioptriu v okuliaroch s novou nameranou a prispôsobíme nové dioptrie presne tvojím potrebám.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ak nosíš kontaktné šošovky, je dôležité, aby si ich aspoň 3 hodiny pred vyšetrením nenosil, pretože by to mohlo skresliť výsledky merania.
            </p>
            <p className="text-foreground font-semibold mb-2">
              Objednaj sa ešte dnes a dopraj svojmu zraku starostlivosť, akú si zaslúži!
            </p>
            <p className="text-muted-foreground text-sm">* Cena vyšetrenia je 50€</p>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src={eyeExamImg}
              alt="Meranie zraku"
              className="w-full h-auto object-cover"
              loading="lazy"
              width={800}
              height={1067}
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <a
            href="#contact"
            className="bg-sao-green text-foreground px-12 py-4 rounded-full text-lg font-semibold tracking-wider hover:brightness-95 hover:scale-105 transition-all duration-300 inline-block"
          >
            OBJEDNAŤ SA
          </a>
        </div>
      </div>
    </section>
  );
};

export default SaoEyeExam;
