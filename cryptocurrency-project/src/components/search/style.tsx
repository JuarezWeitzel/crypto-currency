import styled from "styled-components";

export const MainContainer = styled.main`
  margin: 0 14px;
`;

export const SearchForm = styled.form`
  display: flex;
  gap: 14px;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 8px;
  font-size: 15px;
  outline: none;
  border: none;
  border-radius: 8px;

  &::-webkit-input-placeholder {
    color: #000000;
    font: 15px verdana, arial, sans-serif;
  }

  @media screen and (max-width: 386px) {
    &::-webkit-input-placeholder {
      color: #000000;
      font: 12px verdana, arial, sans-serif;
    }
  }

  @media screen and (max-width: 324px) {
    &::-webkit-input-placeholder {
      color: #000000;
      font: 8.5px verdana, arial, sans-serif;
    }
  }
`;

export const SearchButton = styled.button`
  border: 0;
  background: transparent;
`;