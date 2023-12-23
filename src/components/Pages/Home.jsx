import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "../Styles/Home.module.css";
import { motion } from "framer-motion";
import img1 from "./1.png"
import About from "./About";
const Home = () => {
  const imgurl="https://static.vecteezy.com/system/resources/previews/014/273/466/non_2x/abstract-colorful-blob-shapes-element-design-free-png.png";
  const imgurl2="https://i.pinimg.com/originals/c5/36/c9/c536c9cdd607000657528893e5005848.png";
  return (
    <section className={`paddings ${css.wrapper}`}>
      <img src={imgurl} alt="" className={css.i1}/>
      <img src={imgurl2} alt="" className={css.i2}/>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
  
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hey There,
            <br />
            I'm Devi.
          </motion.span>
          <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
            I am here to help you
            <br />
            about everything here{" "}
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src={img1} alt="" />
        </motion.div>

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText">Live</div>
            <div className="secondaryText">
              <div>Location</div><br/>
              <div>Sharing</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>Periods Tracker</span>
            <span>And Many more...</span>
          </motion.div>
        </div>
      </motion.div>
      <div className={css.line}/> 
      <div className={css.aboutwala}>
      <About showImages={false}/>
      </div>
    </section>
  );
};

export default Home;