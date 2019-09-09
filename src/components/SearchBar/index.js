import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../stores/UserContext";
export const SearchBar = props => {
  const [content, setContent] = useState("");
  const { users, filterUsersFn } = useContext(UserContext);

  useEffect(() => {
    setContent("");
  }, [users]);
  function handleChangeInput(e) {
    setContent(e.target.value);
    const filteredUserList = users.filter(user => {
      let regex = new RegExp(e.target.value, "gi");
      if (user.name) {
        return user.name.match(regex);
      }
    });
    return filterUsersFn(filteredUserList);
  }

  return (
    <div className="input">
      <input
        type="text"
        value={content}
        className="input__text"
        placeholder="search"
        onChange={e => handleChangeInput(e)}
      />
    </div>
  );
};
