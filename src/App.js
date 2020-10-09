import React from "react"
import {Link, Route, Switch} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo1 from './Images/apanjanlogo1.jpeg'
import logo2 from './Images/apanjanlogo2.jpeg'

import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Gallery2020 from './Components/Gallery/Gallery2020'
import Gallery2019 from './Components/Gallery/Gallery2019'
import Gallery2018 from './Components/Gallery/Gallery2018'
import Gallery2017 from './Components/Gallery/Gallery2017'
import GalleryVideos from './Components/Gallery/GalleryVideos'

class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div>
          <Navbar bg="danger" expand="md" variant="dark">
            <Navbar.Brand as={Link} to="/home">
                <img src={logo1} alt="Apanjan" height="100px" width="150px" />
                <img src={logo2} alt="Apanjan" height="100px" width="250px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="align-right">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                <NavDropdown title="Gallery" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/gallery/2020">2020</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/gallery/2019">2019</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/gallery/2018">2018</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/gallery/2017">2017</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/gallery/videos">Videos</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
          <Switch>
            <Route component={Gallery2020} path="/gallery/2020" />
            <Route component={Gallery2019} path="/gallery/2019" />
            <Route component={Gallery2018} path="/gallery/2018" />
            <Route component={Gallery2017} path="/gallery/2017" />
            <Route component={GalleryVideos} path="/gallery/videos" />
            <Route component={About} path="/about" />
            <Route component={Contact} path="/contact" />
            <Route component={Home} path="/" />
          </Switch>
        
      </React.Fragment>
    )
  }
}

export default App;