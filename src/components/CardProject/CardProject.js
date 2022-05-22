import { useContext } from "react";
import { Col } from "react-bootstrap";
import { ProjectContext } from "../../context/ProjectContext";
import { BsThreeDotsVertical, BsTrash, BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import ModalProject from "../Modal/Modal";

const CardProject = ({project})=> {
    const { setShowModal } = useContext(ProjectContext);

    const deleteConfirm = ()=> setShowModal(true);

    return (
        <div className="row p-2 cardProject">
            <Col xs={8}>
                <h5>{project.name}</h5>
                <p>Creation date: {project.date.toLocaleString('en-US')}</p>
                <img src="../../avatar.png" alt="logo" className="rounded-circle border border-1" height={30}/>
                <span className="px-2">{project.assignedTo}</span>
            </Col>
            <Col xs={4}>
                <div className="dropdown text-end">
                    <button id="dropdownMenuLink" className="btn btn-none" data-bs-toggle="dropdown" aria-expanded="false">
                        <BsThreeDotsVertical/>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <Link to={`/edit/${project.id}`} className="dropdown-item pb-2"><BsPencilSquare/> Edit</Link>
                        <li className="dropdown-item" onClick={()=> deleteConfirm()}><BsTrash/> Delete</li>
                        <ModalProject project={project}/>
                    </ul>
                </div>
            </Col>
        </div>
    )
}

export default CardProject;