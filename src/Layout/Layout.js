import React from 'react';
import { Outlet, Link} from "react-router-dom";
import {Nav,Navbar,Container,Carousel} from 'react-bootstrap';
// import image1  from '../../image/header-banner-1.jpg';
// import image2  from '../../image/header-banner-2.jpg';
import './layout.css';

const Layout = () => {
    return (
    <>
        {/* <Navbar bg="dark" variant="dark" className="NavColor"> */}
        <Navbar className="NavColor">
                    <Container>
                    <Navbar.Brand as ={Link} to="/" ><h1>FootSports</h1></Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link as ={Link} to="/">Home</Nav.Link>
                    <Nav.Link as ={Link} to="/leagues">Leagues</Nav.Link>
                    <Nav.Link  as ={Link} to="/blogs">Blogs</Nav.Link>
                    <Nav.Link  as ={Link} to="/contact">About</Nav.Link>
                    </Nav>
             
                </Container>
        </Navbar>    
        

      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}

      <Outlet />
    </>
    );
};

export default Layout;