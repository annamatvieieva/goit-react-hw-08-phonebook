import styled from 'styled-components';

export const FormBox = styled.form`
  width: 300px;
  height: 250px;
  display: flex;
  flex-direction: column;
	justify-content: center;
	align-items: center;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[2]}px;
  border: ${p => p.theme.borders.normal};
  font-weight: ${p => p.theme.fontWeights.bold};

  label {
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
  }

  button {
    width: 100px;
    background-color: ${p => p.theme.colors.background};
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
    border-radius: ${p => p.theme.radii.sm};

    &:active {
      background-color: ${p => p.theme.colors.accent};
      border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
    }
  }
`;