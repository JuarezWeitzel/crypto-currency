import * as S from './style';

export const Container = ({children}: {children: React.ReactNode}) => {
    return(
        <S.Container>
            {children}
        </S.Container>
    )
}