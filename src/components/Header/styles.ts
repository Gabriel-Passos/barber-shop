import styled from 'styled-components';

interface LinkProps {
  cartAmount?: number;
}

export const Container = styled.header`
  width: 100%;
  background-color: var(--color-black);

  display: flex;
  flex-direction: column;

  padding: 0 16px;

  > div {
    width: 100%;
    max-width: var(--max-width-content);

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto;
  }
`;

export const Link = styled.a<LinkProps>`
  display: block;
  position: relative;

  &::after {
    content: '${props => props.cartAmount}';
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 9px;
    color: var(--color-white);
    font-weight: 400;

    top: -5px;
    right: -5px;
    z-index: 99;

    width: 20px;
    height: 20px;

    padding-top: 1px;

    border-radius: 50%;

    background: var(--color-brown-500);
  }
`;

export const Logo = styled.div`
  padding: 31px 0;
`;

export const Navbar = styled.nav`
  width: 100%;
  max-width: 620px;

  display: flex;
  align-items: center;

  > a {
    display: block;
    padding: 24px 30px 24px 0;
    position: relative;

    text-decoration: none;

    font-family: 'Poppins', Arial, sans-serif;
    font-size: 14px;
    line-height: 23px;
    font-weight: 600;
    letter-spacing: 0.8px;
    color: var(--color-white);

    &:hover {
      color: var(--color-brown-550);
    }

    & + a {
      padding: 24px 30px;
    }

    &::after {
      content: "";
      position: absolute;
      width: 1px;
      height: 30px;
      right: 0;
      top: 21px;
      background-image: url('./images/menu-border.png');
      background-attachment: scroll;
      background-repeat: no-repeat;
      background-position: 0px 0px;
    }

    &:last-child {
      ::after {
        height: 0;
      }
    }
  }
`;