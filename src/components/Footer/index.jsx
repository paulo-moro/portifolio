import { StyledFooter } from "./style"
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"

const Footer = () =>{

    const RedirectToGit = ()=>{
        window.location.assign("https://github.com/paulo-moro")
    }

    const RedirectToLinkedin = ()=>{
        window.location.assign("https://www.linkedin.com/in/paulo-henrique-moro-dos-santos/")
    }
    return(
        <StyledFooter>
           

        

            <nav className="container--nav nav--outpage">
                <p onClick={RedirectToGit}><AiFillGithub size="30px"/></p>
                <p onClick={RedirectToLinkedin}><AiFillLinkedin size="30px"/></p>
            </nav>


        </StyledFooter>

    )
}

export default Footer