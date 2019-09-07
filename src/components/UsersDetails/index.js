import React from "react";
export const UserDetails = props => {
  const { email, lastName, name, id, password } = props.userSelected;
  return (
    <div className="user-detail">
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
  );
};
