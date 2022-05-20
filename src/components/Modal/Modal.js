import { Button, Modal } from "react-bootstrap";

const ModalProject = ({show, setShow, setProject, index})=> {
  
    const handleClose = () => setShow(false);

    const deleteProject = (id)=> {
        setProject((item) => item.filter((e) => e !== id));
        handleClose();
    }
  
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Esto es</Modal.Title>
          </Modal.Header>
          <Modal.Body>Esta seguro que desea eliminar el proyecto?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={()=>deleteProject(index)}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default ModalProject;