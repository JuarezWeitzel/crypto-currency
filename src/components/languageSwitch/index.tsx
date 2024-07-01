import { useTranslation } from "react-i18next";
import br from "../../assets/flagBR.png";
import us from "../../assets/flagUS.png";

import * as S from "./style";

const languageOptions = [
  {
    name: "Português",
    value: "ptBR",
    flag: br,
  },
  {
    name: "English",
    value: "en",
    flag: us,
  },
];

export const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  return (
    <S.Container>
      {languageOptions.map((languageOptions) => (
        <S.ButtonLanguage
          key={languageOptions.value}
          onClick={() => {
            i18n.changeLanguage(languageOptions.value);
          }}
        >
          <S.ImgLanguage
            src={languageOptions.flag}
            alt={languageOptions.name}
            style={{
              border:
                i18n.language === languageOptions.value
                  ? "2px solid #0999ff"
                  : "none",
            }}
          />
        </S.ButtonLanguage>
      ))}
    </S.Container>
  );
};
