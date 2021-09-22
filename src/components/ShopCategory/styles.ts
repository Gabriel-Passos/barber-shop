import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
    padding: 10px 16px;

    background-color: var(--color-brown-500);
    color: var(--color-white);
  }

  div {
    display: flex;
    flex-direction: column;

    padding: 16px;
    background-color: var(--color-gray-50);

    > a {
      padding: 4px 0;
      margin: 4px 0;
      font-family: 'Poppins', sans-serif;
      font-size: 13px;
      font-weight: 400;
      color: var(--color-gray-300);
      text-decoration: none;

      &:hover {
        color: var(--color-brown-500);
      }
    }
  }
`;
