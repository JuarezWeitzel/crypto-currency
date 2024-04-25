import { FormEvent, useContext, useState } from "react";
import { MainContainer, SearchForm, SearchInput, SearchButton } from "./style";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "styled-components";

export const Search = () => {
  const themeContext = useContext(ThemeContext);
  const colors = themeContext?.colors;

  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();

    if (inputValue === "") return;

    navigate(`/detail/${inputValue}`);
  };

  return (
    <MainContainer>
      <SearchForm onSubmit={handleSearch}>
        <SearchInput
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Enter currency symbol: Example BTC"
          type="text"
        />
        <SearchButton type="submit">
          <BiSearch size={30} color={colors?.text} />
        </SearchButton>
      </SearchForm>
    </MainContainer>
  );
};
