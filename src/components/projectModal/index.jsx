import { projects } from "../../assets/Projects"
import { StyledModalContainer } from "./style"


const ProjectModal = ({modalType, setModalType}) =>{
    
    const handleApp = () =>{
        window.location.assign(projects.find((project)=>project.name === modalType).appUrl)
    }
    const handleGit = () =>{
        window.location.assign(projects.find((project)=>project.name === modalType).gitHubUrl)
    }

    return(
        <StyledModalContainer>
            <div>
                <section>
                    {modalType}
                    <button onClick={()=>setModalType("")}>X</button>
                </section>
                <nav>
                    <button onClick={handleGit}>
                        Github
                    </button>
                    <button onClick={handleApp}>
                        Aplicação
                    </button>
                </nav>
            </div>
        </StyledModalContainer>
    )
}

export default ProjectModal