import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
const GlobalStyle = createGlobalStyle`
${normalize()}
html{
  font-size:16px;
  box-sizing:border-box
}
  body * {
   margin: 0;
   padding: 0;
   box-sizing:border-box;
}
`;

export default GlobalStyle;
