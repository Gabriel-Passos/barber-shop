import shippingIcon from '../../assets/images/offer-icon.png';

import { Container, Content } from './styles';

export function ShippingBanner() {
  return (
    <Container>
      <Content>
        <div>
          <img src={shippingIcon} alt="Shipping" loading="lazy" />
          <strong>Envio Grátis</strong>
        </div>

        <p>Entrega gratuita agora em seu primeiro pedido e mais de R$ 200,00</p>

        <strong>
          - APENAS £ 8,99 *
        </strong>
      </Content>
    </Container>
  );
}