import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const ShoppingCartContainer = styled.section`
  padding: 30px;
  background: var(--color-white);
  border-radius: 4px;
  
  footer {
    margin-top: 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    > p {
      color: var(--color-gray-300);
      text-align: justify;
      font-weight: 300;
    }

    > div {
      width: 100%;
      margin-top: 24px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      @media (max-width: 620px) {
        flex-direction: column-reverse;

        button {
          margin-top: 16px;
        }
      }
    }

    button {
      display: flex;
      align-items: center;

      background-color: var(--color-whatsApp);
      color: var(--color-white);
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${darken(0.06, '#25D366')};
      }

      > svg {
        margin-right: 8px;
      }
    }
  }

  @media (max-width: 1124px) {
    flex-direction: column;
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 8% 0 10%;
  
  @media (max-width: 733px) {
    margin: 0 0 10%;
  }

  div {
    display: flex;
    align-items: center;
    
    svg {
      margin-right: 8px;
    }
  
    strong {
      display: block;
  
    }
  }

  p {
    margin-top: 16px;
  }

  a {
    margin-top: 8px;
    padding: 8px 16px;
    background-color: var(--color-brown-500);
    color: var(--color-white);
    text-decoration: none;
    border-radius: 4px;
    font-weight: 500;
  }
`;

export const ProductContainer = styled.div`
  width: 100%;

  @media (max-width: 1124px) {
    overflow-x: scroll;
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    background-color: var(--color-white);
    text-align: left;
    padding: 12px;

    &:nth-child(2) {
      min-width: 160px;
    }
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid var(--color-gray-50);
    
    &:nth-child(2) {
      min-width: 160px;
    }
  }

  img {
    height: 100px;
  }

  strong {
    min-width: 160px;
    color: var(--color-gray-800);
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid var(--color-gray-50);
      border-radius: 4px;
      color: var(--color-gray-300);
      padding: 6px;
      width: 50px;
      text-align: center;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;

    svg {
      color: var(--color-brown-550);
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: ${darken(0.06, '#987f5f')};
      }
    }

    &:disabled {
      svg {
        color: ${lighten(0.25, '#987f5f')};
        cursor: not-allowed;
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: var(--color-gray-300);
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 16px;
  }
`;
