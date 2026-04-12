import { useEffect, useState } from 'react';

import brand1 from '@/assets/komono.jpg';
import brand2 from '@/assets/SabineBe.jpeg';
import brand3 from '@/assets/DICK MOBY.jpg';
import brand4 from '@/assets/gast.jpg';
import brand5 from '@/assets/RAEN.jpg';
import brand6 from '@/assets/Giuliani Occhiali.jpeg';
import brand7 from '@/assets/JPLUS.jpg';
import brand8 from '@/assets/ESSEDUE.png';
import brand9 from '@/assets/ETNIA.jpg';
import brand10 from '@/assets/pawa.jpeg';
import brand11 from '@/assets/Pagani.jpg';
import ScrollReveal from '@/components/ScrollReveal';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const brands = [
  {
    name: 'KOMONO',
    img: brand1,
    layoutClass: 'md:col-span-1 md:row-span-1',
    overlayColor: 'rgba(236, 201, 227, 0.46)',
    imagePosition: 'center 28%',
  },
  {
    name: 'SABINE BE',
    img: brand2,
    layoutClass: 'md:col-span-1 md:row-span-2',
    overlayColor: 'rgba(138, 240, 174, 0.48)',
    imagePosition: 'center 32%',
  },
  {
    name: 'RAEN',
    img: brand5,
    layoutClass: 'md:col-span-1 md:row-span-1',
    overlayColor: 'rgba(138, 240, 174, 0.48)',
    imagePosition: 'center 38%',
  },
  {
    name: 'GIULIANI\nOCCHIALI',
    img: brand6,
    layoutClass: 'md:col-span-1 md:row-span-2',
    overlayColor: 'rgba(236, 201, 227, 0.46)',
    imagePosition: 'center 32%',
  },
  {
    name: 'LOOL',
    img: brand3,
    layoutClass: 'md:col-span-1 md:row-span-2',
    overlayColor: 'rgba(138, 240, 174, 0.48)',
    imagePosition: 'center 22%',
  },
  {
    name: 'GAST',
    img: brand4,
    layoutClass: 'md:col-span-1 md:row-span-1',
    overlayColor: 'rgba(236, 201, 227, 0.46)',
    imagePosition: 'center',
  },
  {
    name: 'JPLUS',
    img: brand7,
    layoutClass: 'md:col-span-1 md:row-span-2',
    overlayColor: 'rgba(138, 240, 174, 0.48)',
    imagePosition: 'center 24%',
  },
  {
    name: 'ESSEDUE',
    img: brand8,
    layoutClass: 'md:col-span-1 md:row-span-1',
    overlayColor: 'rgba(236, 201, 227, 0.46)',
    imagePosition: '76% 24%',
  },
  {
    name: 'ETNIA\nBARCELONA',
    img: brand9,
    layoutClass: 'md:col-span-1 md:row-span-1',
    overlayColor: 'rgba(138, 240, 174, 0.48)',
    imagePosition: 'center 10%',
  },
  {
    name: 'PAWA',
    img: brand10,
    layoutClass: 'md:col-span-1 md:row-span-1',
    overlayColor: 'rgba(236, 201, 227, 0.46)',
    imagePosition: '52% 20%',
  },
  {
    name: 'PAGANI',
    img: brand11,
    layoutClass: 'md:col-span-2 md:row-span-1',
    overlayColor: 'rgba(138, 240, 174, 0.48)',
    imagePosition: 'center 40%',
  },
];

const BrandCarouselCard = ({
  brand,
  compact = false,
}: {
  brand: (typeof brands)[number];
  compact?: boolean;
}) => (
  <div className="mx-auto flex h-full w-full max-w-[12.25rem] flex-col rounded-[2rem] bg-[#ECC9E3] p-3 shadow-[0_8px_24px_rgba(33,29,29,0.04)] sm:max-w-[13.25rem]">
    <div
      className={`overflow-hidden rounded-[1.8rem] bg-white/25 ${compact ? 'aspect-square' : 'aspect-[4/5]'}`}
    >
      <img
        src={brand.img}
        alt={brand.name.replace('\n', ' ')}
        className="h-full w-full object-cover"
        style={{ objectPosition: brand.imagePosition ?? 'center' }}
        loading="lazy"
      />
    </div>
    <div className="mt-3 rounded-[0.8rem] bg-white px-3 py-2 text-center">
      <span className="block whitespace-pre-line text-[0.95rem] font-semibold leading-[1.05] text-foreground">
        {brand.name}
      </span>
    </div>
  </div>
);

const SaoBrands = () => {
  const [tabletApi, setTabletApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!tabletApi) {
      return;
    }

    const mediaQuery = window.matchMedia('(min-width: 768px) and (max-width: 1023px)');
    let intervalId: number | undefined;

    const syncAutoplay = () => {
      if (intervalId) {
        window.clearInterval(intervalId);
      }

      if (!mediaQuery.matches) {
        return;
      }

      intervalId = window.setInterval(() => {
        tabletApi.scrollNext();
      }, 2400);
    };

    syncAutoplay();
    mediaQuery.addEventListener('change', syncAutoplay);

    return () => {
      mediaQuery.removeEventListener('change', syncAutoplay);

      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [tabletApi]);

  return (
    <section id="brands" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="sr-only">Znacky okuliarov v SAO Optika</h2>

        <div className="lg:hidden">
          <Carousel
            setApi={setTabletApi}
            opts={{ align: 'center', loop: true }}
            className="mx-auto w-full max-w-[23rem] px-20 max-[380px]:max-w-[20rem] max-[380px]:px-6 md:max-w-[50rem] md:px-0"
          >
            <CarouselContent className="items-stretch">
              {brands.map((brand) => (
                <CarouselItem key={brand.name} className="basis-full md:basis-1/3">
                  <BrandCarouselCard brand={brand} compact />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-6 top-[42%] h-11 w-11 border-0 !bg-[#ECC9E3] !text-[#211d1d] shadow-none hover:!bg-[#ECC9E3] hover:!text-[#211d1d] active:!bg-[#ECC9E3] active:!text-[#211d1d] focus-visible:ring-[#ECC9E3] disabled:opacity-35 max-[380px]:left-1 max-[380px]:h-10 max-[380px]:w-10 md:hidden" />
            <CarouselNext className="right-6 top-[42%] h-11 w-11 border-0 !bg-[#ECC9E3] !text-[#211d1d] shadow-none hover:!bg-[#ECC9E3] hover:!text-[#211d1d] active:!bg-[#ECC9E3] active:!text-[#211d1d] focus-visible:ring-[#ECC9E3] disabled:opacity-35 max-[380px]:right-1 max-[380px]:h-10 max-[380px]:w-10 md:hidden" />
          </Carousel>
        </div>

        <div className="hidden grid-cols-2 gap-3 lg:grid lg:auto-rows-[170px] lg:grid-cols-4 lg:gap-4">
          {brands.map((brand) => (
            <ScrollReveal
              key={brand.name}
              className={`brand-card group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-[1.9rem] md:aspect-auto ${brand.layoutClass}`}
            >
              <img
                src={brand.img}
                alt={brand.name}
                className="h-full w-full object-cover"
                style={{ objectPosition: brand.imagePosition ?? 'center' }}
                loading="lazy"
              />
              <div className="brand-card-overlay" style={{ backgroundColor: brand.overlayColor }}>
                <span className="whitespace-pre-line px-4 text-center text-[1.1rem] font-medium leading-[1.05] text-foreground md:text-[1.35rem]">
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
