import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

interface SectionProps {
  whiteBackground?: boolean;
  negativeTop?: boolean;
  textAlignLeft?: boolean;
}

interface ContentProps {
  noPadding?: boolean;
}

interface DividerProps {
  lightLine?: boolean;
}

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-brown-500: #9e8462;
    --color-brown-550: #987f5f;

    --color-gray-50: #f7f7f7;
    --color-gray-300: #888888;
    --color-gray-800: #292929;
    --color-gray-850: #191919;
    --color-gray-900: #141414;

    --color-green-500: #008000;

    --color-blue-750: #10427a;

    --color-black: #000000;
    --color-white: #ffffff;

    --color-whatsApp: #25D366;
    --color-facebook: #3b5998;
    --color-instagram: #E1306C;
    --color-twitter: #1DA1F2;

    --max-width-content: 1240px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;

export const Divider = styled.p<DividerProps>`
  display: block;
  border-top: 1px solid ${props => props.lightLine 
    ? '#eeeeee'
    : 'var(--color-gray-800)'
  };
`;

export const Section = styled.section<SectionProps>`
  padding: 16px;
  
  background-color: ${props => props.whiteBackground 
    ? `var(--color-white)` 
    : `var(--color-gray-900)`
  };

  @media (max-width: 1124px) {
    margin-top: ${props => props.negativeTop ? '-32px' : '0'};
  }
`;

export const Content = styled.section<ContentProps>`
  max-width: var(--max-width-content);
  margin: 0 auto;

  padding: ${props => props.noPadding ? '0' : '60px 0 30px'};
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-Items: center;
  justify-content: center;

  margin-top: 50px;
`;
