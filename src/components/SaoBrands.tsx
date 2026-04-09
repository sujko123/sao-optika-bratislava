import brand1 from '@/assets/brand1.jpg';
import brand2 from '@/assets/brand2.jpg';
import brand3 from '@/assets/brand3.jpg';
import brand4 from '@/assets/brand4.jpg';
import brand5 from '@/assets/brand5.jpg';
import brand6 from '@/assets/brand6.jpg';
import brand7 from '@/assets/brand7.jpg';
import brand8 from '@/assets/brand8.jpg';
import brand9 from '@/assets/brand9.jpg';
import brand10 from '@/assets/brand10.jpg';
import brand11 from '@/assets/brand11.jpg';

const brands = [
  { name: 'KOMONO', img: brand1, isNew: false },
  { name: 'ETNIA\nBARCELONA', img: brand2, isNew: false },
  { name: 'DICK MOBY', img: brand3, isNew: false },
  { name: 'GAST', img: brand4, isNew: false },
  { name: 'RAEN', img: brand5, isNew: false },
  { name: 'LOOL', img: brand6, isNew: false },
  { name: 'JPLUS', img: brand7, isNew: false },
  { name: 'ESSEDUE', img: brand8, isNew: false },
  { name: 'PAGANI', img: brand9, isNew: false },
  { name: 'PAWA', img: brand10, isNew: true },
  { name: 'GIULIANI\nOCCHIALI', img: brand11, isNew: true },
];

const SaoBrands = () => {
  return (
    <section id="brands" className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Grid - first row 4 cols, second row 4 cols, third row 3 cols */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="brand-card relative overflow-hidden rounded-xl cursor-pointer aspect-[3/4]"
            >
              <img
                src={brand.img}
                alt={brand.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="brand-card-overlay rounded-xl">
                {brand.isNew && (
                  <span className="absolute top-3 right-3 bg-sao-green text-foreground text-xs font-semibold px-3 py-1 rounded-full italic">
                    Novinka
                  </span>
                )}
                <span className="text-foreground font-bold text-lg md:text-xl tracking-wider text-center whitespace-pre-line">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaoBrands;
