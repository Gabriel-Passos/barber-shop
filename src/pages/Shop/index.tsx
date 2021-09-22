import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

import categoryBanner from '../../assets/images/category-banner.jpg';

import { ProductData } from '../../types';

import { WhatsAppButton } from '../../components/WhatsAppButton';
import { PageTitle } from '../../components/PageTitle';
import { ShopCategory } from '../../components/ShopCategory';
import { ProductCard } from '../../components/ProductCard';
import { ShippingBanner } from '../../components/ShippingBanner';

import { api } from '../../services/api';

import { 
  ShopContent, 
  CategoryContainer, 
  ProductsContainer, 
  GridProduct,
  ShowingAndSortContainer
} from './styles';

import { Section, LoadingContainer } from '../../styles/global';

export function Shop() {
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
      <WhatsAppButton />

      <PageTitle 
        path="shop"
        pageName="shop"
      />

      <Section whiteBackground>
        <ShopContent>
          <CategoryContainer>
            <ShopCategory />
          </CategoryContainer>

          <ProductsContainer>
            <article>
              <img 
                src={categoryBanner} 
                alt="Banner de Promoção" 
                loading="lazy"
              />
              
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ut aspernatur, ducimus consequatur autem maxime, dignissimos
                temporibus esse nemo adipisci quibusdam iste quisquam ipsa
                quos quis sed consectetur dolore eum dolorem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ut aspernatur, ducimus consequatur autem maxime, dignissimos
                temporibus esse nemo adipisci quibusdam iste quisquam ipsa
                quos quis sed consectetur dolore eum dolorem?
              </p>
            </article>

            <ShowingAndSortContainer>
              <p>
                Showing 1 - 9 of 17 results
              </p>

              <select name="Sorting">
                <option value="0" selected>Default sorting</option>
                <option value="1">Sort by popularity</option>
                <option value="2">Sort by latest</option>
              </select>
            </ShowingAndSortContainer>

            {products.length === 0 ? (
              <LoadingContainer>
                <ReactLoading type="spinningBubbles" color="#9e8462" height={80} width={80} />
              </LoadingContainer>
            ) : (
              <GridProduct>
                {products.map(productItem => (
                  <ProductCard
                    key={productItem.id}
                    id={productItem.id} 
                    productName={productItem.productName}
                    productImage={productItem.productImage}
                    price={productItem.price}
                    promotionValue={productItem.promotionValue}
                    oldPrice={productItem.oldPrice}
                    promotionPrice={productItem.promotionPrice}
                    inPromotion={productItem.inPromotion}
                  />
                ))}
              </GridProduct>
            )}
          </ProductsContainer>
        </ShopContent>
      </Section>

      <ShippingBanner />
    </>
  );
}