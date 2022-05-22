import { Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const Title = ({props})=> {
    return( 
        <Col xs={12} className="pb-4 pt-2 d-flex flex-row justify-content-start"> 
            <span className='py-2'><BsArrowLeft/></span>  
            <Link to="/"><Button variant="white">Back</Button></Link>
            <h4>{props}</h4>
        </Col>
    )
}

export default Title;