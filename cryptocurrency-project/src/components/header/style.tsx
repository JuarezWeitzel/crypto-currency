import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  max-width: 1080px;
  padding: 0 14px;
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

export const Link = styled.a`
  cursor: pointer;

  @media screen and (max-width: 450px) {
    img {
      width: 250px;
    }
  }

  @media screen and (max-width: 300px) {
    img {
      width: 170px;
    }
  }
`;