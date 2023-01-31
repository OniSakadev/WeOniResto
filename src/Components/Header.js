import React from "react";
import "./style.css";
import { Sling as Hamburger } from 'hamburger-react'
import { useState } from "react";

const Header = () => {
  window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  const [isOpen, setOpen] = useState(false)

  return (
    <header id="header" className="header flex items-center py-10 px-52 fixed w-full transisi max-lg:px-4">
      <div className="logo">
        <h2 className="site-logo">We-Resto</h2>
      </div>
      <nav className="nav ml-auto block max-lg:hidden">
        
        <ul className="menu-list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* //hamburger// */}

      <div className="hidden max-lg:block ml-auto">
      <Hamburger toggled={isOpen} toggle={setOpen} size={20} direction="right" duration={0.8} distance="lg" color="#4FD1C5"/>

      {isOpen ? (<>
        <ul className="menu-list absolute gap-6 w-full flex flex-col left-0 top-24 py-4 px-6 mt-2 bg-white ham-menu">
          <li>
            <a href="#home" className="text-black">Home</a>
          </li>
          <li>
            <a href="#about" className="text-black">About</a>
          </li>
          <li>
            <a href="#menu" className="text-black">Menu</a>
          </li>
          <li>
            <a href="#contact" className="text-black">Contact</a>
          </li>
        </ul>
        </>) : (<>
          </>)}
      
      </div>

    </header>
  );
};

export default Header;
