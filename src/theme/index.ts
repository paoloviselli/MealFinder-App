// import original module declarations
import { DefaultTheme, createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import spacing, { SpacingInterface } from "./spacing";
import colors, { ColorsInterface } from "./colors";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    spacing: SpacingInterface;
    colors: ColorsInterface;
  }
}

const theme: DefaultTheme = {
  spacing,
  colors,
};

export const GlobalStyle = createGlobalStyle`
  ${reset}

`;

export default theme;
