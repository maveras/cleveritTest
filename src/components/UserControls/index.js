import React from "react";
import { SearchBar } from "../SearchBar";
import { Modal } from "../Modal";
import { useModal } from "../../hooks/useModal";
import "./styles.scss";

export const UserControls = props => {
  const { isShowing, toggle } = useModal();
  return (
    <div className="user-controls">
      <SearchBar></SearchBar>
      <button className="btn add" onClick={toggle}>
        Add User
      </button>
      <Modal
        fetchUsers={props.fetchdata}
        isShowing={isShowing}
        hide={toggle}
      ></Modal>
    </div>
  );
};
