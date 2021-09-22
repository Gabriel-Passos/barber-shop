import styled from 'styled-components';

import breadcumb from '../../assets/images/breadcumb.jpg';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 14px;
  padding: 24px 16px;
  background-image: url(${breadcumb});
  background-position: center 0px;
  background-attachment: scroll;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  width: 100%;
  max-width: var(--max-width-content);

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;

  h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
    font-weight: 600;
    color: var(--color-black);
    text-transform: capitalize;
  }

  > nav {
    display: flex;
    align-items: center;
    float: none;
    text-align: center;

    height: auto;
    
    a {
      font-family: 'Poppins', sans-serif;
      font-size: 14px;
      font-weight: 400;
      color: var(--color-gray-850);
      text-transform: capitalize;
      text-decoration: none;

      margin-right: 8px;

      &:hover {
        color: var(--color-brown-500);
      }

      & + a {
        margin: 0 8px;
      }
    }

    span {
      margin-left: 8px;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        font-weight: 400;
        color: var(--color-black);
        text-transform: capitalize;
        cursor: text;

        margin-left: 8px;

        @media (max-width: 733px) {
          display: none;
        }
      }
    }
  }

  @media (max-width: 733px) {
    flex-direction: column-reverse;
    text-align: center;

    > h3 {
      margin-top: 8px;
    }
  }
`;
