import styled from 'styled-components';

export const Container = styled.section`
  background-color: var(--color-brown-500);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: var(--max-width-content);

  margin: 0 auto;
  padding: 40px 16px;

  > div {
    display: flex;
    align-items: center;

    strong {
      font-family: 'Abril Fatface', sans-serif;
      color: var(--color-white);
      font-size: 32px;
      font-weight: 400;
      text-transform: capitalize;
      letter-spacing: .2px;
      line-height: 40px;
      margin-left: 8px;
    }
  }

  p {
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: .5px;
    color: var(--color-white);
  }

  strong {
    font-family: 'Abril Fatface', sans-serif;
    color: var(--color-white);
    font-size: 25px;
    font-weight: 500;
    letter-spacing: .4px;
    text-transform: uppercase;
  }

  @media (max-width: 1124px) {
    flex-direction: column;
    text-align: center;

    > p {
      margin: 16px 0;
      line-height: 28px;
    }
  }
`;
