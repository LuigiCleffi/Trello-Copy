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
  background-image: linear-gradient(45deg, #8587f3 30%, #fd84ae 100%);
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
}
:focus{
    outline: 0;
}
`