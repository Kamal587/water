import React from "react";
import "./Header.css";
import vector from "./../../assets/Vector.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="wrapper">
      <div className="containerHead">
        <div className="titleHead">СИСТЕМА УЧЕТА ВОДЫ</div>
        <div className="reg">
          <NavLink to="/" className="linkMenu">
            Главная
          </NavLink>
          <NavLink to="/admin/place" className="linkMenu">
            Админ
          </NavLink>
          <div className="user">
            <img src={vector} alt="" />
            <div className="name">name</div>
          </div>
          <div className="out">Выход</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
