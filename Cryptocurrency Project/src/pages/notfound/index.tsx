import * as S from './style';

export const Notfound = () => {
    return(
        <S.ContainerError>
            <S.Message>Error 404! Page does not exist! 🥺</S.Message>
            <S.Link to="/">Back to Home. Click Here! 🔙</S.Link>
        </S.ContainerError>
    )
}