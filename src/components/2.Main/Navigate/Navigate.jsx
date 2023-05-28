import React from "react";
import "./Navigate.css";
import { NavLink } from "react-router-dom";

const Navigate = () => {
  return (
    <div className="wrap">
      <div className="container">
        <div className="title">КАТЕГОРИИ</div>
        <nav className="menu">
          <NavLink to="place" className="btn">
            Местоположения
          </NavLink>
          <NavLink to="users" className="btn">
            Пользователи
          </NavLink>
          <NavLink to="application" className="btn">
            Заявки
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navigate;
