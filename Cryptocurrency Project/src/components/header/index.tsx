import { Link } from 'react-router-dom'
import { HeaderContainer  } from './style'
import logoimg from '../../assets/logo.svg'

export const Header = () => {
    return(
        <HeaderContainer>
                <Link to="/">
                    <img src={logoimg} alt="Logo Crypto"/>
                </Link>
        </HeaderContainer>
    )
}