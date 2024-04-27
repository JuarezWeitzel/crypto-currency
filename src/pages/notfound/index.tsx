import { Footer } from "../../components/footer";
import notFound from '../../assets/404.png'
import * as S from "./style";

export const Notfound = () => {
  return (
    <S.Container>
      <S.ContainerError>
        <img src={notFound} alt="" />
        <S.Link to="/">Back to Home. Click Here!</S.Link>
      </S.ContainerError>
      <Footer />
    </S.Container>
  );
};
