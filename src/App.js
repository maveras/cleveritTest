import React from "react";
import "./App.css";
import "./generalStyles.scss";
import ".";
import { UserContainer } from "./containers/UserContainer";

export const App = () => (
  <div className="App Reset">
    <UserContainer></UserContainer>
  </div>
);
