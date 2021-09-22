import { Container } from './styles';

interface ServicePriceProps {
  title: string;
  description: string;
  price: string;
}

export function ServicePrice({ title, description, price}: ServicePriceProps) {
  return (
    <Container>
      <div>
        <a href="/">{title}</a>
        <p>{description}</p>
      </div>
      
      <strong>R$ {price}</strong>
    </Container>
  );
}