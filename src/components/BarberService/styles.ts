import styled from 'styled-components';

interface ContainerProps {
  leftAlign?: boolean;
}

interface IconContainerProps {
  leftAlign?: boolean;
  icon?: string;
  image?: string;
}

interface TitleProps {
  leftAlign?: boolean;
}

interface DescriptionProps {
  leftAlign?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 318px;

  display: flex;
  align-items: flex-start;

  margin-bottom: 100px;

  &:hover {
    div {
      filter: sepia(100);
    }

    strong {
      color: var(--color-white);
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 1124px) {
    flex-direction: ${props => props.leftAlign ? 'column' : 'column-reverse'};
    align-items: center;

    margin-bottom: 48px;

    > article {
      margin-top: 16px;
    }
  }
`;

export const IconContainer = styled.div<IconContainerProps>`
  margin-left: ${props => props.leftAlign ? '0' : '20px'};
  margin-right: ${props => props.leftAlign ? '20px' : '0'};
  
  background-color: var(--color-gray-800);
  padding: 20px 18.5px 15px;
  border-radius: 50%;

  transition: all 0.5s ease;

  @media (max-width: 1124px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Title = styled.strong<TitleProps>`
  display: block;
  font-family: inherit;
  font-size: 15px;
  font-weight: 600;
  text-align: ${props => props.leftAlign ? 'left' : 'right'};
  color: var(--color-brown-550);

  transition: color 0.5s ease;

  @media (max-width: 1124px) {
    text-align: center;
  }
`;

export const Description = styled.p<DescriptionProps>`
  font-family: inherit;
  font-size: 13px;
  font-weight: 400;
  text-align: ${props => props.leftAlign ? 'left' : 'right'};
  color: var(--color-gray-300);
  margin-top: 8px;

  @media (max-width: 1124px) {
    text-align: center;
  }
`;