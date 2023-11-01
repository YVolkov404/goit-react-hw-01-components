import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

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

  h1,
  h2,
  h3,
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    object-fit: cover;
  }

  ul {
    list-style: none;
  }

  table, caption, tbody, thead, tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
