import { useEffect, useState } from 'react';
import { SwiperSlide as Carouselitem } from 'swiper/react';
import ReactLoading from 'react-loading';

import { WhatsAppButton } from '../../components/WhatsAppButton';
import { Banner } from '../../components/Banner';
import { HeadingSection } from '../../components/HeadingSection';
import { ShippingBanner } from '../../components/ShippingBanner';
import { Carousel } from '../../components/Carousel';
import { ProductCard } from '../../components/ProductCard';

import { ProductData } from '../../types';

import { ServicePriceList } from './ServicePriceList';
import { TimeWorkingList } from './TimeWorkingList';
import { OurServices } from './OurServices';

import { api } from '../../services/api';

import { ProductCarouselContainer } from './styles';
import { Section, Content, LoadingContainer } from '../../styles/global';

export function Home() {
  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await api.get('/products');

      setProducts(response.data);
    }

    getProducts();
  }, []);

  return (
    <>
      <Banner />

      <WhatsAppButton />

      <Section negativeTop>
        <Content>
          <HeadingSection 
            title="Nossos serviços"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          />

          <OurServices />

        </Content>
      </Section>

      <ShippingBanner />

      <Section whiteBackground textAlignLeft>
        <Content>
          <HeadingSection 
            title="Nossos Produtos"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            blackText
          />

          {products.length === 0 ? (
            <LoadingContainer>
              <ReactLoading type="spinningBubbles" color="#9e8462" height={80} width={80} />
            </LoadingContainer>
          ) : (
            <ProductCarouselContainer>
              <Carousel
                loop
                slidesPerView={4}
                spaceBetween={24}
                navigation
                pagination={false}
                breakpoints={{
                  768: {
                    slidesPerView: 4
                  },
                  430: {
                    slidesPerView: 2,
                    spaceBetween: 24
                  },
                  200: {
                    slidesPerView: 1,
                  }
                }}
              >
                {products.map(productItem => (
                  <Carouselitem key={productItem.id}>
                    <ProductCard
                      id={productItem.id} 
                      inPromotion={productItem.inPromotion} 
                      productImage={productItem.productImage}
                      productName={productItem.productName}
                      price={productItem.price}
                      oldPrice={productItem.oldPrice}
                      promotionPrice={productItem.promotionPrice}
                      promotionValue={productItem.promotionValue}
                    />
                  </Carouselitem>
                ))}
              </Carousel>
            </ProductCarouselContainer>
          )}

        </Content>
      </Section>

      <Section>
        <Content>
          <HeadingSection 
            title="Lista de preços"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          />
        
          <ServicePriceList />
        </Content>
      </Section>

      <Section>
        <Content noPadding>
          <HeadingSection 
            title="Horário de trabalho"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          />
        
          <TimeWorkingList />
        </Content>
      </Section>
    </>
  );
}
