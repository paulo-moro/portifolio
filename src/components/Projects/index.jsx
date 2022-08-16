
import { projects } from "../../assets/Projects"
import { StyledSection } from "./../GeneralStyles/style"
import {AiFillGithub} from "react-icons/ai"
import {MdSettingsApplications} from "react-icons/md"


const ProjectList = ()=>{   

    const handleApp = (appUrl) =>{
        window.location.assign(appUrl)
    }
    const handleGit = (gitHubUrl) =>{
        window.location.assign(gitHubUrl)
    }

    return(
        <StyledSection id="projects" >
            <h2>Projetos</h2>
            <ul className="project--list">
                {projects?.map(({id,name, description,module, concepts, appUrl, gitHubUrl})=>(
                        
                    <li key={id}>
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <nav>
                            <button onClick={()=>handleApp(appUrl)}><MdSettingsApplications size="2em"/>Aplicação</button>
                            <button onClick={()=>handleGit(gitHubUrl)}><AiFillGithub size="2em"/>Github</button>
                        </nav>
                        
                    </li>                   
                ))}
                
            </ul>
        </StyledSection>
    )
}

export default ProjectList