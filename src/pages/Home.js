import React, { useEffect, useRef } from "react";
import Curva from '../assets/Curva.svg'
import home from "../assets/json/home.json";

const Home = () => {

  const slide = {
    backgroundColor: "#96F6B8",
    width: "200vw",
    height: "200vh",
    position: "absolute",
    transition: "2s",
    shadowBox: "20px 20px 15px 15px solid rgba(0.2,0.2,0.2,0.6)",
    borderRadius: "50%",
    transform: "rotate(30deg) translate(-50vw,-20vh)",
  };

  const curve = {
    width: "100vw",
    position: "fixed",
    top: "0",
  };

  const paragraph = {
    fontSize: "1rem",
    lineHeight: "4rem",
    color: "rgba(0.2,0.2,0.2,0.2)"
  }

  const slideRef = useRef(null);
  const curveRef = useRef(null);

  const handleScroll = () => {
    curveRef.current.style.position = 'fixed';
    curveRef.current.style.top = 0 - window.pageYOffset * 0.5 + 'px';
    curveRef.current.style.left = window.pageYOffset * 0.5 + 'px' 
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <img src={'https://www.placecage.com/c/200/300'} ref={curveRef} />

      <div>
        <p style={paragraph}>{home.lorem}</p>
      </div>
    </div>
  );
};

export default Home;
