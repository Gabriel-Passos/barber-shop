import { FaShoppingCart } from 'react-icons/fa';

import logo from '../../assets/images/logo.jpg';

import { Container, Link, Navbar, Logo } from './styles';
import { Divider } from '../../styles/global';
import { useCart } from '../../hooks/useCart';

export function Header() {
  const { cart } = useCart();

  const cartSize = cart.length;

  return (
    <Container>
      <div>
        <Logo>
          <a href="/home">
            <img src={logo} alt="Logo" loading="lazy" />
          </a>
        </Logo>

        <Link href="/cart" cartAmount={cartSize}>
          <FaShoppingCart size={32} color="#ffffff" />
        </Link>
      </div>

      <Divider />
      
      <div>
        <Navbar>
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
        </Navbar>
      </div>
    </Container>
  );
}