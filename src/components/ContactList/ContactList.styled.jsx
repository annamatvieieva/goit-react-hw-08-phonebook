import styled from 'styled-components';

export const ContactListBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
  box-sizing: border-box;
  height: 250px;
  width: 400px;
  list-style-type: inherit;
  overflow-y: auto;
`;

export const Contact = styled.li`
  width: 100%;
  min-height: 60px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.yellow};
  border-radius: ${p => p.theme.radii.md};

  button {
    width: 50px;
    background-color: ${p => p.theme.colors.yellow};
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.yellow};
    border-radius: ${p => p.theme.radii.round};

    &:active {
      border: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
    }
  }
`;
