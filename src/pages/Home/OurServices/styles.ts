import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 50px 0 60px;

  > div {
    img {
      -webkit-transform: rotateY(0deg);
      -moz-transform: rotateY(0deg);
      -ms-transform: rotateY(0deg);
      -o-transform: rotateY(0deg);
      transform: rotateY(0deg);
      transition: all 0.9s ease 0s;
      -webkit-transition: all 0.9s ease 0s;
      -moz-transition: all 0.9s ease 0s;
      -ms-transition: all 0.9s ease 0s;
      -o-transition: all 0.9s ease 0s;

      &:hover {
        -webkit-transform: rotateY(-180deg);
        -moz-transform: rotateY(-180deg);
        -ms-transform: rotateY(-180deg);
        -o-transform: rotateY(-180deg);
        transform: rotateY(-180deg);
        transition: all 0.9s ease 0s;
        -webkit-transition: all 0.9s ease 0s;
        -moz-transition: all 0.9s ease 0s;
        -ms-transition: all 0.9s ease 0s;
        -o-transition: all 0.9s ease 0s;
      }
    }
  }

  @media (max-width: 1124px) {
    justify-content: space-around;
    
    > div {
      display: none;
    }
  }

  @media (max-width: 733px) {
    flex-direction: column;

    > article:last-child {
      margin-top: 48px;
    }
  }
`;
