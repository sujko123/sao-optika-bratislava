import eyeExamImg from '@/assets/eye-exam.jpg';
import eyeExamImg2 from '@/assets/eye-exam-2.jpg';
import headingMeranieZraku from '@/assets/heading-meranie-zraku.png';

const SaoEyeExam = () => {
  return (
    <section id="eye-exam" className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section title - image placeholder */}
        <div className="mb-10 flex justify-center">
          <img
            src={headingMeranieZraku}
            alt="MERANIE ZRAKU"
            className="h-24 md:h-32 lg:h-40 w-auto"
            loading="lazy"
            width={1024}
            height={512}
          />
        </div>

        {/* Row 1: Image LEFT, Text RIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
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

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Tvoj zrak si zaslúži viac!
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              V SAO sa oň postaráme pomocou najnovších technológií a odborného prístupu našich skúsených optometristov. V priebehu zhruba 50-minútového vyšetrenia zmeriame tvoju zrakovú ostrosť, skontrolujeme predný segment oka, priestorové videnie a stanovíme finálnu dioptriu.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Pokiaľ uvažuješ o kontaktných šošovkách, radi ti pomôžeme s ich aplikáciou a poradíme, ako sa o ne správne starať!
            </p>
          </div>
        </div>

        {/* Row 2: Text LEFT, Image RIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start mt-10 md:mt-16">
          <div className="order-2 md:order-1">
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

          <div className="rounded-2xl overflow-hidden order-1 md:order-2">
            <img
              src={eyeExamImg2}
              alt="Vyšetrenie zraku"
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
