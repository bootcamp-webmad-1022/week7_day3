import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import projectsData from "./../../projects.json";

function ProjectsPage() {

    const [projects, setProjects] = useState([])

    // Fase de montaje: array vacío
    useEffect(() => {
        setProjects(projectsData)
    }, [])

    return (
        <div>
            <h2>Projects</h2>
            {projects.map((project) => {
                return (
                    <div key={project._id} className="project">
                        <h3>{project.name}</h3>
                        <p>{project.technologies}</p>
                        <Link to={`/projects/${project._id}`}>Ver detalles</Link>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
}

export default ProjectsPage;