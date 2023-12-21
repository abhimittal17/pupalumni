import  { useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import VC from "../images/VC.jpg";
import './Accordion.css'
import React from 'react';
import pup from "../static/pup.mp3"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
// import promotion from "../Videos/promotion.mp4";
import { BiChevronDown } from "react-icons/bi";
import a2  from "../images/A2.jpeg";
import a1 from "../images/A1.jpeg";
import a3 from "../images/A3.jpeg";
import a4 from "../images/A4.jpeg";
import v2 from "../images/v2.jpeg";
import v3 from "../images/v3.jpeg";
import v4 from "../images/v4.jpeg";
import v5 from "../images/v5.jpeg";
import v6 from "../images/v6.jpeg";
import v7 from "../images/v7.jpeg";
import v8 from "../images/v8.jpeg";
import v9 from "../images/v9.jpeg";
import v10 from "../images/v10.jpeg";
import v11 from "../images/v11.jpeg";
import v12 from "../images/v12.jpeg";


const vcs = [
  { image: v11,  },
  { image: v6,  },
  { image: v3,  },
  { image: v4,  },
  { image: v12,  },
  { image: v5, },
  { image: v8,  },
  { image: v2, },
  { image: v9,  },
  { image: v10,  },
  { image: v7,  },
  { image: "https://i1.rgstatic.net/ii/profile.image/1061691139817472-1630138301801_Q512/Bs-Ghuman.jpg",  },
]
const settings2 = {
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,

  slidesToShow: 3,
  slidesToScroll: 1,
};

const data = [
  {
    image:"data:image/jpeg;base64,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",
  },
  {
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Surjit_Patar.jpg/640px-Surjit_Patar.jpg",
  },
  {
    image:a1,
  },
  {
    image: a4,
 },
  {
    image: a2,
 },
  {
    image: a3,
},
  {
    image: "data:image/jpeg;base64,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",
 },
  {
    image:"data:image/jpeg;base64,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",
 },
  {
    image: "data:image/jpeg;base64,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",
 },
  {
    image: "https://html.scribdassets.com/6porpyvq9s94ql6t/images/1-a0de5e0429.png",
  }
];

const HomePage = () => {

  return (
    <>


  
     


 

     






      
      <Slider {...settings2} className="notable_alumni_slider mx-16 my-8 mb-16">
        {data.map((obj) => (
          <div className="flex flex-col items-center h-60 w-60 px-2  m-4">
            <div className="shadow-lg ">
              <div className="   w-full">
                <img
                  className="h-56 w-full rounded-lg object-cover  mx-auto "
                  src={obj.image}
                />
              </div>
           
           
            </div>
          </div>
        ))}
      </Slider>

     
   



      <div className="grid grid-cols-2">

   <div className="grid grid-cols-1 relative  gap-1 hover:cursor-pointer">
<h1 className="text-center text-bold text-2xl">Section1</h1>

      <section class="overflow-hidden text-gray-700 c">
  <div class="container  mx-auto ">
    <div class="flex flex-wrap ">
      <div class="flex flex-wrap w-1/2">
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="http://www.punjabiuniversity.ac.in/Pages/Images/Alumni/Functions/1%20(34).JPG"/>
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="http://www.punjabiuniversity.ac.in/Pages/Images/Alumni/Dept/31.JPG"/>
        </div>
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="http://www.punjabiuniversity.ac.in/Pages/Images/Alumni/Dept/1%20(5).JPG"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="http://www.punjabiuniversity.ac.in/Pages/Images/Alumni/Dept/1%20(9).JPG"/>
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="http://www.punjabiuniversity.ac.in/Pages/Images/Alumni/Dept/1%20(8).JPG"/>
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="http://www.punjabiuniversity.ac.in/Pages/Images/Alumni/Dept/1%20(13).JPG"/>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
<div className="grid grid-cols-1 relative  gap-1 hover:cursor-pointer">
<h1 className="text-center text-bold text-2xl">Section2</h1>

<section class="overflow-hidden text-gray-700 c">
  <div class="container  mx-auto ">
    <div class="flex flex-wrap ">
      <div class="flex flex-wrap w-1/2">
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="http://www.punjabiuniversity.ac.in/Pages/Images/Alumni/Functions/1%20(44).JPG"/>
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="http://www.punjabiuniversity.ac.in/Pages/Images/Alumni/Functions/1%20(54).JPG"/>
        </div>
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="http://www.punjabiuniversity.ac.in/Pages/Images/Alumni/Functions/1%20(7).JPG"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="http://www.punjabiuniversity.ac.in/Pages/Images/Alumni/Functions/1%20(7).JPG"/>
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="http://www.punjabiuniversity.ac.in/Pages/Images/Alumni/Functions/1%20(31).JPG"/>
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="http://www.punjabiuniversity.ac.in/Pages/Images/Alumni/Functions/1%20(31).JPG"/>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</div>

<div className="grid grid-cols-2">

<div className="grid grid-cols-1 relative  gap-1 hover:cursor-pointer">
<h1 className="text-center text-bold text-2xl">Section3</h1>
   <section class="overflow-hidden text-gray-700 c">
<div class="container  mx-auto ">
 <div class="flex flex-wrap ">
   <div class="flex flex-wrap w-1/2">
     <div class="w-1/2 p-1 md:p-2">
       <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
         src="http://www.punjabiuniversity.ac.in/Pages/Images/Alumni/Functions/1%20(34).JPG"/>
     </div>
     <div class="w-1/2 p-1 md:p-2">
       <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
         src="http://www.punjabiuniversity.ac.in/Pages/Images/Alumni/Dept/31.JPG"/>
     </div>
     <div class="w-full p-1 md:p-2">
       <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
         src="http://www.punjabiuniversity.ac.in/Pages/Images/Alumni/Dept/1%20(5).JPG"/>
     </div>
   </div>
   <div class="flex flex-wrap w-1/2">
     <div class="w-full p-1 md:p-2">
       <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
         src="http://www.punjabiuniversity.ac.in/Pages/Images/Alumni/Dept/1%20(9).JPG"/>
     </div>
     <div class="w-1/2 p-1 md:p-2">
       <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
         src="http://www.punjabiuniversity.ac.in/Pages/Images/Alumni/Dept/1%20(8).JPG"/>
     </div>
     <div class="w-1/2 p-1 md:p-2">
       <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
         src="http://www.punjabiuniversity.ac.in/Pages/Images/Alumni/Dept/1%20(13).JPG"/>
     </div>
   </div>
 </div>
</div>
</section>
</div>

<div className="grid grid-cols-1 relative  gap-1 hover:cursor-pointer">
<h1 className="text-center text-bold text-2xl">Section4</h1>

<section class="overflow-hidden text-gray-700 c">
<div class="container  mx-auto ">
 <div class="flex flex-wrap ">
   <div class="flex flex-wrap w-1/2">
     <div class="w-1/2 p-1 md:p-2">
       <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
         src="http://www.punjabiuniversity.ac.in/Pages/Images/Alumni/Functions/1%20(44).JPG"/>
     </div>
     <div class="w-1/2 p-1 md:p-2">
       <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
         src="http://www.punjabiuniversity.ac.in/Pages/Images/Alumni/Functions/1%20(54).JPG"/>
     </div>
     <div class="w-full p-1 md:p-2">
       <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
         src="http://www.punjabiuniversity.ac.in/Pages/Images/Alumni/Functions/1%20(7).JPG"/>
     </div>
   </div>
   <div class="flex flex-wrap w-1/2">
     <div class="w-full p-1 md:p-2">
       <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
         src="http://www.punjabiuniversity.ac.in/Pages/Images/Alumni/Functions/1%20(7).JPG"/>
     </div>
     <div class="w-1/2 p-1 md:p-2">
       <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
         src="http://www.punjabiuniversity.ac.in/Pages/Images/Alumni/Functions/1%20(31).JPG"/>
     </div>
     <div class="w-1/2 p-1 md:p-2">
       <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
         src="http://www.punjabiuniversity.ac.in/Pages/Images/Alumni/Functions/1%20(31).JPG"/>
     </div>
   </div>
 </div>
</div>
</section>
</div>
</div>
     
    </>
  );
};
export default HomePage;
