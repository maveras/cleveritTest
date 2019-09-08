import React from "react";
import "./styles.scss";
export const UserCard = props => {
  const { user, handleSelectedUser, selected } = props;
  const styleActive = selected.id === user.id ? "user-card--active" : "";

  return (
    <div
      onClick={() => handleSelectedUser(user)}
      className={`user-card ${styleActive}`}
    >
      <span>{user.name + user.lastName}</span>
    </div>
  );
};
