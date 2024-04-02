import { Link as StyledLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  max-width: 1080px;
  margin: 0 auto;

  @media screen and (max-width: 350px) {
    img {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80%;
      margin: 0 auto;
    }
  }
`;
