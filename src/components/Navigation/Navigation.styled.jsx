import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationList = styled.nav`
  display: flex;
  gap: ${p => p.theme.space[4]}px;
`;
export const NavigationElement = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};

  &.active {
    color: ${p => p.theme.colors.accent};
  }

  :hover {
    text-decoration: underline;
  }
`;
