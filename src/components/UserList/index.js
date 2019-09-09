import React, { useContext } from "react";
import "./styles.scss";
import { UserCard } from "../UserCard";
import UserContext from "../../stores/UserContext";
export const UserList = props => {
  const { handleSelectedUser } = props;
  const { filteredUsers, userSelected } = useContext(UserContext);

  return (
    <div className="users-list">
      {filteredUsers.map(user => (
        <UserCard
          key={user.id}
          handleSelectedUser={handleSelectedUser}
          user={user}
          selected={userSelected}
        ></UserCard>
      ))}
    </div>
  );
};
