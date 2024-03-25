import * as S from './style';

export const Loading = () => {
    return(
        <S.Container>
            <S.LoaderContainer>
                <S.Loader></S.Loader>
                <S.LoaderText>Loading...</S.LoaderText>
            </S.LoaderContainer>
        </S.Container>
    )
}