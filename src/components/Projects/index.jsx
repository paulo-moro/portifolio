import { projects } from "../../assets/Projects"
import { StyledSection } from "./../GeneralStyles/style"


const ProjectList = ()=>{
    return(
        <StyledSection>
            <h2>Projetos</h2>
            <ul className="project--list">
                {projects?.map(({id,name,module,description,concepts})=>(
                    <li key={id}>
                        <h3>{name}</h3>
                        <span>{module}</span>
                        <section>
                        <div className="concepts--container">
                        {concepts?.map((concept)=>(
                            <span>{concept}</span>
                        ))}

                        </div>
                        </section>
                    </li>
                ))}
            </ul>
        </StyledSection>
    )
}

export default ProjectList