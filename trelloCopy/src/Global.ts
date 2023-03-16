import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,body{
    height: 100vh;
  background: linear-gradient(to bottom, #6220EB, #8F16EB, #8E70EA);
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
}
:focus{
    outline: 0;
}
`