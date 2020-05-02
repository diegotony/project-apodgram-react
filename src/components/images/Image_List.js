import React, {Component} from "react";
import ImageCard from "./Image_Card";
import {CardColumns} from 'react-bootstrap'

class ImageList extends Component{
    state = {
        images :[],
        imagesResult: [],
        length: 0,
        min: 10,

    }
    componentDidMount() {
        fetch( "https://apodgram-django-backend.herokuapp.com/images/", {mode:'cors'})
            .then(res => res.json())
            .then(data => {

                let i ;
                let image_size_10 = []
                this.setState({images:data})
                this.setState({length:data.length})

                for (i = 0; i < 10; i++){
                    image_size_10.push(data[i])
                }
                this.setState({imagesResult:image_size_10})
            }).catch()
    }

    render() {
        return(
            <div>
                <CardColumns>
                    {this.state.imagesResult.map((e)=>{
                        return (<ImageCard image={e} key={e.id}/>)
                    })}
                </CardColumns>

            </div>
        )
    }
}
export default ImageList;
