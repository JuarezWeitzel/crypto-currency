import { Link as StyledLink } from 'react-router-dom';
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 144px);
  justify-content: space-between;
`;

export const ContainerError = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        max-width: 1080px;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        padding: 0 10px 24px;
    }
`;

export const Link = styled(StyledLink)`
    font-size: 20px;
    background-color: #00b7ff;
    padding: 10px 30px;
    margin: auto 20px auto;
    border-radius: 8px;
    color: #FFF;
    list-style-type: none;
    text-decoration: none;
    text-align: center;
    transition: 0.5s;

    &&:hover {
        background-color: #00d9ff;
        padding: 10px 30px;
        transform: scale(1.08);
    }

    @media screen and (max-width:350px){
        font-size: 14px;
    }
`;