import React, { useContext,useState,useEffect } from "react";
import { CartContext } from "../../store/CartContext";
import { CartIcon } from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

export const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const {items} = cartCtx

  useEffect(() => {
    if(items.length === 0){
      return
    }
    
    setBtnIsHighlighted(true)

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 300);

    return () => {
      clearTimeout(timer)
    }
  }, [items])
  


  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0);
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>You cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
