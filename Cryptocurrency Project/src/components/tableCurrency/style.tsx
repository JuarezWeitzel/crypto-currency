import { Link as StyledLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface StyledTdProps {
  profit?: boolean;
  loss?: boolean;
}

export const TableRow = styled.tr`
  background-color: #444444;
`;

export const TableHeader = styled.th`
  font-size: 14px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #FFF;
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
  color: #ffffff;
  padding: 14px;
  text-align: center;

  &:first-child {
    border-radius: 8px 0 0 8px;
  }

  &:last-child {
    border-radius: 0 8px 8px 0;
  }

  ${props =>
    props.profit &&
    css`
      color: #12f98a;
    `}

  ${props =>
    props.loss &&
    css`
      color: #f91257;
    `}

  @media screen and (max-width: 600px) {
    &:before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      color: #FFF;
      text-transform: uppercase;
    }
  }
`;

export const Link = styled(StyledLink)`
  text-decoration: none;
  color: #30beff;
  transition: color 0.5s;
  font-weight: bold;
  font-size: 16px;

  &:hover {
    color: #ffffff;
  }
`;

export const ResponsiveTable = styled.table`
  margin: 0;
  padding: 14px;
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0 8px;

  @media screen and (max-width: 700px) {
    border: 0;

    thead {
      clip: rect(0 0 0 0);
      position: absolute;
    }

    ${TableRow} {
      border-bottom: 1px solid #ddd;
      display: block;
    }

    ${LabelTableCell} {
      border-bottom: 1px solid rgba(255, 255, 255, 0.16);
      display: block;
      font-size: 14px;
      text-align: right;
    }

    ${LabelTableCell}::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      color: #FFF;
      text-transform: uppercase;
    }
  }
`;
