import React, { useState, useEffect } from "react";
import { UserControls } from "../../components/UserControls";
import { UserList } from "../../components/UserList";
import { UserDetails } from "../../components/UsersDetails";
import { UsersProvider } from "../../stores/UserContext.js";

function useFetchUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window
      .fetch("http://jsonverserverclever.azurewebsites.net/User")
      .then(res => res.json())
      .then(response => {
        setUsers(response);
        setLoading(false);
      });
  }, []);
  return { users, loading };
}

export const UserContainer = () => {
  const [userSelected, setUserSelected] = useState({});
  const { users, loading } = useFetchUsers();

  function handleSelectedUser(user) {
    setUserSelected(user);
  }
  return (
    <UsersProvider value={users}>
      <div className="userContainer">
        <h1>Users list</h1>
        <UserControls></UserControls>
        <UserList
          handleSelectedUser={handleSelectedUser}
          loading={loading}
        ></UserList>
        <UserDetails userSelected={userSelected}> </UserDetails>
      </div>
    </UsersProvider>
  );
};
