// eslint-disable-next-line
import React, { useState, setShow } from "react";
import { Card, Button, Container, Row, Modal } from "react-bootstrap";
import "./Image_Card.scss";
const ImageCard = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // eslint-disable-next-line
  const [image, setImage] = useState(props.image);
  // eslint-disable-next-line
  const [like, setLike] = useState(props.image.like);
  // eslint-disable-next-line
  const [liked, setLiked]= useState(false)

  function giveLike(id) {
    fetch(`https://apodgram-django-backend.herokuapp.com/like/${id}/`, {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {});
      setLiked(true)

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
                  disabled={liked}
                  onClick={() => {giveLike(`${image.id}`)
                }}
                >
                  {liked ? 'Unlike': 'Like'}
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
