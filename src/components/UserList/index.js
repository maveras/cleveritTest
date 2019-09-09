import React, { useContext } from "react";
import "./styles.scss";
import { UserCard } from "../UserCard";
import UserContext from "../../stores/UserContext";
export const UserList = props => {
  const { handleSelectedUser, loading } = props;
  const { filteredUsers, userSelected } = useContext(UserContext);

  return (
    <div className="users-list">
      {loading ? (
        <div className="users-list__loading">
          <h2>Loading Users..</h2>
        </div>
      ) : filteredUsers.length === 0 ? (
        <h2>No results</h2>
      ) : (
        filteredUsers.map(user => (
          <UserCard
            key={user.id}
            handleSelectedUser={handleSelectedUser}
            user={user}
            selected={userSelected}
          ></UserCard>
        ))
      )}
    </div>
  );
};
