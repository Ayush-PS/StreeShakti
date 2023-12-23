import React from "react";
import "../Styles/About.css";
import Card from "../Card/Card";
import HeartEmoji from "./e1.png";
import Glasses from "./e2.png";
import Humble from "./e3.png";
import { motion } from "framer-motion";
const About = ({showImages}) => {
  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  const imgurl="https://static.vecteezy.com/system/resources/previews/014/273/466/non_2x/abstract-colorful-blob-shapes-element-design-free-png.png";
  const imgurl2="https://i.pinimg.com/originals/c5/36/c9/c536c9cdd607000657528893e5005848.png";

  return (
    <div className="services" id="services">
      {showImages && <img src={imgurl} alt="" className="i1"/>}
      {showImages && <img src={imgurl2} alt="" className="i2"/>}
      {/* left side */}
      <div className="awesome">
        <h2>What I</h2>
        <h2>Help With?</h2>
        <spane>
          This intelligent companion not only assists with a comprehensive
          Periods Tracker but also enables seamless Live Location sharing. Our
          app goes beyond, offering a reliable Emergency Calls feature, ensuring
          safety is just a tap away.With a user-friendly interface, provides
          personalized support, making it a versatile and essential tool for
          your daily needs.
        </spane>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "30vw" }}
          whileInView={{ left: "25vw" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Emergency Calls"}
            detail={"Access emergency assistance with a single click, ensuring your well-being"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "5vw", top: "10vh" }}
          whileInView={{ left: "10rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Live Location Sharing"}
            detail={"Share your location in real-time for enhanced safety and coordination"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "10vh", left: "50vw" }}
          whileInView={{ left: "40vw" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Periods Tracker"}
            detail={
              "Stay informed and prepared with our intuitive Periods Tracker"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default About;
