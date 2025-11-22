import { Link as StyledLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface StyledProps {
    profit?: boolean;
    loss?: boolean;
  }

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivAnnouncement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

export const DetailDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 1050px;
    margin: auto;
    color: ${props => props.theme.colors.textDetailDiv};
    background-color: ${props => props.theme.colors.backgroundDetailDiv};
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
    color: #00aeff;
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
    background-color: ${props => props.theme.colors.backgroundDetailSection};
    border-radius: 8px;
`;

export const Color = styled.span<StyledProps>`
    font-weight: bolder;

    ${props =>
    props.profit &&
    css`
      color: #04941c;
    `}

  ${props =>
    props.loss &&
    css`
      color: #ff0044;
    `}
`;

export const Link = styled(StyledLink)`
    margin: 10px auto;
    padding: 10px 40px;
    text-align: center;
    color: ${props => props.theme.colors.textLink};
    text-decoration: none;
    font-size: 20px;
    background-color: ${props => props.theme.colors.backgroundLink};
    border-radius: 8px;
    transition: 0.4s;

    &:hover {
        background-color: #30beff;
        color: #fff;
    }
`;