import styled from 'styled-components';
import img from '../../images/register.jpg';

export const RegisterPageStyle = styled.main`
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
