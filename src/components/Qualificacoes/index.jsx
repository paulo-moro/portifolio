import { StyledSection } from "./../GeneralStyles/style"
import certificado from "./../../assets/img/certificado.jpg"

const Qualifications = ()=>{
    return(
        <StyledSection id="qualification">
            <h2>Qualificações</h2>
            <ul className="qualification--container">  
                <li>
                    <h3>Front-end</h3>
                    <figure>
                        <img src={certificado} alt="Certificado Kenzie" />
                    </figure>
                </li>
            </ul>
        </StyledSection>
    )
}

export default Qualifications