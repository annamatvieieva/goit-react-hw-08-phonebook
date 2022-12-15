import styled from 'styled-components';

export const UserMenuStyle = styled.div`
  display: flex;
  gap: ${p => p.theme.space[4]}px;
  align-items: center;
  justify-content: center;

  p {
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.yellow};
  }

  button {
    width: 70px;
    height: 30px;
    font-size: ${p => p.theme.fontSizes.s};
    text-transform: lowercase;
  }
`;
