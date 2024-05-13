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

import { Link } from "react-router-dom";

// import cor_icon1 from "./cor_icon1";

import cou_icon1 from "./cou_icon1.png";
// import cou_icon2 from "./cou_icon2.png";
import cou_icon22 from "./partner_exchange.png";

import cou_icon3 from "./cou_icon3.png";
import cou_icon4 from "./cou_icon4.png";
import cou_icon5 from "./cou_icon5.png";
import cou_icon6 from "./cou_icon6.png";
import cou_icon7 from "./laundry.png";
import cou_icon8 from "./recommend.png";
import cou_icon9 from "./weekend.svg fill.png";
import cou_icon10 from "./referral.svg fill.png";
import cou_icon11 from "./self-learning.svg fill.png";
import cou_icon12 from "./partner_exchange.png";
import cou_icon13 from "./oval-bg-3.svg.png";
import cou_icon14 from "./adaptive_audio_mic.png";

import website_logo2 from "./website_logo2.png";
import website_logo1 from "./website_logo1.png";


function Courses() {
   
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
            <Nav.Link href="#action2" className="nav_a"> <a ><Link to="/about">About</Link></a></Nav.Link>
            <Nav.Link href="#action2" className="nav_a"><a ><Link to="/services">services</Link></a></Nav.Link>
            <Nav.Link href="#action2" className="nav_a nav_aa"><a ><Link to="/courses">courses</Link></a></Nav.Link>
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
                    <div className=" course_top">
                    <h6>Ready to create something amazing?</h6>
                    <h1>Join with us</h1>
                    <h6>You're going to need a big smile, a small ego, and a bucketload of curiosity and drive. It all starts here.
Join our team with your passion </h6>
                        <button>View Current Batch Openings <FaArrowDown />
</button>
                    
                    </div>

                    <div className="course_img_con">
                      <div className="course_box">
                        <div className="course_img">
                          <img src={course_img1}/>
                        <button><MdOutlineTimer /> 20 Weeks  </button>
                        </div>
                        <h5>UXUI Design</h5>
                        <img src={course_types1} className="course_type" />
                        <div className="course_name">
                          <img src={course_ins1}  />
                          <div className="course_sir">
                          <h6>Santhosh Kumar R </h6>
                          <h6> Instructor</h6>
                          </div>
                        </div>
                      </div>

                      <div className="course_box">
                        <div className="course_img">
                          <img src={course_img2}/>
                        <button><MdOutlineTimer /> 20 Weeks  </button>
                        </div>
                        <h5>Full Stack Development</h5>
                        <img src={course_types2} className="course_type" />
                        <div className="course_name">
                          <img src={course_ins2}  />
                          <div className="course_sir">
                          <h6>Vijay </h6>
                          <h6> Instructor</h6>
                          </div>
                        </div>
                      </div>

                      <div className="course_box">
                        <div className="course_img">
                          <img src={course_img1}/>
                        <button><MdOutlineTimer /> 20 Weeks  </button>
                        </div>
                        <h5>Graphics Design</h5>
                        <img src={course_types3} className="course_type" />
                        <div className="course_name">
                          <img src={course_ins3}  />
                          <div className="course_sir">
                          <h6>Sri Saran </h6>
                          <h6> Instructor</h6>
                          </div>
                        </div>
                      </div>

                      <div className="course_box">
                        <div className="course_img">
                          <img src={course_img2}/>
                        <button><MdOutlineTimer /> 20 Weeks  </button>
                        </div>
                        <h5>Digital Marketing</h5>
                        <img src={course_types4} className="course_type" />
                        <div className="course_name">
                          <img src={course_ins4}  />
                          <div className="course_sir">
                          <h6>Rahul </h6>
                          <h6> Instructor</h6>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="benefit_con">
                      <h1>Benifits of Joining Us</h1>

                      <div className="benefit_sub_con">
                        <div className="benefit_box">
                        {/* <FaInternetExplorer /> */}
                        <img src={cou_icon1} />
                        <h5>Online Courses</h5>
                        <h6>Embracing flexibility with remote work options,
                           allowing employees to work from the comfort
                                        of their homes or preferred locations.</h6>
                        </div>

                        <div className="benefit_box">
                        {/* <FaInternetExplorer /> */}
                        <img src={cou_icon22} />
                        <h5>Live Courses</h5>
                        <h6>Fueling productivity and satisfaction with
                         complimentary coffee and snacks to keep
                               everyone energized throughout the day.</h6>
                        </div>

                        <div className="benefit_box">
                        {/* <FaInternetExplorer /> */}
                        <img src={cou_icon3} />
                        <h5>Professional Mentors</h5>
                        <h6>Assisting in securing the future with a provident
fund scheme to help employees save for their
retirement.</h6>
                        </div>

                        <div className="benefit_box">
                        {/* <FaInternetExplorer /> */}
                        <img src={cou_icon4} />
                        <h5>Don’t Pay Course Feess</h5>
                        <h6>Rewarding exceptional performance with
attractive bonuses to recognize and motivate
our team members.</h6>
                        </div>

                        <div className="benefit_box">
                        {/* <FaInternetExplorer /> */}
                        <img src={cou_icon5} />
                        <h5>Fun Activities</h5>
                        <h6>Providing a fun-filled workplace environment
with indoor games and activities for relaxation
and stress relief.</h6>
                        </div>

                        <div className="benefit_box">
                        {/* <FaInternetExplorer /> */}
                        <img src={cou_icon6} />
                        <h5>Internet Allowance</h5>
                        <h6>Providing an internet allowance to support
remote work and ensure smooth connectivity
for seamless collaboration.</h6>
                        </div>

                        <div className="benefit_box">
                        {/* <FaInternetExplorer /> */}
                        <img src={cou_icon7} />
                        <h5>Uniforms</h5>
                        <h6>Occasional surprises and gifts as tokens of
appreciation to make our team members feel
valued and recognized.</h6>
                        </div>

                        <div className="benefit_box">
                        {/* <FaInternetExplorer /> */}
                        <img src={cou_icon8} />
                        <h5>24/7 Support</h5>
                        <h6>Offering support and benefits for expectant
mothers, ensuring a smooth transition during
maternity leave and return to work.</h6>
                        </div>

                        <div className="benefit_box">
                        {/* <FaInternetExplorer /> */}
                        <img src={cou_icon9} />
                        <h5>Flexible Hour Classes</h5>
                        <h6>Enjoying a consistent work-life balance with
guaranteed weekends off for relaxation and
personal time.</h6>
                        </div>

                        <div className="benefit_box">
                        {/* <FaInternetExplorer /> */}
                        <img src={cou_icon10} />
                        <h5>Referral Rewards</h5>
                        <h6>Encouraging employees to refer qualified
candidates and rewarding successful referrals
with attractive incentives.</h6>
                        </div>

                        <div className="benefit_box">
                        {/* <FaInternetExplorer /> */}
                        <img src={cou_icon11} />
                        <h5>1 to 1 Mentoring</h5>
                        <h6>Promoting continuous learning and growth by
providing resources and support for self-
directed learning opportunities.</h6>
                        </div>

                        <div className="benefit_box">
                        {/* <FaInternetExplorer /> */}
                        <img src={cou_icon12} />
                        <h5>Placement Support</h5>
                        <h6>Access to regular training sessions and
workshops to enhance professional growth and
stay updated with the latest industry trends.</h6>
                        </div>

                        <div className="benefit_box">
                        {/* <FaInternetExplorer /> */}
                        <img src={cou_icon13} />
                        <h5>100% Internship Opportunity</h5>
                        <h6>Comprehensive medical insurance coverage to
prioritize the well-being and health of our
employees.</h6>
                        </div>

                        <div className="benefit_box">
                        {/* <FaInternetExplorer /> */}
                        <img src={cou_icon14} />
                        <h5>100% Placement Assistance</h5>
                        <h6>Offering competitive compensation packages
to attract and retain top talent in the industry.</h6>
                        </div>

                      </div>


                    </div>

                    <div className="future_con">
                      <h1>Let’s Discuss your <span>Future Carrer</span></h1>
                      <h6>Do you have an idea that you want to bring to life? Contact us today & get in touch with our experts!</h6>
                      <button>Contact Us!</button>


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
// }
export default Courses;