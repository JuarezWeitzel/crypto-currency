import { Link } from "react-router-dom";
import { HeaderContainer } from "./style";
import logoimg from "../../assets/logo.svg";
import { useThemeContext } from "../../context/theme/themeContext";
import Switch from 'react-switch';

export const Header = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoimg} alt="Logo Crypto" />
      </Link>

      <Switch
        onChange={toggleTheme}
        checked={theme.title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </HeaderContainer>
  );
};
