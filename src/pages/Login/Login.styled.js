import styled from 'styled-components';
import img from '../../images/login.jpg';

export const LoginPageStyle = styled.main`
  flex-direction: column;
  align-items: flex-end;
  background-image: url(${img});

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
