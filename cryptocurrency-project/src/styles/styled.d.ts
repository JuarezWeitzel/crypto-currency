import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      globalBackground: string;
      text: string;
    };
  }
}
