import { Link as StyledLink } from 'react-router-dom';
import styled from "styled-components";

export const ContainerError = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const Message = styled.p`
    margin: 30px auto;
    color: #ff0000;
    font-size: 35px;
    font-weight: bolder;
`;

export const Link = styled(StyledLink)`
    font-size: 20px;
    background-color: #00b7ff;
    padding: 10px 30px;
    border-radius: 8px;
    color: #FFF;
    list-style-type: none;
    text-decoration: none;
    transition: 0.5s;

    &&:hover {
        background-color: #00d9ff;
        padding: 10px 30px;
    }
`;