import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakPoints: {
      bgScreen: number;
      mdScreen: number;
      smScreen: number;
    };
    maxWidth: {
      bgScreen: string;
      mdScreen: string;
      tablet: string;
      mobile: string;
    };
  }
}
