import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 350px) {
    display: flex;
    gap: 2px;
  }
`;

export const ButtonLanguage = styled.button`
  background: none;
  border: none;
`;

export const ImgLanguage = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;

  &:hover {
    transform: scale(1.08);
  }

  @media screen and (max-width: 350px) {
    display: flex;
    width: 30px;
    height: 30px;
  }
`;
