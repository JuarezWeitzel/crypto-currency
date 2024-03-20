import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface StyledTdProps {
  profit?: boolean;
  loss?: boolean;
}

export const StyledTable = styled.table`
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0 8px;
`;

export const StyledTr = styled.tr`
  background-color: #201e1e;
`;

export const StyledTh = styled.th`
  font-size: 14px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #FFF;
  padding: 14px;
  text-align: center;
`;

export const StyledLabelTd = styled.td<StyledTdProps>`
  color: #BBB;
  padding: 14px;
  text-align: center;

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

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #30beff;
  transition: color 0.5s;
  font-weight: bold;
  font-size: 16px;

  &:hover {
    color: #ffffff;
  }
`;

export const ResponsiveTable = styled(StyledTable)`
  @media screen and (max-width: 700px) {
    border: 0;

    thead {
      clip: rect(0 0 0 0);
      position: absolute;
    }

    ${StyledTr} {
      border-bottom: 1px solid #ddd;
      display: block;
    }

    ${StyledLabelTd} {
      border-bottom: 1px solid rgba(255, 255, 255, 0.16);
      display: block;
      font-size: 14px;
      text-align: right;
    }

    ${StyledLabelTd}::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      color: #FFF;
      text-transform: uppercase;
    }
  }
`;
