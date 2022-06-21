import { StyledSection } from "./../GeneralStyles/style"
import {AiFillHtml5} from "react-icons/ai"
import {IoLogoCss3} from  "react-icons/io"
import {DiJavascript,DiReact, DiPostgresql} from "react-icons/di"
import {FaNodeJs} from "react-icons/fa"
import {SiTypescript } from "react-icons/si"

const Techs = ()=>{
    return(
        <StyledSection>
            <h2>Techs</h2>
            <div className="list--container">
                <ul>
                    <h3>Aprendidas</h3>
                    <li><AiFillHtml5/> HTML 5</li>
                    <li><IoLogoCss3/> CSS 3</li>
                    <li><DiJavascript/> Javascript</li>
                    <li><DiReact/> React JS</li>
                </ul>
                <ul>
                    <h3>Aprendendo</h3>
                    <li><FaNodeJs/> Node</li>
                    <li><DiPostgresql/> Postgre</li>
                    <li><SiTypescript/> Typescript</li>
                </ul>
            </div>
        </StyledSection>
    )
}

export default Techs