import { useContext } from "react";
import { Table } from "react-bootstrap";
import { BsPencilSquare, BsThreeDotsVertical, BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ProjectContext } from "../../context/ProjectContext";
import ModalProject from "../Modal/Modal";

const DesktopCard = ()=> {
    const { projects, deleteConfirm } = useContext(ProjectContext);

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>Project info</th>
                        <th>Project manager</th>
                        <th>Assigned to</th>
                        <th>Status</th>
                        <th className="text-end">Action</th>
                    </tr>
                </thead>
                <tbody> 
                    {projects?.map((project) => ( 
                        <tr key={project.id}>
                            <td>
                                <h5>{project.name}</h5>
                                <p>Creation date: {project.date.toLocaleString('en-US')}</p>
                            </td>
                            <td>
                                <img src="../../avatar.png" alt="logo" className="rounded-circle border border-1 mx-2" height={30}/>
                                {project.projectManager}
                            </td>
                            <td>
                                <img src="../../avatar.png" alt="logo" className="rounded-circle border border-1 mx-2" height={30}/>
                                {project.assignedTo}
                            </td>
                            <td>{project.status}</td>
                            <td>
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
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default DesktopCard;