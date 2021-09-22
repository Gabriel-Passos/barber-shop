
import { Container, Title, Description, IconContainer } from './styles';

interface BarberServiceProps  {
  title: string;
  description: string;
  iconName?: string; 
  leftIcon?: boolean;
}

export function BarberService({ 
  title, 
  description,
  iconName, 
  leftIcon = false,
}: BarberServiceProps) {
  return (
    <Container leftAlign={leftIcon}>
      {leftIcon && (
        <IconContainer leftAlign={leftIcon}>
          <img src={iconName} alt="" loading="lazy" />
        </IconContainer>
      )}

      <article>
        <Title leftAlign={leftIcon}>{title}</Title>
        <Description leftAlign={leftIcon}>{description}</Description>
      </article>

      {leftIcon ? '' : (
        <IconContainer>
          <img src={iconName} alt="" loading="lazy" />
        </IconContainer>
      )}
    </Container>
  );
}