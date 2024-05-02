import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;
`;

export const ButtonLanguage = styled.button`
  background: none;
  border: none;
`;

export const ImgLanguage = styled.img`
  display: flex;
  width: 40px;
  height: 40px;
  cursor: pointer;

  &:hover {
    transform: scale(1.08);
  }
`;
