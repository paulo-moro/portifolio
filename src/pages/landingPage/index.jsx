import AboutMe from "../../components/aboutMe"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ProjectList from "../../components/Projects"
import Qualifications from "../../components/Qualificacoes"
import Techs from "../../components/Techs"
import { StyledMain } from "./style"



const LandingPage = ()=>{
    return(
        <>
            <Header/>
            <StyledMain>
                <AboutMe/>
                <Techs />
                <Qualifications />
                <ProjectList  />
            </StyledMain>
            <Footer/>
        </>
    )
}

export default LandingPage