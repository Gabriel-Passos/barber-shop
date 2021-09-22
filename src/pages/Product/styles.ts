import styled from 'styled-components';

interface InfoButtonProps {
  onActive: boolean;
}

export const ProductContainer = styled.div`
  width: 100%;
  max-width: var(--max-width-content);

  margin: 0 auto;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  ul.slider, li.slide {
    max-width: 532px;
  }

  img {
    max-width: 532px;
    height: auto;
  }

  .carousel-product {
    padding: 0 24px 0 0;
  }

  @media (max-width: 1124px) {
    flex-direction: column;

    .carousel-product {
      align-self: center;
      padding: 0;
    }
  }
`;

export const ProductInfos = styled.article`
  width: 100%;
  max-width: 670px;

  font-size: 22px;
  font-weight: 400;
  text-transform: capitalize;
  color: var(--color-black);
  line-height: 32px;

  > h1 {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    text-transform: inherit;
    color: inherit;
    line-height: inherit;
    margin-bottom: 16px;
  }

  > span {
    font-family: inherit;
    font-size: inherit;
    font-weight: 600;
    text-transform: inherit;
    color: inherit;
    line-height: inherit;
    margin-bottom: 10px;
  }

  > p {
    font-family: inherit;
    font-size: 13px;
    font-weight: inherit;
    color: var(--color-gray-300);
    line-height: 26px;
    letter-spacing: 0.6px;
    margin: 20px 0;
  }

  @media (max-width: 1124px) {
    max-width: 532px;
    margin: 16px auto 0;
  }
`;

export const Stock = styled.div`
 margin-bottom: 16px;

  span {
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    color: var(--color-green-500);
    margin-left: 8px;
  }
`;

export const CartButton = styled.button`
  margin-left: 8px;
  padding: 11.5px 38px;
  
  background-color: var(--color-brown-500);
  border: 0;

  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-white);
  
  transition: background-color .3s ease;

  &:hover {
    background-color: var(--color-black);
  }

  @media (max-width: 400px) {
    margin-left: 0;
    margin-top: 8px;
  }
`;

export const Categorys = styled.div`
  strong {
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
  }

  a {
    font-family: inherit;
    font-size: 14px;
    color: var(--color-gray-300);
    text-decoration: none;
    margin-left: 8px;

    &:hover {
      color: var(--color-brown-500);
    }

    &::after {
      content: ',';
      color: var(--color-black);
      margin-left: 2px;
    }
    
    &:last-child {
      &::after {
        content: '';
      }
    }
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  max-width: var(--max-width-content);

  margin: 0 auto 50px;
`;

export const InfoButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 400px) {
    flex-direction: column;

    > button {
      width: 100%;

      &:last-child {
        margin-left: 0;
        margin-top: 8px;
      }
    }
  }
`;

export const InfoButton = styled.button<InfoButtonProps>`
  font-family: inherit;
  letter-spacing: 0.7px;
  text-transform: capitalize;
  font-size: 13px;
  line-height: 22px;
  font-weight: 500;
  color: var(--color-white);

  background-color: ${props => props.onActive 
    ? 'var(--color-brown-500)' 
    : 'var(--color-black)'
  }; 
  border: 0;
  padding: 10px 30px;

  &:last-child {
    margin-left: 8px;
  }
`;

export const DescriptionContainer = styled.div`
  margin-top: 24px;

  border: 1px solid #f0f0f2;
  padding: 25px 25px 40px;

  font-family: inherit;
  font-size: 14px;

  h3 {
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  strong {
    display: block;
    font-family: inherit;
    font-size: inherit;
    font-weight: 600;
    margin-bottom: 12px;
  }

  p {
    font-family: inherit;
    font-size: inherit;
    color: var(--color-gray-300);
  }
`;

export const AdditionalInfoContainer = styled.div`
  font-family: inherit;
  font-size: 14px;

  border: 1px solid #f0f0f2;
  padding: 25px 25px 40px;
  margin-top: 24px;

  h3 {
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 12px;
  }

  overflow-x: scroll;

  th {
    max-width: 150px;
    padding: 10px 20px;
    font-family: inherit;
    font-size: inherit;
    font-weight: 600;
    border: 1px solid #f0f0f2;
    text-align: start;
  }

  td {
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    padding: 10px 20px;
    color: var(--color-gray-300);
    border: 1px solid #f0f0f2;
  }
`;
