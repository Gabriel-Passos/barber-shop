import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  > div {
    margin-top: 12px;

    > div {
      margin-top: 8px;

      span {
        margin: 8px 0 0;
        text-decoration: line-through;
        color: var(--color-gray-300);
        font-family: inherit;
        font-size: 16px;
        font-weight: 400;

        &:last-child {
          color: var(--color-black);
          text-decoration: none;
          font-family: inherit;
          font-size: 16px;
          font-weight: 600;
        }
      }

      .promotion-price {
        margin-left: 8px;
      }
    }

  }
`;

export const Promotion = styled.span`
  position: absolute;
  z-index: 99;
  top: 24px;

  background-color: var(--color-brown-500);
  color: var(--color-white);

  font-family: inherit;
  font-weight: 500;

  padding: 0 8px;
`;

export const Button = styled.button`
  width: 100%;
  display: block;
  color: var(--color-gray-300);
  text-decoration: none;
  font-family: inherit;
  font-size: 15px;
  font-weight: 400;
  text-align: left;

  border: 0;
  background: transparent;

  > img {
    width: 100%;
    max-width: 380px;
    height: auto;
  }

  &:hover {
    color: var(--color-brown-500);
  }
`;
