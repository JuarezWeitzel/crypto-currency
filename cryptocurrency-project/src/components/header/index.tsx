import { HeaderContainer } from "./style";
import logoimg from "../../assets/logo.svg";
import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import Switch from 'react-switch';
import * as S from './style';

interface Props {
  toggleTheme(): void;
}

export const Header: React.FC<Props> = ({ toggleTheme }) => {
  const themeContext = useContext(ThemeContext);
  const title = themeContext?.title || "light";

  return (
    <HeaderContainer>

      <S.Link href="/">
        <img src={logoimg} alt="Logo Crypto" />
      </S.Link>


      <Switch
            onChange={toggleTheme}
            checked={title === "light"}
            uncheckedIcon={false}
            checkedIcon={false}
            onColor="#30beff"
            offColor="#444444"
            offHandleColor="#30beff"
            onHandleColor="#FFF"
            handleDiameter={15}
            width={40}
            height={20}
          />
    </HeaderContainer>
  );
};