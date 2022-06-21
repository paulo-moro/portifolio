import { StyledSection } from "./../GeneralStyles/style"
import certificado from "./../../assets/img/certificado.jpg"

const Qualifications = ()=>{
    return(
        <StyledSection>
            <h2>Qualificações</h2>
            <ul>  
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