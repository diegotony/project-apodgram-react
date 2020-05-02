import React, {Component} from "react";
import {Card,Button} from 'react-bootstrap'

class ImageCard extends Component{

    render() {
        const {image} = this.props
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image.url} />
                <Card.Body>
                    <Card.Title>{image.title}</Card.Title>
                    <Card.Text>
                        {image.explanation.substring(0,100)}...
                    </Card.Text>
                    <Card.Subtitle>
                        {image.date}
                    </Card.Subtitle>
                    <div>
                        <Button variant="primary" href={image.hdurl}>View HD</Button>
                    </div>

                </Card.Body>
            </Card>
        )
    }
}
export default ImageCard;
