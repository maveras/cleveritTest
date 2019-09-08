import React from "react";
import "./styles.scss";
export const UserDetails = props => {
  const { email, lastName, name, id, password } = props.userSelected;
  return (
    <div className="user-detail-container">
      <div className="user-detail-card">
        <div className="email">
          <span>{email}</span>
        </div>
        <div className="lastName">
          <span>{lastName}</span>
        </div>
        <div className="name">
          <span>{name}</span>
        </div>
        <div className="id">
          <span>{id}</span>
        </div>
      </div>
    </div>
  );
};
