import React from "react";
import ReactDom from "react-dom";
import "./styles.scss";

export const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDom.createPortal(
        <div className="modal">
          <h1>Title</h1>
        </div>,
        document.body
      )
    : null;
