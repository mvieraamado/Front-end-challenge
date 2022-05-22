import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Title from "../Title/Title";
import { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";
import MyForm from "../MyForm/MyForm";

const AddProject = ()=> {
    const { setProjects, projects } = useContext(ProjectContext);
    const navigate = useNavigate();

    const initialValues = {
        name: '',
        description: '',
        projectManager: '',
        assignedTo: '',
        status: '',
        id: projects.length + 1,
    }

    const createSubmit = values => {
        values.date = new Date();
        setProjects([values, ...projects]);
        navigate("/")
    }
    return (
        <Container fluid className="p-4">
            <Row className="p-4 d-flex justify-content-center">
                <Title props="Add project"/>
                <MyForm initialValues={initialValues} submitHandler={createSubmit} submitButton="Create project"/>
            </Row>
        </Container>
    )
}

export default AddProject;