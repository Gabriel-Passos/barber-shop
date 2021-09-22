import styled from 'styled-components';

interface TitleProps {
  blackColor?: boolean;
}

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1<TitleProps>`
  font-family: 'Abril Fatface', sans-serif;
  font-size: 50px;
  color: ${props => props.blackColor 
    ? `var(--color-black)`
    : `var(--color-white)`
  };
  letter-spacing: 0.16px;
  font-weight: 400;

  margin-top: 8px;

  @media (max-width: 1124px) {
    font-size: 36px;
    text-align: center;
  }
`;

export const Description = styled.p`
  font-family: inherit;
  font-size: 14px;
  color: var(--color-gray-300);
  margin-top: 8px;

  @media (max-width: 1124px) {
    text-align: center;
  }
`;