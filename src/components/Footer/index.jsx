import { StyledFooter } from "./style"
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"

const Footer = () =>{
    return(
        <StyledFooter>
           

            <nav className="container--nav nav--page">
                <p>Sobre</p>
                <p>Tecnologias</p>
                <p>Qualificações</p>
                <p>Projetos</p>
                <p>Contato</p>                
            </nav>

            <nav className="container--nav nav--outpage">
                <p><AiFillGithub size="30px"/></p>
                <p><AiFillLinkedin size="30px"/></p>
            </nav>


        </StyledFooter>

    )
}

export default Footer