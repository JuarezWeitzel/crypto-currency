import { HeaderContainer } from "./style";
import logoimg from "../../assets/logo.svg";
import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import Switch from "react-switch";
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import * as S from "./style";
import { LanguageSwitch } from "../languageSwitch";

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

      <S.DivOptions>
      <LanguageSwitch />
      <Switch
        onChange={toggleTheme}
        checked={title === "light"}
        uncheckedIcon={false}
        checkedIcon={false}
        onColor="#ffffff"
        offColor="#444444"
        offHandleColor="#183690"
        onHandleColor="#fff200"
        handleDiameter={25}
        width={50}
        height={20}
        uncheckedHandleIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              color: "#FFF",
            }}
          >
            <FaMoon size={14} />
          </div>
        }
        checkedHandleIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <CiSun size={25} />
          </div>
        }
      />
      </S.DivOptions>
    </HeaderContainer>
  );
};
