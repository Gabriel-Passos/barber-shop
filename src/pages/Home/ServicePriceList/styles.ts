import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 50px 0 20px;

  > div {
    width: 100%;
    max-width: 595px;
  }

  @media (max-width: 1124px) {
    justify-content: space-around;

    > div {
      width: 45%;
    }
  }

  @media (max-width: 733px) {
    flex-direction: column;
    align-items: flex-start;

    > div { 
      width: 100%;

      & + div {
        margin-top: 32px;
      }
    }
  }
`;
