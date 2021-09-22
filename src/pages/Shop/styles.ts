import styled from 'styled-components';

export const ShopContent = styled.section`
  max-width: var(--max-width-content);
  margin: 0 auto 50px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 1124px) {
    flex-direction: column-reverse;
  }
`;

export const CategoryContainer = styled.div`
  width: 100%;
  max-width: 279px;

  display: flex;
  flex-direction: column;

  padding-right: 16px;

  @media (max-width: 1124px) {
    max-width: 100%;
    padding-right: 0;
    margin-top: 32px;
  }
`;

export const ProductsContainer = styled.section`
  width: 100%;
  max-width: var(--max-width-content);

  display: flex;
  flex-direction: column;

  > article {
    > img {
      max-width: 100%;
      height: auto;
    }

    p {
      font-family: 'Poppins', sans-serif;
      font-size: 13px;
      font-weight: 400;
      color: var(--color-gray-300);
      line-height: 26px;
      letter-spacing: 0.6px;
      margin-top: 20px;
    }
  }
`;

export const GridProduct = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 733px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 530px) {
    grid-template-columns: 1fr;
    align-self: center;
  }
`;

export const ShowingAndSortContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 24px 0;

  > p {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: var(--color-black);
  }

  > select {
    padding: 4px 8px;
    border-radius: 4px;
    color: var(--color-gray-300);

    option {
      color: var(--color-black);
    }
  }

  @media (max-width: 390px) {
    flex-direction: column;

    > select {
      margin-top: 16px;
    }
  }
`;