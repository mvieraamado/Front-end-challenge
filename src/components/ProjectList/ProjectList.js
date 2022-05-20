import { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProjectContext } from "../../context/ProjectContext";
import CardProject from "../CardProject/CardProject";

const ProjectList = ()=> {
    const { projects } = useContext(ProjectContext);

    return(
        <>
            <Container>
                <Row>
                    <Col xs={12} className="pb-4 pt-2 d-flex flex-row justify-content-between">
                        <h3>My projects</h3>
                        <Link to="/create"><Button variant="danger">+ Add project</Button></Link>
                    </Col>
                </Row>
            </Container>
            <Container xs={12} className="px-5">
                {projects?.map((project) => (
                    <CardProject key={project.id} project={project}/>
                    )
                )}
            </Container>
        </>
        
    )
    
}

export default ProjectList;