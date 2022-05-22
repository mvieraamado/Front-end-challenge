import { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProjectContext } from "../../context/ProjectContext";
import DesktopCard from "../DesktopCard/DesktopCard";
import MobileCard from "../MobileCard/MobileCard";

const ProjectList = ()=> {
    const { projects } = useContext(ProjectContext);

    return (
        <>
            <Container className="my-3">
                <Row>
                    <Col xs={12} className="pt-2 d-flex flex-row justify-content-between">
                        <h4>My projects</h4>
                        <Link to="/create"><Button variant="danger">+ Add project</Button></Link>
                    </Col>
                </Row>
            </Container>
            <Container xs={12} className="px-2">
                {projects?.map((project) => (
                    <MobileCard key={project.id} project={project}/>
                    )
                )}
                <Row className="desktopCard py-4">
                    <DesktopCard/>
                </Row>
            </Container>
        </> 
    )
    
}

export default ProjectList;