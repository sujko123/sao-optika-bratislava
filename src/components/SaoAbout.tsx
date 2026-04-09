import storeImg from '@/assets/vnutro.avif';
import headingOnas from '@/assets/onas.png';

const SaoAbout = () => {
  return (
    <section id="about" className="px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="sao-frame overflow-hidden p-2">
          <img
            src={storeImg}
            alt="Interiér SAO Optika"
            className="sao-inset-frame h-auto w-full object-cover"
            loading="lazy"
            width={1200}
            height={800}
          />
        </div>

        <div>
          <div className="mb-6">
            <img
              src={headingOnas}
              alt="O NÁS"
              className="h-20 w-auto md:h-24"
              loading="lazy"
              width={512}
              height={512}
            />
          </div>

          <p className="mb-4 text-lg font-semibold text-foreground">Sme SAO.</p>
          <p className="leading-relaxed text-muted-foreground">
            Nová očná optika v srdci Bratislavy. Pokiaľ hľadáš svoje vysnívané okuliare,
            sme tu pre teba. V SAO tvoríme priestor, ktorý venuje dôležitosť prevencii
            zraku a správnej starostlivosti. Veríme, že u nás objavíš tie správne okuliare
            a popritom sa naučíš niečo nové o svojich očiach.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SaoAbout;
