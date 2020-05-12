import React, { Component } from "react";
import { Card, Button, Container, Row } from 'react-bootstrap'
import './Image_Card.css'
class ImageCard extends Component {

    render() {
        const { image } = this.props
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
                            <Button className="btn-block view" href={image.hdurl}>View HD</Button>

                            <Button className="btn-block details" href={image.hdurl}>More Details</Button>


                        </Row>


                    </Container>




                </Card.Body>
            </Card>


        )
    }
}
export default ImageCard;
