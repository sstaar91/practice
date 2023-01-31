import React from "react";
import { Link, useNavigate } from "react-router-dom";
import titleImage from "../../assets/logo.jpeg";
import "./Introduce.scss";

const Introduce = () => {
  const navigate = useNavigate();
  const handleInput = () => {
    console.log("input 태그 동작");
  };

  const handleButton = () => {
    navigate("/product");
  };

  return (
    <div className="introduce">
      <div className="cardContainer">
        <img src={titleImage} alt="main" className="mainImage" />
        <h2 className="name">김개발</h2>
        <h3 className="batch">00기</h3>
        <input onChange={handleInput} />
        <button onClick={handleButton}>클릭</button>
        <Link to="/product" className="link">
          product 페이지로 이동
        </Link>
      </div>
    </div>
  );
};

export default Introduce;
