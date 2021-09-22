import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaInstagram 
} from 'react-icons/fa';

import masterCardLogo from '../../assets/images/cards/mastercard.png';
import visaLogo from '../../assets/images/cards/visa.png';

import { Container, Content, Copyright, Social, Cards } from './styles';
import { Divider } from '../../styles/global';

export function Footer() {
  return (
    <Container>
      <Content>
        <div>
          <strong>Entre em contato</strong>

          <article>
            <FaMapMarkerAlt size={13} color="#987f5f"/>
            <p>
              60 29th Street San Francisco, 
              CA 94110 507-Union Trade Center,
              United States of America
            </p>
          </article>

          <article>
            <FaPhoneAlt size={13} color="#987f5f" />
            <p>(+00) 12-3456-7890</p>
          </article>

          <article>
            <FaEnvelope size={13} color="#987f5f" />
            <a href="/">demo@example.com</a>
          </article>
        </div>

        <div>
          <strong>Produtos</strong>

          <a href="/">Delivery</a>
          <a href="/">Aviso Legal</a>
          <a href="/">Sobre Nós</a>
          <a href="/">Pagamento Seguro</a>
        </div>

        <div>
          <strong>Informação</strong>

          <a href="/">Sua Conta</a>
          <a href="/">Centro de Devoluções</a>
          <a href="/">Compra</a>
          <a href="/">Ajuda</a>
        </div>
      </Content>
      
      <Divider />

      <Copyright>
        <Social>
          <a href="/">
            <FaFacebookF 
              size={16} 
              className="facebook-icon"  
            />
          </a>
          <a href="/">
            <FaTwitter 
              size={16} 
              className="twitter-icon"  
            />
          </a>
          <a href="/">
            <FaInstagram 
              size={16} 
              className="instagram-icon" 
            />
          </a>
        </Social>

        <span>Copyright © 2021 Codezeel</span>

        <Cards>
          <div>
            <img 
              src={masterCardLogo} 
              alt="MasterCard" 
              loading="lazy"
              className="credit-card"
            />
          </div>

          <div>
            <img 
              src={visaLogo} 
              alt="Visa" 
              loading="lazy"
              className="credit-card"
            />
          </div>
        </Cards>
      </Copyright>
    </Container>
  );
}