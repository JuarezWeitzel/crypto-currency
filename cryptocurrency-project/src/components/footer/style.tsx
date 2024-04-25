import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme.colors.backgroundHeaderAndFooter};
  color: ${(props) => props.theme.colors.textColorHeaderAndFooter};
  padding: 24px;
  margin: 24px auto 0;
  border-top: 5px solid ${(props) => props.theme.colors.borderHeaderAndFooter};
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  gap: 10px;

  @media screen and (max-width: 550px) {
    font-size: 12px;
  }
`;

export const Ancor = styled.a`
  margin: 8px;
  color: ${(props) => props.theme.colors.text};

  @media screen and (max-width: 550px) {
    div {
      display: flex;
      flex-direction: row;
      font-size: 12px;
    }
  }

  &:hover span {
    color: ${(props) => props.theme.colors.textLinkTableHover};
  }

  &:visited {
    color: ${(props) => props.theme.colors.textColorHeaderAndFooter};
  }
`;
