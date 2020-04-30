import React, {Component} from "react";
import ImageCard from "./Image_Card";
import {CardColumns} from 'react-bootstrap'
class ImageList extends Component{
    render() {
        return(
            <div>
                <CardColumns>
                    <ImageCard/>
                    <ImageCard/>
                    <ImageCard/>
                </CardColumns>

            </div>
        )
    }
}
export default ImageList;
