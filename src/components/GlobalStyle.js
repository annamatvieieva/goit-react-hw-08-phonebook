import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  main {
    height: calc(100vh - 62px);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${p => p.theme.space[6]}px;
    background-size: cover;
    background-color: ${p => p.theme.colors.primary};
    overflow: hidden;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0px;
  }
  h1 {
    font-size: ${p => p.theme.fontSizes.xl};
    margin-bottom: ${p => p.theme.space[4]}px;
  }
  h2 {
    font-size: ${p => p.theme.fontSizes.l};
    margin-bottom: ${p => p.theme.space[3]}px;
  }
  ul,ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  button {
    width: 200px;
    height: 50px;
    background-color: ${p => p.theme.colors.yellow};
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.yellow};
    border-radius: ${p => p.theme.radii.sm};
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.bold};
    text-transform: uppercase;

    &:active {
      box-shadow: 0px 2px 8px 0px ${p => p.theme.colors.yellow};
    }
  }
  form {
    width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
	justify-content: center;
	align-items: center;
  padding: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.md};
  font-weight: ${p => p.theme.fontWeights.bold};
  }
  label {
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.space[3]}px;
    margin-bottom: ${p => p.theme.space[4]}px;
    text-transform: uppercase;

    input {
      outline: none;
      width: 400px;
      height: 30px;
      border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};

      &:focus {
        border: ${p => p.theme.borders.normal} ${p => p.theme.colors.yellow};
        box-shadow: 0px 2px 8px 0px ${p => p.theme.colors.yellow};
      }
    }
  }
`;
