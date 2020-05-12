import React, {Component} from "react";
import ImageCard from "./Image_Card";
import {CardColumns, Button} from 'react-bootstrap'
import './Image_List.css'
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

    addFive(){
        this.setState({imagesResult:this.state.images.splice(0,this.state.min + 5)})
        this.setState({min:this.state.min + 5 })
        window.scrollTo({behavior:'smooth'})
    }

    

    render() {
        return(
            <div id="columns">
                <CardColumns>
                    {this.state.imagesResult.map((e)=>{
                        return (<ImageCard image={e} key={e.id}/>)
                    })}
                </CardColumns>
                    <Button className="btn btn-primary btn-lg btn-block btn-info loader"  onClick={() => this.addFive()}>Load More</Button>

            </div>
        )
    }
}
export default ImageList;
