import React from "react";
import mealsImage from "../../assets/img/meals.jpg";
import classes from "./Header.module.css"
import { HeaderCartButton } from "./HeaderCartButton";

export const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table of meals" />
      </div>
    </>
  );
};
