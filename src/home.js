import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./home.css"
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import { IoCallOutline } from "react-icons/io5";

import home_img from "./home_img.png";
import bulb from "./bulb.png";

import {useTypewriter,cursor} from "react-simple-typewriter";

import logo from "./image.png";


import Service from './Service';
import Develop from './develop';
import Project from './project';
import Feedback from './feedback';
import Footer from './footer';
import Courses from './courses';

import { Link } from "react-router-dom";

import website_logo2 from "./website_logo2.png";
// import website_logo1 from "./website_logo1.png";


function Home() {
    // render(){
        const [typeEffect]=useTypewriter({
            words:["Solutions.","Services.","Business.","Institute."],
            loop:{},
            typeSpeed:130,
            deleteSpeed:40
        })
        return(
          <div>
            <div className="home_container">
                <div className="home_sub_con">
                    <div className="nav_top">
                        <div className="three_word">
                            <div className="contact">
                            <IoCallSharp className="nav_top_icon" />
                            
                            <h6>+91 9841483195</h6>
                            </div>
                            <div className="contact">
                            <MdEmail className="nav_top_icon" />
                            <h6>duhzineitsolutions@gmail.com</h6>
                            </div>
                            <div className="contact">
                            <FaLocationDot className="nav_top_icon" />
                            <h6>7999 Main Street, Thalambur, Chennai 600130</h6>
                            </div>
                        </div>

                        <div className="nav_top_icon">
                        
                        <FaFacebookSquare className="nav_icon" />
                        <FaTwitter  className="nav_icon" />
                        <FaGooglePlusG className="nav_icon" />
                        <FaLinkedinIn className="nav_icon" />
                        </div>

                    </div>
                    {/* nav second */}
                    <div className="nav_con">
                    <Navbar expand="lg" className="bg-body-tertiary nav_sub_con ">
      <Container fluid>
        <Navbar.Brand href="#" ><img src={website_logo2} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="section">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link> */}
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
           <Nav.Link href="#action1" className="nav_a"> <a ><Link to="/">home</Link></a></Nav.Link>
            <Nav.Link href="#action2" className="nav_a"> <a ><Link to="/about">About</Link></a></Nav.Link>
            <Nav.Link href="#action2" className="nav_a"><a ><Link to="/services">services</Link></a></Nav.Link>
            <Nav.Link href="#action2" className="nav_a"><a ><Link to="/courses">courses</Link></a></Nav.Link>
            <Nav.Link href="#action2" className="nav_a"><a ><Link to="/careers">Careers</Link></a></Nav.Link>
            <a><Link to="/contact"><button className="nav_button" >Contact Us</button></Link></a>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
                        </div>

                        {/* home contant */}

                        <div className="home_content">
                            <div className="home_content_one">
                                
                                <h6>We are Offering more Services Like</h6>
                                <h1>IT <span>{typeEffect}</span></h1>
                                <h4>We Provide Smart Business Solutions<img src={bulb} /></h4>
                               

                            </div>
                            <div className="home_content_two">
                                <img src={home_img} />

                            </div>

                        </div>



                </div>

            </div>
            <Service />
              <Develop />
           <Project/>
           <Feedback />
            <Footer />

            </div>
            
            
        )
    }
// }
export default Home;