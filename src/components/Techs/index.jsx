import { StyledSection } from "./../GeneralStyles/style"
import {AiFillHtml5} from "react-icons/ai"

import {FaNodeJs} from "react-icons/fa"
import {SiTypescript } from "react-icons/si"
import {FaPython} from "react-icons/fa"
import {SiDjango, SiJavascript,SiCsswizardry, SiReact, SiPostgresql} from "react-icons/si"

const Techs = ()=>{
    return(
        <StyledSection id="tech">
            <h2>Techs</h2>
            <div className="list--container">
                <section className="techs--container">
                    <h3>Aprendidas</h3>
                    <ul>
                        <li><AiFillHtml5 size={"2em"}/></li>
                        <li><SiCsswizardry size={"2em"}/></li>
                        <li><SiJavascript size={"2em"}/></li>
                        <li><SiReact size={"2em"}/></li>
                        <li><FaNodeJs size={"2em"}/></li>
                        <li><SiPostgresql size={"2em"}/></li>
                        <li><SiTypescript size={"2em"}/></li>
                    </ul>                       
                        
                </section>

                <section className="techs--container">
                    <h3>Aprendendo</h3>
                    <ul>
                        <li><FaPython size={"2em"}/></li>
                        <li><SiDjango size={"2em"}/></li>
                    </ul>

                </section>
                
            </div>
        </StyledSection>
    )
}

export default Techs