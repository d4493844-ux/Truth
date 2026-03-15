import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html { scroll-behavior: smooth; }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  a { color: inherit; text-decoration: none; }
  button { cursor: pointer; border: none; background: none; font-family: inherit; }
  img { max-width: 100%; display: block; }
  input, textarea { font-family: inherit; }
  ul, ol { list-style: none; }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: ${({ theme }) => theme.colors.background}; }
  ::-webkit-scrollbar-thumb { background: ${({ theme }) => theme.colors.primary}; border-radius: 2px; }
  ::selection { background: ${({ theme }) => theme.colors.primary}; color: white; }
`;

export default GlobalStyles;
