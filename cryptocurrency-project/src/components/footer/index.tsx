import { FaGithub } from "react-icons/fa6"
import * as S from './style'
import { FaInstagram, FaLinkedin } from "react-icons/fa"

export const Footer = () => {
    return(
        <S.Footer>
        &copy; JuarezWeitzel - All Rights Reserved - 2024
        <div>
          <S.Ancor target="_blank" href="https://github.com/JuarezWeitzel">
            <span>
              <FaGithub size={25} />
            </span>
          </S.Ancor>
          <S.Ancor
            target="_blank"
            href="https://www.instagram.com/juarezbzweitzel/"
          >
            <span>
              <FaInstagram size={25} />
            </span>
          </S.Ancor>
          <S.Ancor
            target="_blank"
            href="https://www.linkedin.com/in/juarez-beethoven-1b8a77172/"
          >
            <span>
              <FaLinkedin size={25} />
            </span>
          </S.Ancor>
        </div>
      </S.Footer>
    )
}