import logoimg from '../../assets/logo.svg'
import * as S from './style'

export const Header = () => {
    return(
        <S.HeaderContainer>
                <S.Link href="/">
                    <img src={logoimg} alt="Logo Crypto"/>
                </S.Link>
        </S.HeaderContainer>
    )
}