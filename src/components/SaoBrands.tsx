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
import ScrollReveal from '@/components/ScrollReveal';

const brands = [
  {
    name: 'KOMONO',
    img: brand1,
    layoutClass: 'md:col-span-1 md:row-span-1',
    overlayColor: 'rgba(236, 201, 227, 0.46)',
  },
  {
    name: 'ETNIA\nBARCELONA',
    img: brand2,
    layoutClass: 'md:col-span-1 md:row-span-2',
    overlayColor: 'rgba(138, 240, 174, 0.48)',
  },
  {
    name: 'SABINE BE',
    img: brand5,
    layoutClass: 'md:col-span-1 md:row-span-1',
    overlayColor: 'rgba(138, 240, 174, 0.48)',
  },
  {
    name: 'LOOL',
    img: brand6,
    layoutClass: 'md:col-span-1 md:row-span-2',
    overlayColor: 'rgba(236, 201, 227, 0.46)',
  },
  {
    name: 'DICK MOBY',
    img: brand3,
    layoutClass: 'md:col-span-1 md:row-span-2',
    overlayColor: 'rgba(138, 240, 174, 0.48)',
  },
  {
    name: 'GAST',
    img: brand4,
    layoutClass: 'md:col-span-1 md:row-span-1',
    overlayColor: 'rgba(236, 201, 227, 0.46)',
  },
  {
    name: 'JPLUS',
    img: brand7,
    layoutClass: 'md:col-span-1 md:row-span-2',
    overlayColor: 'rgba(138, 240, 174, 0.48)',
  },
  {
    name: 'ESSEDUE',
    img: brand8,
    layoutClass: 'md:col-span-1 md:row-span-1',
    overlayColor: 'rgba(236, 201, 227, 0.46)',
  },
  {
    name: 'PAGANI',
    img: brand9,
    layoutClass: 'md:col-span-1 md:row-span-1',
    overlayColor: 'rgba(138, 240, 174, 0.48)',
  },
  {
    name: 'PAWA',
    img: brand10,
    layoutClass: 'md:col-span-1 md:row-span-1',
    overlayColor: 'rgba(236, 201, 227, 0.46)',
  },
  {
    name: 'GIULIANI\nOCCHIALI',
    img: brand11,
    layoutClass: 'md:col-span-2 md:row-span-1',
    overlayColor: 'rgba(138, 240, 174, 0.48)',
  },
];

const SaoBrands = () => {
  return (
    <section id="brands" className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-3 md:auto-rows-[170px] md:grid-cols-4 md:gap-4">
          {brands.map((brand) => (
            <ScrollReveal
              key={brand.name}
              className={`brand-card group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-[1.9rem] md:aspect-auto ${brand.layoutClass}`}
            >
              <img
                src={brand.img}
                alt={brand.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="brand-card-overlay" style={{ backgroundColor: brand.overlayColor }}>
                <span className="px-4 text-center text-[1.1rem] font-medium leading-[1.05] text-foreground md:text-[1.35rem] whitespace-pre-line">
                  {brand.name}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaoBrands;
