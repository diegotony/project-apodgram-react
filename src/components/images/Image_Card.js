// eslint-disable-next-line
import React, { useState, setShow } from "react";
import { Card, Button, Container, Row, Modal } from "react-bootstrap";
import "./Image_Card.scss";
const ImageCard = (props) => {
  // eslint-disable-next-line
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [image, setImage] = useState(props.image);
  let [like, setLike] = useState(props.image.like)
  let check = false;

  function giveLike (id){
    //   https://apodgram-django-backend.herokuapp.com/like/87/
    fetch(`https://apodgram-django-backend.herokuapp.com/like/${id}/`,  {mode:'cors'})
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })

  }

  return (
    <Card className="card">
      <Card.Img className="img" variant="top" src={image.url} />
      <Card.Body className="body">
        <Card.Title className="title">
          
          <strong>{image.title}</strong>
        </Card.Title>
        <Card.Text>{image.explanation.substring(0, 100)}...</Card.Text>
        <Container>
          <Row>
            <Button
              className="btn-block view "
              variant="info"
              onClick={handleShow}
            >
              More Details
            </Button>

            <Modal show={show} animation={false} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{image.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>{image.explanation}</Modal.Body>
              <Modal.Footer className="buttons">
                  <Button
                    className="btn btn-primary view"
                    onChange={() =>giveLike(`${image.id}`)}
                  > Like 
                  {like}
                 
                    {/* {check ? `Like Y${image.like} + 1`: `Like N ${image.like}`} */}
                  </Button>
                  <Button
                    className="btn-warning view"
                    onClick={() => window.open(`${image.hdurl}`, "_blank")}
                  >
                    View HD
                  </Button>
                  <Button className="btn btn-danger view" onClick={handleClose}>
                    Close
                  </Button>
              </Modal.Footer>
            </Modal>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};
export default ImageCard;
