import product02 from '../../assets/images/product-02.jpg';

import { Container, Qtd, Price, QtdAndPriceContainer } from './styles';

interface CartItemProps {
  productImage?: string;
  productName?: string;
  price?: string;
  qtd?: number;
}

export function CartItem({
  productImage,
  productName,
  price,
  qtd
}: CartItemProps) {
  return (
    <Container>
      <div>
        <img src={product02} alt="" />

        <strong>Lorem Lorem Lorem</strong>
      </div>

      <QtdAndPriceContainer>
        <Qtd>1000</Qtd>

        <Price>R$ 80,00</Price>
      </QtdAndPriceContainer>
    </Container>
  );
}