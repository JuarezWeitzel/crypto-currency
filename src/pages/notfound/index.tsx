import { Footer } from "../../components/footer";
import notFound from '../../assets/404.png'
import * as S from "./style";
import { useTranslation } from "react-i18next";

export const Notfound = () => {
  const { t } = useTranslation()

  return (
    <S.Container>
      <S.ContainerError>
        <img src={notFound} alt="" />
        <S.Link to="/"> {t("button404")} </S.Link>
      </S.ContainerError>
      <Footer />
    </S.Container>
  );
};
