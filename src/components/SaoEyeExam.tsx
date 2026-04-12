import eyeExamImg from '@/assets/kaja1.avif';
import eyeExamImg2 from '@/assets/kaja2.avif';
import headingMeranieZraku from '@/assets/meranie_zraku.png';

const SaoEyeExam = () => {
  return (
    <section id="eye-exam" className="px-6 py-14 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="sr-only">Meranie zraku v SAO Optika Bratislava</h2>
        <div className="mb-8 flex justify-center md:mb-10">
          <img
            src={headingMeranieZraku}
            alt="MERANIE ZRAKU"
            className="h-auto w-full max-w-[17rem] md:max-w-[22rem] lg:max-w-[26.625rem]"
            loading="lazy"
            width={426}
            height={127}
          />
        </div>

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-16">
          <div className="mx-auto w-full max-w-[20rem] overflow-hidden rounded-[1.9rem] border-[4px] border-[#71F6A5] md:max-w-none">
            <div className="aspect-[4/4.35] md:aspect-[5/4]">
              <img
                src={eyeExamImg}
                alt="Meranie zraku"
                className="h-full w-full object-cover object-center"
                loading="lazy"
                width={544}
                height={408}
              />
            </div>
          </div>

          <div className="mx-auto max-w-xl text-center md:mx-0 md:text-left">
            <h3 className="mb-4 text-[18px] font-bold leading-tight text-foreground md:mb-6 md:text-[20px]">
              Tvoj zrak si zaslúži viac!
            </h3>
            <p className="mb-5 leading-relaxed text-muted-foreground md:mb-6">
              V SAO sa oň postaráme pomocou najnovších technológií a odborného prístupu našich
              skúsených optometristov. V priebehu zhruba 50-minútového vyšetrenia zmeriame tvoju
              zrakovú ostrosť, skontrolujeme predný segment oka, priestorové videnie a stanovíme
              finálnu dioptriu.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Pokiaľ uvažuješ o kontaktných šošovkách, radi ti pomôžeme s ich aplikáciou a poradíme,
              ako sa o ne správne starať.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 items-center gap-8 md:mt-14 md:grid-cols-2 md:gap-10 lg:mt-16 lg:gap-16">
          <div className="order-2 mx-auto max-w-xl text-center md:order-1 md:mx-0 md:text-left">
            <h3 className="mb-4 text-[18px] font-bold text-foreground md:text-[20px]">A nezabudni!</h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Pokiaľ nosíš dioptrické okuliare, prines si ich so sebou. Porovnáme tvoju doterajšiu
              dioptriu v okuliaroch s novou nameranou a prispôsobíme nové dioptrie presne tvojim
              potrebám.
            </p>
            <p className="mb-5 leading-relaxed text-muted-foreground md:mb-6">
              Ak nosíš kontaktné šošovky, je dôležité, aby si ich aspoň 3 hodiny pred vyšetrením
              nenosil, pretože by to mohlo skresliť výsledky merania.
            </p>
            <p className="mb-2 font-semibold text-foreground">
              Objednaj sa ešte dnes a dopraj svojmu zraku starostlivosť, akú si zaslúži!
            </p>
            <p className="text-sm text-muted-foreground">* Cena vysetrenia je 50 EUR</p>
          </div>

          <div className="order-1 mx-auto w-full max-w-[20rem] overflow-hidden rounded-[1.9rem] border-[4px] border-[#ECC9E3] md:order-2 md:max-w-none">
            <div className="aspect-[4/4.35] md:aspect-[5/4]">
              <img
                src={eyeExamImg2}
                alt="Vysetrenie zraku"
                className="h-full w-full object-cover object-center"
                loading="lazy"
                width={544}
                height={408}
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
          <a
            href="https://kalendar.saooptika.sk/terminy"
            className="inline-flex items-center justify-center rounded-full bg-[#71F6A5] px-8 py-3 text-[16px] font-medium uppercase tracking-normal text-foreground transition-all duration-200 hover:scale-[1.03] md:px-12 md:py-4 md:text-[18px]"
          >
            OBJEDNAŤ SA
          </a>
        </div>
      </div>
    </section>
  );
};

export default SaoEyeExam;
