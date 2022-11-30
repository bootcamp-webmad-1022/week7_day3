import projectsData from "./../../projects.json"
import { Link, useParams } from "react-router-dom"
import { useState } from "react"

const ProjectDetails = () => {

    const [projects, setProjects] = useState(projectsData)

    const { project_id } = useParams()

    const foundProject = projects.find(elm => elm._id === project_id)

    return (
        <>
            <h1>Detalles de proyecto {foundProject.name}</h1>
            <hr />
            <p>{foundProject.description}</p>
            <Link to="/projects">Volver a los proyectos</Link>
        </>
    )
}

export default ProjectDetails