import React, { Component } from "react";
import {Carousel } from "react-bootstrap";
import './Carrusel.css'
class Carrusel extends Component {
  render() {
    return (
      <div id="carrusel">
        <Carousel>
          <Carousel.Item>
            <img
            width={900} height={500}
              className="d-block w-100"
              src="https://firebasestorage.googleapis.com/v0/b/apodgram-react.appspot.com/o/HorseShoeSky_Lane_3000.jpg?alt=media&token=113f0afc-be0a-4c9f-a65e-1258f9fb5d60"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
            width={900} height={500}
              className="d-block w-100"
              src="https://firebasestorage.googleapis.com/v0/b/apodgram-react.appspot.com/o/midnightmist1rms.jpg?alt=media&token=a26f8d77-1f30-47d6-a36a-0c8838345826"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item>
            <img
            width={900} height={500}
              className="d-block w-100"
              src="https://firebasestorage.googleapis.com/v0/b/apodgram-react.appspot.com/o/ivan_iss_big.jpg?alt=media&token=321f1b08-7528-4819-8cc0-864420553919"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
            width={900} height={500}
              className="d-block w-100"
              src="https://firebasestorage.googleapis.com/v0/b/apodgram-react.appspot.com/o/LuneVenusMK_brunier.jpg?alt=media&token=b9f42894-0b32-42b3-adc7-dca1f4f0920f"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Carrusel;
