import { useState } from "react"
import { Link } from "react-router-dom"
import { projects } from "../../assets/Projects"
import ProjectModal from "../projectModal"
import { StyledSection } from "./../GeneralStyles/style"


const ProjectList = ()=>{   
    const [modalType, setModalType] =useState("")
    const handleModal = (name)=>{
        setModalType(name)
    }
    return(
        <StyledSection>
            <h2>Projetos</h2>
            <ul className="project--list">
                {projects?.map(({id,name})=>(
                        
                    <li key={id} onClick={()=>handleModal(name)}>
                        <h3>{name}</h3>
                        
                    </li>                   
                ))}
                {modalType && <ProjectModal modalType={modalType} setModalType={setModalType}/>}
            </ul>
        </StyledSection>
    )
}

export default ProjectList