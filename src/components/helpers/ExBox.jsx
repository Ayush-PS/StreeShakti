import React from "react";
import css from "../Styles/ExBox.module.css"
function ExBox(props) {
  return (
    <div className={css.abox}>
      <div className={css.aimg}>
        <img src={props.image} alt=""/>
      </div>
      <div className={css.atext}>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}

export default ExBox;
