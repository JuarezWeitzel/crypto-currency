import { useLoading } from '../../context/loading/loadingContext';
import * as S from './style';

export const Loading = () => {
    const { loading } = useLoading();

    return(
        (loading && loading === true ? (
        <S.Container>
            <S.LoaderContainer>
                <S.Loader></S.Loader>
                <S.LoaderText>Loading...</S.LoaderText>
            </S.LoaderContainer>
        </S.Container>
        ) : (
            <>
            </>
        ))
    )
}