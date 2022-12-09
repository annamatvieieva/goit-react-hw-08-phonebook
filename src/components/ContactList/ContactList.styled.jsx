import styled from 'styled-components';

export const ContactListBox = styled.ul`
  padding-left: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[4]}px;
  list-style-type: inherit;
`;

export const Contact = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${p => p.theme.space[3]}px;
  gap: ${p => p.theme.space[3]}px;

  &:before {
    content: '';
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: ${p => p.theme.radii.round};
    background-color: ${p => p.theme.colors.black};
  }

  button {
    width: 50px;
    background-color: ${p => p.theme.colors.background};
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
    border-radius: ${p => p.theme.radii.sm};

    &:active {
      background-color: ${p => p.theme.colors.accent};
      border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
    }
  }
`;
