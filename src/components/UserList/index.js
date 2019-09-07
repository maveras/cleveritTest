import React, { useContext } from "react";
import { UserCard } from "../UserCard";
import UserContext from "../../stores/UserContext";
export const UserList = props => {
  const { handleSelectedUser } = props;
  const users = useContext(UserContext);
  return users.map(user => {
    return (
      <UserCard
        key={user.id}
        handleSelectedUser={handleSelectedUser}
        user={user}
      ></UserCard>
    );
  });
};
