import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import "./styles.scss";

export const Modal = ({ isShowing, hide, fetchUsers }) => {
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    clearInputs();
  }, [isShowing]);

  const clearInputs = () => {
    setName("");
    setlastName("");
    setEmail("");
  };
  const handleFetch = () => {
    fetchUsers();
  };
  const handleName = e => {
    setName(e.target.value);
  };
  const handleLastName = e => {
    setlastName(e.target.value);
  };
  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handleSendForm = () => {
    const newUser = {
      id: Date.now(),
      name,
      lastName,
      email,
      password: Date.now() + Date.now()
    };
    window
      .fetch("http://jsonverserverclever.azurewebsites.net/User", {
        method: "POST", // or 'PUT'
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => res.json())
      .then(response => {
        handleFetch();
        hide();
        clearInputs();
      });
  };
  return isShowing
    ? ReactDom.createPortal(
        <div className="modal">
          <div className="modal__card">
            <div className="close" onClick={hide}>
              X
            </div>
            <div className="input">
              <label>Name</label>
              <input
                className="input__text"
                onChange={handleName}
                value={name}
                type="text"
              />
            </div>
            <div className="input">
              <label>LastName</label>
              <input
                className="input__text"
                onChange={handleLastName}
                value={lastName}
                type="text"
              />
            </div>
            <div className="input">
              <label>Email</label>
              <input
                className="input__text"
                onChange={handleEmail}
                value={email}
                type="text"
              />
            </div>
            <div className="modal__actions">
              <button className="btn" onClick={handleSendForm}>
                Add User
              </button>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
};
