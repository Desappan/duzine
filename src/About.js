import React from "react";
import "./About.css";
import "./careers.css";

import Courses from './courses';
import "./Services_two.css";


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

import { MdOutlineTimer } from "react-icons/md";

import course_img1 from "./course_img1.png";
import course_types1 from "./course_types1.png";
import course_ins1 from "./coures_ins1.png";

import course_img2 from "./course_img2.png";
import course_types2 from "./course_types2.png";
import course_ins2 from "./coures_ins2.png";

// import course_img3 from "./course_img3.png";
import course_types3 from "./course_types3.png";
import course_ins3 from "./coures_ins3.png";

import course_types4 from "./course_types4.png";
import course_ins4 from "./coures_ins4.png";


import "./courses.css";

import { FaArrowDown } from "react-icons/fa6";


import { FcOnlineSupport } from "react-icons/fc";
import { FaInternetExplorer } from "react-icons/fa";


import "./footer.css";
// import { IoCallSharp } from "react-icons/io5";
// import { MdEmail } from "react-icons/md";
// import { FaLocationDot } from "react-icons/fa6";

// import logo from "./image.png";

import about from"./about1.png";

import { Link } from "react-router-dom";

import website_logo2 from "./website_logo2.png";
import website_logo1 from "./website_logo1.png";


function About(){
    return(

        <div className="home_container">
        <div className="home_sub_con">
            
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
            <Nav.Link href="#action2" className="nav_a nav_aa"> <a ><Link to="/about">About</Link></a></Nav.Link>
            <Nav.Link href="#action2" className="nav_a"><a ><Link to="/services">services</Link></a></Nav.Link>
            <Nav.Link href="#action2" className="nav_a"><a ><Link to="/courses">courses</Link></a></Nav.Link>
            <Nav.Link href="#action2" className="nav_a"><a ><Link to="/careers">Careers</Link></a></Nav.Link>
            <a><Link to="/contact"><button className="nav_button" >Contact Us</button></Link></a>
</Navbar.Collapse>
</Container>
</Navbar>
                </div>

        </div>
        {/* course con */}
        <div className="course_con">
          <div className="course_sub_con">
            <div className="about_con">
                <div className="about_img_con">
                <img src={about}/>

                </div>

                
                <div className="about_word">
                    <h2>Overview</h2>
                    <h6>Duhzine was started to be a leading player in the Web designing and Software development business and create a mark for ourselves as a company that develops inspiring websites which are not only attractive but
                         also productive in terms of creating inquiries and generating business. </h6>
                         <h6>We don’t stop at just building attractive websites but also assist in the marketing of client's websites with a host of allied
                             services viz., digital marketing, SEO, SMM, keywords, paid ads, etc.</h6>
                             <button>Know More</button>

                </div>


            </div>
           

            

             

              
             
            
            {/* <Footer /> */}
          </div>




        </div>

        <div className="footer_con">
    <div className="footer_sub_con">
        <div className="contact_con">
            <div className="contact_box">
            <IoCallSharp  className="contact_icon"/>
            <div className=" contact_name">
                <h6>PHONE</h6>
                <h6>+91 9841483195</h6>
            </div>
            </div>

            <div className="contact_box">
            <MdEmail className="contact_icon"/>

            <div className=" contact_name">
                <h6 className="email_h6">EMAIL</h6>
                <h6 className="email_h6">duhzineitsolutions@gmail.com</h6>
            </div>
            </div>

            <div className="contact_box">
            <FaLocationDot className="contact_icon" />

            <div className=" contact_name">
                <h6>LOCATION</h6>
                <h6>S2 Stalin Complex</h6>
            </div>
            </div>

            <div className="contact_button">
                <button>CONTACT ME</button>

            </div>

            

        </div>
        <div className="footer_hole_con">
            <div className="footer_hole_sub_con">
                <div className="footer_box">
                    <h3>Company</h3>
                    <img src={website_logo1} />
                    <p>Works & News</p>
                    <p>Careers </p>
                    <p>Courses</p>
                    <p>Reviews</p>

                </div>

                <div className="footer_box">
                    <h3>Services</h3>
                    <p>Web Development</p>
                    <p>Mobile Development</p>
                    <p>On Demand Apps</p>
                    <p>IT Services</p>
                    <p>Logos & Branding</p>

                </div>

                <div className="footer_box">
                    <h3>Websites</h3>
                    <p>E Commerce Applications</p>
                    <p>Business Management Apps</p>
                    <p>Booking Applications</p>
                    <p>Healthcare Services</p>
                    <p>Social Media Platform</p>

                </div>

                <div className="footer_box">
                    <h3>Course</h3>
                    <p>UXUI Design</p>
                    <p>Full Stack Development</p>
                    <p>Full Stack Development</p>
                    <p>Graphics Design</p>
                    <p>Content Creator</p>

                </div>
                

            </div>
            <div className="footer_p">
            <p>Copyright © 2023 Duhzine IT Solutions Pvt Ltd. All Rights Reserved</p>
            

            </div>
            

        </div>

        
        

   


    </div>

    


</div>



    </div>

    

    )

}
export default About;