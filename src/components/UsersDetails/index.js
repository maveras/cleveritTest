import React from "react";
import "./styles.scss";
export const UserDetails = props => {
  const { email, lastName, name, id } = props.userSelected;
  if (id) {
    return (
      <div className="user-detail-container">
        <div className="user-detail-title">
          <h2>User details</h2>
        </div>
        <div className="user-detail-card">
          <div className="user-detail-card__item">
            <div className="user-detail-card__item__title">Email: </div>
            <span className="user-detail-card__item__content">{email}</span>
          </div>
          <div className="user-detail-card__item">
            <div className="user-detail-card__item__title">LastName: </div>
            <span className="user-detail-card__item__content">{lastName}</span>
          </div>
          <div className="user-detail-card__item">
            <div className="user-detail-card__item__title">Name: </div>
            <span className="user-detail-card__item__content">{name}</span>
          </div>
          <div className="user-detail-card__item">
            <div className="user-detail-card__item__title">Id: </div>
            <span className="user-detail-card__item__content">{id}</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="user-detail-container">
        <div className="user-detail-title">
          <h2>Please select user</h2>
        </div>
      </div>
    );
  }
};
