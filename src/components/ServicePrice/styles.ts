import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  width: 100%;

  border-bottom: 1px solid var(--color-gray-300);

  margin-bottom: 32px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-bottom: 18px;

    a {
      font-family: inherit;
      font-size: 16px;
      font-weight: 500;
      
      color: var(--color-white);
      text-decoration: none;
    }
    
    p {
      font-family: inherit;
      font-size: 16px;
      font-weight: 500;
      color: var(--color-gray-300);
    }
  }
  
  > strong {
    color: var(--color-brown-550);
  }
  
  &:hover {
    a {
      transition: color .4s ease;
      color: var(--color-brown-550);
    }
    
    strong {
      transition: color .4s ease;
      color: var(--color-white);
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 1124px) {
    flex-direction: column;
  }
`;
