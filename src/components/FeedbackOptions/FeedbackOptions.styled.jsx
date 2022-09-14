import styled from 'styled-components';

export const OptionsElement = styled.button`
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: 0px 1px 10px 0px ${p => p.theme.colors.secondary};
  background-color: ${p => p.theme.colors.background};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: capitalize;
  cursor: pointer;

  &:active {
    background-color: ${p => p.theme.colors.accent};
  }
`;
