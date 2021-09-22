import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px;

  border: 1px solid var(--color-gray-50);
  border-radius: 8px;

  > div {
    display: flex;
    align-items: center;

    > strong {
      font-family: inherit;
      font-weight: 500;
      font-size: 14px;

      padding-left: 32px;
    }

    img {
      width: 80px;
      height: auto;
    }
  }

  & + div {
    margin-top: 16px;
  }
`;

export const QtdAndPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 46%;
`;

export const Qtd = styled.span`
  /* width: 100%;
  max-width: 72px; */

  font-family: inherit;
  font-weight: 400;
  font-size: 14px;

  text-align: center;
`;

export const Price = styled.span`
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
`;
