import React, { Component } from "react";
import { Container, Row, Jumbotron } from "react-bootstrap";
import "./About.css";
class About extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="jumbo">
          <h1>About</h1>
          <p>
            ApodGram is a website that collects information from the
            <a href="https://api.nasa.gov/"> NASA API <strong>APOD</strong> </a> , with the aim of
            sharing the information obtained.
          </p>
         
        </Jumbotron>

        <Jumbotron className="jumbo">
        <h2>
          Astronomy Picture of the Day
          </h2>
          <p>
            One of the most popular websites at NASA is the Astronomy Picture of
            the Day. In fact, this website is one of the most popular websites
            across all federal agencies. It has the popular appeal of a Justin
            Bieber video. This endpoint structures the APOD imagery and
            associated metadata so that it can be repurposed for other
            applications. In addition, if the concept_tags parameter is set to
            True, then keywords derived from the image explanation are returned.
            These keywords could be used as auto-generated hashtags for twitter
            or instagram feeds; but generally help with discoverability of
            relevant imagery.
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default About;
