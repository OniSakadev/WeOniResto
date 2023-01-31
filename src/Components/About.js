import React, { useEffect } from "react";
import "./style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(() => {
    AOS.init()
  })

  return (
    <section id="about" className="flex p-32 max-lg:flex-col max-lg:p-4">
      <div className="w-1/2 flex flex-col items-center max-lg:justify-center max-lg:w-full ">
        <h2 className="title -mb-10 max-lg:text-6xl max-lg:text-center" data-aos="fade-right">Discover</h2>
        <h4 className="sub-title z-10 max-lg:text-3xl max-lg:mt-1 max-lg:text-center" data-aos="fade-left">Our Store</h4>

        <span className="text-lg mt-14 mb-4 text-gray-400 " data-aos="fade-up">* * *</span>

        <p className="text-center text-gray-400 text-sm px-20 leading-relaxed max-lg:px-4" data-aos="zoom-in-up">
          Voluptatibus quaerat laboriosam fugit non Ut consequatur animi est
          molestiae enim a voluptate totam natus modi debitis dicta impedit
          voluptatum quod sapiente illo saepe explicabo quisquam perferendis
          labore et illum suscipit
        </p>

        <div className="btn-about py-6">
          <a
            href="#"
            className="uppercase relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
            before:bottom-0 before:left-0 before:bg-yellow-400
            before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
            before:transition before:ease-in-out before:duration-300" data-aos="zoom-in-down"
          >
            About Us
          </a>
        </div>
      </div>
      <div className="w-1/2 flex justify-center max-lg:w-full">
        <div className="img flex justify-center" data-aos="zoom-in-right">
          <img
            src="https://demos.onepagelove.com/html/resto/img/img_1.jpg"
            alt="people"
            className="w-5/6 object-cover" 
          />
        </div>
      </div>
    </section>
  );
};

export default About;
