import React, { Component } from "react";
import Menu from "./partials/Menu";
import ImageList from "./images/Image_List";
import Footer from "./partials/Footer";
import './Home.css'
import { Container, Row } from 'react-bootstrap'
class Home extends Component {
    render() {
        return (
            <div >
                <Menu />
                <Container fluid>
                    <Row>
                        <ImageList />
                    </Row>
                    <Row>
                        <Footer />
                    </Row>

                </Container>

            </div>
        )
    }
}

export default Home;
