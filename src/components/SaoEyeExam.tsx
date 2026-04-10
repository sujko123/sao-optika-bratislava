import eyeExamImg from '@/assets/kaja1.avif';
import eyeExamImg2 from '@/assets/kaja2.avif';
import headingMeranieZraku from '@/assets/meranie_zraku.png';

const SaoEyeExam = () => {
  return (
    <section id="eye-exam" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex justify-center">
          <img
            src={headingMeranieZraku}
            alt="MERANIE ZRAKU"
            className="h-[127px] w-[426px]"
            loading="lazy"
            width={426}
            height={127}
          />
        </div>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="overflow-hidden rounded-[1.9rem] border-[4px] border-[#71F6A5]">
            <img
              src={eyeExamImg}
              alt="Meranie zraku"
              className="h-auto max-h-[408px] w-full max-w-[541px] object-cover"
              loading="lazy"
              width={544}
              height={408}
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
              Tvoj zrak si zaslúži viac!
            </h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              V SAO sa oň postaráme pomocou najnovších technológií a odborného prístupu
              našich skúsených optometristov. V priebehu zhruba 50-minútového vyšetrenia
              zmeriame tvoju zrakovú ostrosť, skontrolujeme predný segment oka, priestorové
              videnie a stanovíme finálnu dioptriu.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Pokiaľ uvažuješ o kontaktných šošovkách, radi ti pomôžeme s ich aplikáciou a
              poradíme, ako sa o ne správne starať!
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 items-center gap-10 md:mt-16 md:grid-cols-2 md:gap-16">
          <div className="order-2 flex flex-col justify-center md:order-1">
            <h3 className="mb-4 text-xl font-bold text-foreground">A nezabudni!</h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Pokiaľ nosíš dioptrické okuliare, prines si ich so sebou. Porovnáme tvoju
              doterajšiu dioptriu v okuliaroch s novou nameranou a prispôsobíme nové
              dioptrie presne tvojím potrebám.
            </p>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Ak nosíš kontaktné šošovky, je dôležité, aby si ich aspoň 3 hodiny pred
              vyšetrením nenosil, pretože by to mohlo skresliť výsledky merania.
            </p>
            <p className="mb-2 font-semibold text-foreground">
              Objednaj sa ešte dnes a dopraj svojmu zraku starostlivosť, akú si zaslúži!
            </p>
            <p className="text-sm text-muted-foreground">* Cena vyšetrenia je 50€</p>
          </div>

          <div className="order-1 overflow-hidden rounded-[1.9rem] border-[4px] border-[#ECC9E3] md:order-2">
            <img
              src={eyeExamImg2}
              alt="Vyšetrenie zraku"
              className="h-auto max-h-[408px] w-full max-w-[541px] object-cover"
              loading="lazy"
              width={544}
              height={408}
            />
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://kalendar.saooptika.sk/terminy"
            className="inline-flex items-center justify-center rounded-full bg-[#71F6A5] px-12 py-4 text-[18px] font-medium uppercase tracking-normal text-foreground transition-all duration-200 hover:scale-[1.03]"
          >
            OBJEDNAŤ SA
          </a>
        </div>
      </div>
    </section>
  );
};

export default SaoEyeExam;
