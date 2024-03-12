import { MainContainer, SearchForm, SearchInput, SearchButton } from "./style"
import { BiSearch } from "react-icons/bi"

export const Search = () => {
    return(
        <MainContainer>
            <SearchForm action="">
                <SearchInput 
                placeholder="Enter currency symbol: Example BTC"
                type="text"/>
                <SearchButton
                type="submit"
                >
                    <BiSearch
                    size={30}
                    color="#fff"
                    />
                </SearchButton>
            </SearchForm>
        </MainContainer>
    )
}