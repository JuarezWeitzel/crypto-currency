import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.backgroundHeaderAndFooter};
  width: 100%;
  height: 120px;
  padding: 0 24px 0;
  margin-bottom: 24px;
  border-bottom: 5px solid ${props => props.theme.colors.borderHeaderAndFooter};
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;

  

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

  @media screen and (max-width: 350px) {
    img {
      width: 150px;
    }

  @media screen and (max-width: 300px) {
    img {
      width: 120px;
    }
  }
}
`;