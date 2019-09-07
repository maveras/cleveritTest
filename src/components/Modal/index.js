import React from "react";
import ReactDom from "react-dom";

export const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDom.createPortal(<div>soy el modal</div>, document.body)
    : null;
