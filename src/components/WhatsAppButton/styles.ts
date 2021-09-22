import styled from 'styled-components';

export const Button = styled.a`
  display: flex;
  align-items: center;

  position: fixed;
  
  right: 0;
  bottom: 0;

  margin-right: 16px;
  margin-bottom: 40px;

  z-index: 9999;

  border-radius: 50%;

  padding: 16px;

  background-color: var(--color-whatsApp);

  transition: filter .3s ease;

  text-decoration: none;
  
  opacity: .9;
 
  &:hover {
    filter: brightness(0.8);
  }

  @media (max-width: 733px) {
    margin-bottom: 16px;
  }
`;
