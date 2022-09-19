import styled from 'styled-components';

export const FilterBox = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[4]}px;

  input {
    outline: none;
    width: 150px;
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};

    &:focus {
      border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
      box-shadow: 0px 2px 8px 0px ${p => p.theme.colors.accent};
    }
  }
`;
