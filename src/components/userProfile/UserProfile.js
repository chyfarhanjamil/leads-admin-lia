import React from "react";
import "./userProfile.css";

export default function UserProfile() {
  const toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  return (
    <div className="main__userprofile">
      <div className="profile__card user__profile__image">
        <div className="profile__image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
            alt="#"
          />
        </div>
        <h4>Tim Hover</h4>
        <p>timhover6@gmail.com</p>
      </div>
      <div className="profile__card">
        <div className="card__header" onClick={toggleInfo}>
          <h4>Media and Files</h4>
          <i className="fa fa-angle-down"></i>
        </div>
        <div className="card__content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          ultrices urna a imperdiet egestas. Donec in magna quis ligula
        </div>
      </div>
    </div>
  );
}
