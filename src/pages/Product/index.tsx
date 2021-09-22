import { useEffect, useState } from 'react';
import { Carousel as RRCarousel } from 'react-responsive-carousel';
import { FaCheckCircle } from 'react-icons/fa';

import { useCart } from '../../hooks/useCart';

import { ProductData } from '../../types';

import { WhatsAppButton } from '../../components/WhatsAppButton';
import { PageTitle } from "../../components/PageTitle";
import { ShippingBanner } from '../../components/ShippingBanner';

import { api } from '../../services/api';

import { 
  ProductContainer, 
  ProductInfos,
  Stock,
  CartButton,
  Categorys,
  InfoButtonsContainer,
  InfoButton,
  DescriptionContainer,
  AdditionalInfoContainer,
  InfoContainer,
} from './styles';

import { Section, Divider } from "../../styles/global";

export function Product() {
  const [product, setProduct] = useState<ProductData>({} as ProductData);

  const { productId, addProduct } = useCart();

  const [showDescription, setShowDescription] = useState(true);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      const response = await api.get(`/products/${productId}`);

      setProduct(response.data);
    }

    getProduct();
  }, [productId]);

  const toggleShowDescription = () => {
    setShowAdditionalInfo(false);
    setShowDescription(true);
  }
  
  const toggleShowAdditionalInfo = () => {
    setShowDescription(false);
    setShowAdditionalInfo(true);
  }

  const handleAddProduct = (id: number) => {
    addProduct(id);
  }

  return (
    <>
      <WhatsAppButton/>

      <PageTitle 
        path="shop"
        pageName={product.productName}
        productName={product.productName}
        showProductName
      />

      <Section whiteBackground>
        <ProductContainer>
          <RRCarousel
            emulateTouch
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            className="carousel-product"
          >
            <img 
              src={product.productImage} 
              alt={product.productName}
              loading="lazy"
            />

            <img 
              src={product.productImage} 
              alt={product.productName}
              loading="lazy"
            />
          </RRCarousel>

          <ProductInfos>
            <h1>{product.productName}</h1>

            <span>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(product.price)}
            </span>

            <p>
              {product.description}
            </p>

            <Stock>
              <FaCheckCircle size={20} color="#008000" />

              <span>998 em estoque</span>
            </Stock>

            <CartButton 
              type="button"
              onClick={() => handleAddProduct(product.id)}
            >
              Adicionar ao carinho
            </CartButton>

            <Divider lightLine />

            <Categorys>
              <strong>Categorias: </strong>

              <a href="/">Hair Color</a>
              <a href="/">Hair Color</a>
            </Categorys>
          </ProductInfos>
        </ProductContainer>
      </Section>

      <Section whiteBackground>
        <InfoContainer>
          <InfoButtonsContainer>
            <InfoButton
             type="button" 
             onClick={toggleShowDescription}
             onActive={showDescription}
            >
              Descrição
            </InfoButton>

            <InfoButton 
              type="button" 
              onClick={toggleShowAdditionalInfo}
              onActive={showAdditionalInfo}
            >
              Informação adicional
            </InfoButton>
          </InfoButtonsContainer>

          {showDescription && (
            <DescriptionContainer>
              <h3>Descrição</h3>
              
              <strong>Paragraph text</strong>

              <p>
                {product.description}
              </p>
            </DescriptionContainer>
          )}

          {showAdditionalInfo && (
            <AdditionalInfoContainer>
              <h3>Informação adicional</h3>

              <table>
                <tbody>
                  <tr>
                    <th>Peso</th>
                    <td>15kg</td>
                  </tr>
                  <tr>
                    <th>Dimensões</th>
                    <td>124 x 451 x 215cm</td>
                  </tr>
                </tbody>
              </table>
            </AdditionalInfoContainer>
          )}
        </InfoContainer>
      </Section>

      <ShippingBanner />
    </>
  );
}