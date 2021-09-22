import styled from 'styled-components';

interface HourProps {
  closed?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 824px;
  
  border-bottom: 1px solid var(--color-gray-300);

  margin: 0 auto 32px;
  
  strong {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: var(--color-white);
    
    margin-bottom: 18px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Hour = styled.div<HourProps>`
  strong {
    color: ${props => props.closed && `var(--color-brown-500)`};
  }
`;
