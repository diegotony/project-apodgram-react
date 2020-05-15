import React, { useState, setShow } from "react";
import { Card, Button, Container, Row, Modal } from 'react-bootstrap'
import './Image_Card.scss'
const ImageCard = (props) => {

    const [show] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [image] = useState(props.image)
    return (
        <Card className="card" >
            <Card.Img className="img" variant="top" src={image.url} />
            <Card.Body className="body">
                <Card.Title className="title"> <strong>{image.title}</strong>  </Card.Title>
                <Card.Text>
                    {image.explanation.substring(0, 100)}...
                    </Card.Text>
                {/* <Card.Subtitle>
                            {image.date}
                        </Card.Subtitle> */}

                <Container>
                    <Row>

                        <Button className="btn-block view " variant="info" onClick={handleShow}>
                            More Details
                             </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{image.title}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>{image.explanation}</Modal.Body>
                            <Modal.Footer>
                                <Button className="btn-block view" onClick={()=> window.open(`${image.hdurl}`, "_blank")}>View HD</Button>
                                <Button className="btn-block view"  variant="danger" onClick={handleClose}>
                                    Close
                                    </Button>

                            </Modal.Footer>
                        </Modal>

                    </Row>


                </Container>




            </Card.Body>
        </Card>


    )

}
export default ImageCard;
