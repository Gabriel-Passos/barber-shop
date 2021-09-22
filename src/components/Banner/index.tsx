import { SwiperSlide as CarouselItem } from 'swiper/react';

import { Carousel } from '../Carousel';

import barberShopImg01 from '../../assets/images/barber-shop-01.jpg';
import barberShopImg02 from '../../assets/images/barber-shop-02.png';

import { Container } from './styles';

export function Banner() {
  return (
    <Carousel 
      navigation
      pagination={false}
    >
      <CarouselItem>
        <Container>
          <img src={barberShopImg01} alt="" loading="lazy" />
        </Container>
      </CarouselItem>

      <CarouselItem>
        <Container>
          <img src={barberShopImg02} alt="" loading="lazy" />
        </Container>
      </CarouselItem>
    </Carousel>
  );
}