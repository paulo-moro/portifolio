
import { StyledHeader } from "./style"
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Perfil from "./../../assets/img/perfil.jpg"


const Header = () =>{

    const RedirectToGit = ()=>{
        window.location.assign("https://github.com/paulo-moro")
    }

    const RedirectToLinkedin = ()=>{
        window.location.assign("https://www.linkedin.com/in/paulo-henrique-moro-dos-santos/")
    }
    return(
        <StyledHeader>
            <section className="Personal_data">
                <figure>
                    <img src={Perfil} alt="Dev_img" />
                </figure>
                <h2>Paulo  Moro</h2>  
                <p onClick={RedirectToGit}><AiFillGithub size="30px"/></p>
                <p onClick={RedirectToLinkedin}><AiFillLinkedin size="30px"/></p>

            </section>
            <nav className="container--nav nav--inpage">
                <AnchorLink href='#tech'>Techs</AnchorLink>
                <AnchorLink href='#qualification'>Qualificação</AnchorLink>
                <AnchorLink href='#projects'>Projetos</AnchorLink>
            </nav>         

            


        </StyledHeader>

    )
}

export default Header