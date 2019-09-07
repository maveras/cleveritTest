import React from "react";

export const UserCard = props => {
  const { user, handleSelectedUser } = props;

  return (
    <div onClick={() => handleSelectedUser(user)} className="user-card">
      <span>{user.name + user.lastName}</span>
    </div>
  );
};
