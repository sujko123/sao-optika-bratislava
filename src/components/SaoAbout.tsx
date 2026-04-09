import storeImg from '@/assets/store.jpg';
import headingOnas from '@/assets/heading-onas.png';

const SaoAbout = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden">
          <img
            src={storeImg}
            alt="Interiér SAO Optika"
            className="w-full h-auto object-cover"
            loading="lazy"
            width={1200}
            height={800}
          />
        </div>

        {/* Text */}
        <div>
          {/* Heading image placeholder */}
          <div className="mb-6">
            <img
              src={headingOnas}
              alt="O NÁS"
              className="h-20 md:h-24 w-auto"
              loading="lazy"
              width={512}
              height={512}
            />
          </div>

          <p className="text-foreground font-semibold text-lg mb-4">Sme SAO.</p>
          <p className="text-muted-foreground leading-relaxed">
            Nová očná optika v srdci Bratislavy. Pokiaľ hľadáš svoje vysnívané okuliare, sme tu pre teba. V SAO tvoríme priestor, ktorý venuje dôležitosť prevencii zraku a správnej starostlivosti. Veríme, že u nás objavíš tie správne okuliare a popritom sa naučíš niečo nové o svojich očiach!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SaoAbout;
