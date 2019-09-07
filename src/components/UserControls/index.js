import React from "react";
import { SearchBar } from "../SearchBar";
import { Modal } from "../Modal";
import { useModal } from "../../hooks/useModal";

export const UserControls = () => {
  const { isShowing, toggle } = useModal();
  return (
    <>
      <SearchBar></SearchBar>
      <button onClick={toggle}>Add User</button>
      <Modal isShowing={isShowing} hide={toggle}></Modal>
    </>
  );
};
