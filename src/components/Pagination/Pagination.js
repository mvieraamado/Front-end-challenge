import { Col, Button } from "react-bootstrap";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Pagination = (props)=> {
    const { onPrev, onNext, disabledButtonPrev, disabledButtonNext } = props;

    return (
        <>
            <Col xs={4} className="text-end">
                <Button
                variant="secondary"
                onClick={onPrev}
                disabled={disabledButtonPrev}
                >
                   <BsArrowLeft/>
                </Button>
            </Col>
            <Col xs={4} className="text-end">
                <Button
                variant="secondary"
                onClick={onNext}
                disabled={disabledButtonNext}
                >
                    <BsArrowRight/>
                </Button>
            </Col>
        </>
    )
}

export default Pagination;