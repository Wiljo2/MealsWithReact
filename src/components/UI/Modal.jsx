import React from "react";
import reactDom from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClose} className={classes.backdrop} />;
};

export const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

export const Modal = (props) => {
  return (
    <>
      {reactDom.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};
