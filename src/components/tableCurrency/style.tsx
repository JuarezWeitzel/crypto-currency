import { Link as StyledLink } from "react-router-dom";
import styled, { css } from "styled-components";

interface StyledTdProps {
  profit?: boolean;
  loss?: boolean;
}

export const CatchError = styled.div`
  text-align: center;
  margin-top: 20px;
  color: #c40000;
  font-weight: bolder;
  padding: 0 14px;

  @media screen and (max-width: 300px) {
    font-size: 10px;
  }
`;

export const ImageLogo = styled.img `
    width: 25px;
    height: 25px;
    transition: all 1s;

    &:hover {
        transform: scale(1.5);
        z-index: 99;
    }

    @media screen and (max-width: 400px) {
        width: 15px;
        height: 15px;
    }
`;

export const TableRow = styled.tr`
  background-color: ${(props) => props.theme.colors.backgroundTable};
`;

export const TableHeader = styled.th`
  font-size: 18px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.textTableHeader};
  padding: 14px;
  text-align: center;

  &:first-child {
    border-radius: 8px 0 0 8px;
  }

  &:last-child {
    border-radius: 0 8px 8px 0;
  }
`;

export const LabelTableCell = styled.td<StyledTdProps>`
  color: ${(props) => props.theme.colors.textTableCell};
  padding: 14px;
  text-align: center;
  font-weight: 600;

  ${(props) =>
    props.profit &&
    css`
      color: #04941c;
    `}

  ${(props) =>
    props.loss &&
    css`
      color: #ff0044;
    `}

    &:first-child {
    border-radius: 8px 0 0 8px;
  }

  &:last-child {
    border-radius: 0 8px 8px 0;
  }

  @media screen and (max-width: 600px) {
    &:before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      color: #ffffff;
      text-transform: uppercase;
    }
  }
`;

export const Link = styled(StyledLink)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.textLinkTable};
  transition: color 0.5s;
  font-weight: bold;
  font-size: 16px;

  &:hover {
    color: ${(props) => props.theme.colors.textLinkTableHover};
  }

  @media screen and (max-width: 300px) {
    font-size: 12px;
  }
`;

export const Pages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;

  @media screen and (max-width: 400px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
    grid-gap: 5px;
    margin: auto 14px auto;
  }
`;

export const ButtonPage = styled.button`
  background-color: transparent;
  border-radius: 8px;
  border: none;
  padding: 5px 10px;
  font-weight: 900;
  color: ${(props) => props.theme.colors.textButtonPage};

  &:hover {
    color: ${props => props.theme.colors.textLinkTableHover};
  }
`;

export const ResponsiveTable = styled.table`
  margin: 0;
  padding: 14px;
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0 8px;
  overflow-x: auto;

  @media screen and (max-width: 700px) {
    thead {
      display: none;
    }

    ${TableRow} {
      display: block;
      border-radius: 8px;
      margin-bottom: 3px;
    }

    ${LabelTableCell} {
      display: flex;
      justify-content: space-between;
      padding: 8px;
      font-size: 14px;
      text-align: left;
    }

    ${LabelTableCell}::before {
      content: attr(data-label);
      font-weight: bold;
      color: ${(props) => props.theme.colors.textTableCell};
      text-transform: uppercase;
    }

    @media screen and (max-width: 300px) {
      ${LabelTableCell} {
        font-size: 10px;
      }
    }
  }
`;
