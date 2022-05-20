import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { ProjectContext } from "../../context/ProjectContext";

const ModalProject = ({project})=> {
  const { handleCloseModal, deleteProject, showModal } = useContext(ProjectContext);
  
    return (
      <>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Esto es</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete the project?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button variant="danger" onClick={()=>deleteProject(project)}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default ModalProject;