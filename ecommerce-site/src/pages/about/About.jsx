import React from "react";

import "./about.css";
import "./ImageSlider.jsx";
import ImageSlider from "./ImageSlider.jsx";
import Slider from "react-slick";
/* Import the base and theme styles */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};


const About = () => {
  return  (
         <> <div className="AboutBlock">

            <div className="AboutUsText">

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
             <h2><strong>About Us</strong></h2>
              
            <p>  We are an ecommerce start up, committed to
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Voluptate natus repellendus assumenda, 
              officia perspiciatis nulla obcaecati 
              incidunt amet, maiores tempora nostrum ex corrupti 
              repudiandae a, exercitationem velit 
              dolorem aliquam possimus? 
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Et, iure totam eaque debitis, perspiciatis ad temporibus 
              consequatur quaerat ut dolorum minus inventore ipsa 
              laborum voluptate in minima exercitationem repudiandae 
              cum.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Voluptatem eveniet corporis soluta aperiam amet porro nemo, 
              incidunt magni est molestiae rem eligendi, eos vel ipsam 
              necessitatibus! Iste inventore ipsam asperiores?
              C:\Users\asus\Desktop\ecommerce\Exclusive-Ecommerce-Site\ecommerce-site\src\assets\Images\Side Image.png
              </p>
              
              </div>
              <br />
              <br />
              <br />

              <div className = "AboutUsSidePicture"><img src ="/src/assets/Images/Side Image.png" alt="picture is here"></img></div>

          </div>
          <div className="logPics">
            
            <img src="/src/assets/Images/Frame 705.png" alt='a picture is here'></img>
            <img src="/src/assets/Images/Frame 705.png" alt='a picture is here'></img>
            <img src="/src/assets/Images/Frame 705.png" alt='a picture is here'></img>
            <img src="/src/assets/Images/Frame 705.png" alt='a picture is here'></img>
          </div>
          
 <div>

                
 <Slider {...settings}>
                {slides.map((s) => (
                        <div className="imgCard" key = {s.id}>
                        <div >
                    
                         </div>
                   </div>
 
                ))} 
</Slider>

      
         </div> 

<div>
          <br />
          <br />
          <div className="logPics">
            <img src="/src/assets/Images/Frame 705.png" alt='a picture is here'></img>
            <img src="/src/assets/Images/Frame 705.png" alt='a picture is here'></img>
            <img src="/src/assets/Images/Frame 705.png" alt='a picture is here'></img>

          </div>
          </div>
        
          </>
         
          


const slides = [
  {
  id:1,
  name: 'Andy Murray',
  img: '/src/assets/Images/frame1.png',
  stack: 'BACKEND',
  },
 {
  id:2,
  name: 'Andy Murray',
  img: '/src/assets/Images/frame2.jpg',
  stack: 'FRONT END'
  },
  
  {
  id:3,
  name: 'Andy Murray',
  img: '/src/assets/Images/frame3.jpg',
  stack: 'UI/UX'
  }
  ,

{
  id:4,
  name: 'Andy Murray',
  img: '/src/assets/Images/frame5.jpg',
  stack: 'DIRECTOR',
}, 

  {
  id:5,
  name: 'Andy Murray',
  img: '/src/assets/Images/Frame 876.png',
  stack: 'CEO',
  }, 

  { 
  id:6,
  name: 'Andy Murray',
  img: '/src/assets/Images/Frame 874.png',
  stack: 'ASSISTANT'
  },
 
  { 
  id:7,
  name: 'Andy Murray',
  img: '/src/assets/Images/Frame 874.png',
  stack: 'BACKEND',
  },
 
 
{
  id:8,
  name: 'Andy Murray',
  img: '/src/assets/Images/Frame 875.png',
  stack: 'FRONTEND',
},

{   
  id:9,
  name: 'Andy Murray',
  img: '/src/assets/Images/Frame 876.png',
  stack: 'UNIX DEV'
}

]



export default About;
