
import './App.css';
import Home from './home';
import Service from './Service';
import Develop from './develop';
import Project from './project';
import Feedback from './feedback';
import Footer from './footer';
import Courses from './courses';
import Careers from './Carrers';
 
import Services_two from './Services_two'; 
import About from './About';
import Contact from './contact';

import {Router,Route,BrowserRouter, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
     {/* <Home/>
     <Service />
     <Develop />
     <Project/>
     <Feedback />
     <Footer />
     <Courses />
     <Services_two />
     <Careers />
     <About/>
     <Contact /> */}

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/services" element={<Services_two/>}/>
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      {/* <NavBar/> */}
      </BrowserRouter>
     
    </div>
  );
}

export default App;
