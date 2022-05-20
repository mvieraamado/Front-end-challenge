import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { ProjectContext } from "../../context/ProjectContext";
import MyForm from "../MyForm/MyForm";
import Title from "../Title/Title";

const EditProject = ()=> {
  const { projects, setProjects } = useContext(ProjectContext);
  const navigate = useNavigate();
  const {id} = useParams();
  const selectedProject = projects.find(project => project.id === id);

  const initialValues = {
    name: selectedProject.name,
    description: selectedProject.description,
    projectManager: selectedProject.projectManager,
    assignedTo: selectedProject.assignedTo,
    status: selectedProject.status,
    id: selectedProject.id
  }

  const editSubmit = (values) => {
    values.date = new Date();
    const editedProject = [...projects];
    const index = projects.indexOf(selectedProject);
    editedProject[index] = values;
    setProjects(editedProject);
    navigate("/")
  }

  return (
    <>
      <Container fluid className="p-5">
          <Row>
              <Title props="Edit Project"/>
              <MyForm initialValues={initialValues} submitHandler={editSubmit} submitButton="Save changes"/>
          </Row>
      </Container>
    </>
    
  )
}

export default EditProject;