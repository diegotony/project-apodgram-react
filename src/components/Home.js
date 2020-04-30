import React, {Component} from "react";
import Menu from "./partials/Menu";
import ImageList from "./images/Image_List";
import Footer from "./partials/Footer";

class Home extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <ImageList/>
                <Footer/>
            </div>
        )
    }
}

export default Home;
