import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Swiper } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';

SwiperCore.use([Pagination, Navigation]);

interface CarouselProps extends SwiperOptions {
  children: React.ReactNode;
}

export function Carousel({ children, ...rest }: CarouselProps) {
  return (
    <Swiper
      pagination
      navigation={false}
      loop
      autoplay={{
        delay: 2000,
        disableOnInteraction: false
      }}
      {...rest}
    >
      {children}
    </Swiper>
  );
}