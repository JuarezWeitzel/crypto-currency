
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      backgroundButtonPage: string;

      textLinkTableHover: string;
      textLinkTable: string;

      textTableCell: string;

      textTableHeader: string;

      textLink: string;
      backgroundLink: string;

      backgroundDetailSection: string;

      textDetailDiv: string;
      backgroundDetailDiv: string;

      backgroundSearch: string;

      backgroundTable: string;

      background: string;
      text: string;
      textButtonPage: string;
    };
  }
}
