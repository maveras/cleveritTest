import React, { useState, useEffect } from "react";
import "./styles.scss";
import { UserControls } from "../../components/UserControls";
import { UserList } from "../../components/UserList";
import { UserDetails } from "../../components/UsersDetails";
import { UsersProvider } from "../../stores/UserContext.js";

export const UserContainer = () => {
  const [userSelected, setUserSelected] = useState({});
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleSelectedUser(user) {
    setUserSelected(user);
  }

  function filterUsersFn(filteredUsersList) {
    setFilteredUsers(filteredUsersList);
  }

  const fetchdata = () => {
    setLoading(true);
    window
      .fetch("http://jsonverserverclever.azurewebsites.net/User")
      .then(res => res.json())
      .then(response => {
        setUsers(response);
        setFilteredUsers(response);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <UsersProvider
      value={{ filteredUsers, users, userSelected, filterUsersFn }}
    >
      <div className="userContainer">
        <h1>Users list</h1>
        <UserControls fetchdata={fetchdata}></UserControls>
        <div className="users-main">
          <UserList
            handleSelectedUser={handleSelectedUser}
            loading={loading}
          ></UserList>
          <UserDetails userSelected={userSelected}> </UserDetails>
        </div>
      </div>
    </UsersProvider>
  );
};
