import styled from 'styled-components';

export const Header = styled.header`
  height: 62px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.theme.space[4]}px;
  box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.5), 0px 2px 4px rgba(0, 0, 0, 0.1),
    0px 4px 8px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1);
  background-color: ${p => p.theme.colors.primary};
`;
