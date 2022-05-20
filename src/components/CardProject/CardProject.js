import { useContext } from "react";
import { Col } from "react-bootstrap";
import { ProjectContext } from "../../context/ProjectContext";
import { BsThreeDotsVertical, BsTrash, BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const CardProject = ({project})=> {
    const { deleteProject } = useContext(ProjectContext);

    return (
        <div className="row p-2 my-2 border border-secondary">
            <Col xs={6}>
                <h5>{project.name}</h5>
                <p>Creation date: {project.date.toLocaleString('en-US')}</p>
                <img src="../../avatar.png" alt="logo" className="rounded-circle border border-1" height={40}/>
                <span className="px-2">{project.assignedTo}</span>
            </Col>
            <Col xs={6}>
                <div className="dropdown text-end">
                    <button id="dropdownMenuLink" className="btn btn-none" data-bs-toggle="dropdown" aria-expanded="false">
                        <BsThreeDotsVertical/>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <Link to={`/edit/${project.id}`} className="dropdown-item"><BsPencilSquare/> Edit</Link>
                        <li className="dropdown-item" onClick={()=> deleteProject(project)}><BsTrash/> Delete</li>
                    </ul>
                </div>
            </Col>
        </div>
    )
}

export default CardProject