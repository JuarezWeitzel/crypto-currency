import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      textTableCell: string;

      textTableHeader: string;

      backgroundTable: string;

      globalBackground: string;
      text: string;
    };
  }
}
