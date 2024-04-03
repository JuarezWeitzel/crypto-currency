import { Link as StyledLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface StyledProps {
    profit?: boolean;
    loss?: boolean;
  }

export const Container = styled.div`
    text-align: center;
`;

export const DetailDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    margin: 10px auto 30px;
    color: #FFF;
    background-color: #444444;
    padding: 10px;
    border-radius: 8px;

    p {
        display: flex;
        width: 100%;
        justify-content: space-between;
        border-bottom: 2px dashed #444444;
        margin-bottom: 5px;
    }

    span, p {
        font-size: 20px;

        @media screen and (max-width: 450px) {
        font-size: 15px;
    }

        @media screen and (max-width: 330px) {
        font-size: 11px;
    }
    }
`;

export const DetailName = styled.h1`
    color: #30beff;
    margin: 0px auto;
`;

export const DetailSymbol = styled.h2`
    margin: 10px auto 10px;
`;

export const DetailSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #30beff;
    border-radius: 8px;
`;

export const Color = styled.span<StyledProps>`
    font-weight: bolder;

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
`;

export const Link = styled(StyledLink)`
    padding: 10px 40px;
    color: #FFF;
    text-decoration: none;
    font-size: 20px;
    background-color: #444444;
    border-radius: 8px;
    transition: 0.4s;

    &:hover {
        background-color: #30beff;
    }
`;