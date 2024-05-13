import React from "react";
import Slider from "react-slick";



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./feedback.css";
import { RiDoubleQuotesR } from "react-icons/ri";

import news1 from"./news1.png";
import news2 from"./news2.png";
import news3 from"./news3.png";

import review1 from "./review1.png";
// import review2 from "./review2.png";
import review3 from "./review3.png";
import review4 from "./review4.png";
import review5 from "./review5.avif";



function Feedback(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
        return(
        <div className="feedback_con">
        <div className="feedback_sub_con">
            <h6>Feedback</h6>
            <h2>What our Clients Say</h2>
            <div className="feedback_slider_con">

            <div className="feedback_slider_sub_con">
            <Slider {...settings}>
                <div className="feedback_box">
                    <RiDoubleQuotesR className="feedback_icon" />
                    <h5>We had an excellent experiencewith this company. They came in 4weeks early on the deadline with 
                        asuperior finished website.</h5>
                    <div className="feedback_img">
                        <img src={review1} />
                        <div className="feedback_img_name">
                            <h6>Akash</h6>
                            <h6>Ak Beauty & Spa</h6>
                        </div>
                    </div>
                </div>

                <div className="feedback_box">
                    <RiDoubleQuotesR className="feedback_icon" />
                    <h5>Good place to learn. Very good staffs and trainers. Trainers are  good because they always spent their valuable time and clarify  students doubts .
                         Easy to access. </h5>
                    <div className="feedback_img">
                        <img src={review4} />
                        <div className="feedback_img_name">
                            <h6>Akash</h6>
                            <h6>Ak Beauty & Spa</h6>
                        </div>
                    </div>
                </div>

                <div className="feedback_box">
                    <RiDoubleQuotesR className="feedback_icon" />
                    <h5>I am Very grateful to have Uday and his team. He's been able to  front-end and 
                        back-end developers who have greatly  the development of our application.</h5>
                    <div className="feedback_img">
                        <img src={review3} />
                        <div className="feedback_img_name">
                            <h6>Akash</h6>
                            <h6>Ak Beauty & Spa</h6>
                        </div>
                    </div>
                </div>

                <div className="feedback_box">
                    <RiDoubleQuotesR className="feedback_icon" />
                    <h5>such a great experience at Duhzine IT solutions. Ming was so helpful and   all my website
                         changes so fast and efficiently. An absolute  working with them.</h5>
                    <div className="feedback_img">
                        <img src={review5} />
                        <div className="feedback_img_name">
                            <h6>Akash</h6>
                            <h6>Ak Beauty & Spa</h6>
                        </div>
                    </div>
                </div>
{/* 
                <div className="feedback_box">
                    <RiDoubleQuotesR className="feedback_icon" />
                    <h5>We had an excellent experiencewith this company. They came in 4weeks early on the deadline with 
                        asuperior finished website.</h5>
                    <div className="feedback_img">
                        <img src={review2} />
                        <div className="feedback_img_name">
                            <h6>Akash</h6>
                            <h6>Ak Beauty & Spa</h6>
                        </div>
                    </div>
                </div>

                <div className="feedback_box">
                    <RiDoubleQuotesR className="feedback_icon" />
                    <h5>We had an excellent experiencewith this company. They came in 4weeks early on the deadline with 
                        asuperior finished website.</h5>
                    <div className="feedback_img">
                        <img src={review3} />
                        <div className="feedback_img_name">
                            <h6>Akash</h6>
                            <h6>Ak Beauty & Spa</h6>
                        </div>
                    </div>
                </div>

                <div className="feedback_box">
                    <RiDoubleQuotesR className="feedback_icon" />
                    <h5>We had an excellent experiencewith this company. They came in 4weeks early on the deadline with 
                        asuperior finished website.</h5>
                    <div className="feedback_img">
                        <img src={review1} />
                        <div className="feedback_img_name">
                            <h6>Akash</h6>
                            <h6>Ak Beauty & Spa</h6>
                        </div>
                    </div>
                </div>

                <div className="feedback_box">
                    <RiDoubleQuotesR className="feedback_icon" />
                    <h5>We had an excellent experiencewith this company. They came in 4weeks early on the deadline with 
                        asuperior finished website.</h5>
                    <div className="feedback_img">
                        <img src={review2} />
                        <div className="feedback_img_name">
                            <h6>Akash</h6>
                            <h6>Ak Beauty & Spa</h6>
                        </div>
                    </div>
                </div>

                <div className="feedback_box">
                    <RiDoubleQuotesR className="feedback_icon" />
                    <h5>We had an excellent experiencewith this company. They came in 4weeks early on the deadline with 
                        asuperior finished website.</h5>
                    <div className="feedback_img">
                        <img src={review3} />
                        <div className="feedback_img_name">
                            <h6>Akash</h6>
                            <h6>Ak Beauty & Spa</h6>
                        </div>
                    </div>
                </div>

                <div className="feedback_box">
                    <RiDoubleQuotesR className="feedback_icon" />
                    <h5>We had an excellent experiencewith this company. They came in 4weeks early on the deadline with 
                        asuperior finished website.</h5>
                    <div className="feedback_img">
                        <img src={review1} />
                        <div className="feedback_img_name">
                            <h6>Akash</h6>
                            <h6>Ak Beauty & Spa</h6>
                        </div>
                    </div>
                </div>

                <div className="feedback_box">
                    <RiDoubleQuotesR className="feedback_icon" />
                    <h5>We had an excellent experiencewith this company. They came in 4weeks early on the deadline with 
                        asuperior finished website.</h5>
                    <div className="feedback_img">
                        <img src={review2} />
                        <div className="feedback_img_name">
                            <h6>Akash</h6>
                            <h6>Ak Beauty & Spa</h6>
                        </div>
                    </div>
                </div>

                <div className="feedback_box">
                    <RiDoubleQuotesR className="feedback_icon" />
                    <h5>We had an excellent experiencewith this company. They came in 4weeks early on the deadline with 
                        asuperior finished website.</h5>
                    <div className="feedback_img">
                        <img src={review3} />
                        <div className="feedback_img_name">
                            <h6>Akash</h6>
                            <h6>Ak Beauty & Spa</h6>
                        </div>
                    </div>
                </div> */}
                </Slider>
            </div>
            </div>

            {/* ------------------------------------------------------------- */}


            <div className="feedback_slider_con2">

            <div className="feedback_slider_sub_con">
           
                <div className="feedback_box">
                    <RiDoubleQuotesR className="feedback_icon" />
                    <h5>I am Very grateful to have Uday and his team. He's been able to  front-end and 
                        back-end developers who have greatly  the development of our application.</h5>
                    <div className="feedback_img">
                        <img src={review3} />
                        <div className="feedback_img_name">
                            <h6>Akash</h6>
                            <h6>Ak Beauty & Spa</h6>
                        </div>
                    </div>
                </div>

                <div className="feedback_box">
                    <RiDoubleQuotesR className="feedback_icon" />
                    <h5>Good place to learn. Very good staffs and trainers. Trainers are  good because they always spent their valuable time and clarify  students doubts .
                         Easy to access.</h5>
                    <div className="feedback_img">
                        <img src={review4} />
                        <div className="feedback_img_name">
                            <h6>Akash</h6>
                            <h6>Ak Beauty & Spa</h6>
                        </div>
                    </div>
                </div>

                <div className="feedback_box">
                    <RiDoubleQuotesR className="feedback_icon" />
                    <h5>We had an excellent experiencewith this company. They came in 4weeks early on the deadline with 
                        asuperior finished website.</h5>
                    <div className="feedback_img">
                        <img src={review1} />
                        <div className="feedback_img_name">
                            <h6>Akash</h6>
                            <h6>Ak Beauty & Spa</h6>
                        </div>
                    </div>
                </div>

              
                
            </div>

            </div>
               </div>  

                 <div className="news_con">
                    <div className="news_sub_con">
                        <div className="news_word">
                            <h6>Latest News</h6>
                            <h2>We are <span>Offer</span> <span>Courses</span></h2>
                            <h5>The mission should emphasize preparing individuals for the workforce by equipping them with
                              the necessary knowledge, skills, and experience to succeed in their desired fields.</h5>

                        </div>

                        <div className="news_box_con">
                            <div className="news_box">
                                <div className="news_img ">
                                <img src={news1}/>
                                <button>20 WEEKS</button>
                             </div>
                            
                            <h3>UXUI Design</h3>
                            <h6>Learn how to design interactive mobile /
                                       web app from start to finish within 3
                                         months of step-by-step training. Boost
                                        your career with the best course on
                                                 digital marketing in Duhzine,design interactive mobile /
                                       web app from start </h6>
                            </div>

                            <div className="news_box">
                                <div className="news_img ">
                                <img src={news2}/>
                                <button>20 WEEKS</button>
                             </div>
                            
                            <h3>Digital Marketing</h3>
                            <h6>Boost your career with the best course
                               on digital marketing in Duhzine. Top
                                       notch and up-to-date curriculum taught
                                       by renowned professors and industry
                                       experts using videos, case studies,
                                             hands on projects and live sessions</h6>
                            </div>

                            <div className="news_box">
                                <div className="news_img ">
                                <img src={news1}/>
                                <button>20 WEEKS</button>
                             </div>
                            
                            <h3>Full Stack Development</h3>
                            <h6>The Full Stack Developer Online Course

                                       learners with powerful 

                                        technologies to create their projects 

                                             or solutions. It covers essential topics

                                              like HTML, CSS, JavaScript, UI/UX, 

                                                AngularJS, NodeJS, etc.</h6>
                            </div>
                        </div>


                    </div>

                 </div>




           </div>

       

   


    )
}
export default Feedback;
