import styled from 'styled-components';

export const Container = styled.footer`
  background-color: var(--color-black);
`;

export const Content = styled.div`
  width: 100%;
  max-width: var(--max-width-content);
  margin: 0 auto 68px;
  padding: 75px 16px 0;

  display: flex;
  align-items: flex-start;

  /* display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px; */
  
  > div {
    width: 100%;
    max-width: 340px;

    padding-right: 24px;
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > article {
      display: flex;
      align-items: baseline;
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    & + div {
      width: 100%;
      max-width: 240px;
      padding: 0 24px;
    }

    &:last-child {
      padding-left: 24px;
      padding-right: 0;
    }
  }

  strong {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: var(--color-white);
    margin-bottom: 32px;
  }

  p {
    width: 98%;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    line-height: 24px;
    text-align: justify;
    color: var(--color-gray-300);
    vertical-align: baseline;
  }
  
  a {
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    font-weight: 400;
    color: var(--color-gray-300);
    text-decoration: none;
    margin-bottom: 16px;

    &:hover {
      color: var(--color-brown-550);
    }
  }
  
  svg {
    margin-right: 16px;
  }

  @media (max-width: 733px) {
    flex-direction: column;

    > div {
      max-width: 100%;

      padding-left: 0;
      margin-bottom: 16px;

      & + div {
        padding-left: 0;
      }

      &:last-child {
        padding-left: 0;
        margin-bottom: 0;
      }
    }
  }
`;

export const Copyright = styled.div`
  width: 100%;
  max-width: var(--max-width-content);
  height: auto;

  padding: 16px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;

  span {
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 1px;
    color: var(--color-gray-300);
    color: var(--color-gray-300);
  }

  @media (max-width: 733px) {
    flex-direction: column;

    > span {
      margin-bottom: 16px;
      order: -1;
    }
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;

  a {
    display: block;
    padding: 0 8px;
    margin: 0 4px;

    .facebook-icon {
      color: var(--color-gray-300);
      
      &:hover {
        color: var(--color-facebook);
      }
    }

    .twitter-icon {
      color: var(--color-gray-300);
      
      &:hover {
        color: var(--color-twitter);
      }
    }

    .instagram-icon {
      color: var(--color-gray-300);

      &:hover {
        color: var(--color-instagram);
      }
    }
  }

  @media (max-width: 733px) {
    margin-bottom: 16px;
  }
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-right: 8px;
    padding: 4px 8px;

    height: 26px;

    background-color: var(--color-blue-750);
    
    border-radius: 4px;

    > img {
      max-width: 28px;
      height: auto;

      object-position: center;
      vertical-align: baseline;
    }

    &:last-child {
      margin-right: 0;
      margin-left: 8px;
      padding: 0 8px;

      background-color: var(--color-white);
    }
  }

`;