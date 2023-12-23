import React from "react";
import classes from "../Styles/Footer.module.css";
import logo from "./logo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {  
  const imgurl="https://static.vecteezy.com/system/resources/previews/014/273/430/large_2x/abstract-colorful-blob-shapes-element-design-free-png.png";
  return (
    <div className={classes.footerwrapper}>
      <div className={classes.footer}>
        <div className={classes.logodesc}>
        <img src={logo} alt="" className={classes.logo} />
          <h4 className={classes.desc}>Follow us on! </h4>
          <div className={classes.socialmedia}>
            <TwitterIcon className={classes.socialIcon} />
            <InstagramIcon className={classes.socialIcon} />
            <FacebookIcon className={classes.socialIcon} />
            <YouTubeIcon className={classes.socialIcon} />
          </div>
        </div>
        <div className={classes.links}>
          <ul className={classes.ul}>
            <li>Call</li>
            <li>Periods</li>
            <li>Location</li>
            <li>SOS</li>
          </ul>
        </div>
        <div className={classes.links}>
          <ul className={classes.ul}>
            <li>Contacts</li>
            <li>Emergency</li>
            <li>Sharing</li>
            <li>Health</li>
          </ul>
        </div>
        <div className={classes.contact}>
          <h4>New Arrivals!</h4>
          <h4>For Staying Updated</h4>
          <p>Subscribe to get latest on news and many more.</p>
          <button>Subscribe!</button>
        </div>
        <img className={classes.i1} src={imgurl} alt=""/>
      </div>
    </div>
  );
};

export default Footer;
