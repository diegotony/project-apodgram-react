import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Navbar,
  Nav,
} from "react-bootstrap";
import './App.css';
import Images from "./components/Images";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";


function App() {
  return (
    <div className="App">
       <Router>
        <div>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">
            <Link to={"/"}>  
              <img
                alt=""
                src="logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}

              Apodgram
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link to={"/"}> Home </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={"/images"}> Images </Link>
                </Nav.Link>
                {/* <Nav.Link>
                  <Link to={"/contact"}> Contact </Link>
                </Nav.Link> */}


                <Nav.Link>
                  <Link to={"/about"}> About </Link>
                </Nav.Link>

              </Nav>
              {/* <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/images" component={Images} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
