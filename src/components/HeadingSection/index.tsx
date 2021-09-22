import headingIcon from '../../assets/images/title-icon.png';

import { Container, Title, Description } from './styles';

interface HeadingSectionProps {
  title: string;
  description?: string;
  blackText?: boolean;
}

export function HeadingSection({ 
  title, 
  description, 
  blackText = false 
}: HeadingSectionProps) {
  return (
    <Container>
      <img src={headingIcon} alt="Ícone do título" />

      <Title blackColor={blackText}>{title}</Title>
      
      <Description>{description}</Description>
    </Container>
  );
}