import React, {Component} from "react";
import ImageCard from "./Image_Card";
import {CardColumns, Button} from 'react-bootstrap'
import './Image_List.css'
class ImageList extends Component{
    state = {
        images :[],
        min: 10,
        pag:2

    }
    componentDidMount() {
        fetch( "https://apodgram-django-backend.herokuapp.com/images/", {mode:'cors'})
            .then(res => res.json())
            .then(data => {
                this.setState({images:data.results})
            
            }).catch()
    }

    addFive(){
        fetch(`https://apodgram-django-backend.herokuapp.com/images/?page=${this.state.pag}`,  {mode:'cors'})
        .then(res => res.json())
        .then(data => {
            for(let i = 0; i < 10 ; i++){
                this.state.images.push(data.results[i])
                // console.log("==> ",data.results[i])
                // this.setState({images:this.state.images.push(data.results[i])})
            }

            this.setState({pag:this.state.pag+1})
        })
        // this.setState({imagesResult:this.state.images.splice(0,this.state.min + 5)})
        // this.setState({min:this.state.min + 5 })
        // window.scrollTo({behavior:'smooth'})
    }

    

    render() {
        return(
            <div id="columns">
                <CardColumns>
                    {this.state.images.map((e)=>{
                        return (<ImageCard image={e} key={e.id}/>)
                    })}
                </CardColumns>
                    <Button className="btn btn-primary btn-lg btn-block btn-info loader"  onClick={() => this.addFive()}>Load More</Button>

            </div>
        )
    }
}
export default ImageList;
