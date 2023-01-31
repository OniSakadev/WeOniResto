import React, { useEffect } from "react";
import "./style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(() => {
    AOS.init()
  })
    return (
      <section id="home">
        <div className="bg-home flex flex-col h-screen justify-center items-center">
          <h2 className="title -mb-10 text-yellow-600 max-lg:text-7xl" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">Welcome</h2>
          <h4 className="sub-title text-white z-10 max-lg:text-4xl max-lg:mt-1" data-aos="zoom-out-down">Oni-Resto</h4>
          <p className="text-white text-lg py-2 max-sm:text-xl  max-sm:text-center" data-aos="fade-up"
     data-aos-duration="2000">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
            molestias.
          </p>
        </div>
      </section>
    );  
};

export default Home;
