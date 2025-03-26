import React from "react";
import NotFoundImg1 from "../images/notfound1.jpg";

const NotFoundPage = () => {
  return (
    <div className="notFoundContainer">
      <h3>Sorry, Page was not found!</h3>
      <div className="notFoundImgContainer">
        <img src={NotFoundImg1} alt="Page not found" className="NotFoundImg" />
      </div>
    </div>
  );
};

export default NotFoundPage;
