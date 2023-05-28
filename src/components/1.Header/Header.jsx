import React from "react";
import s from "./Header.module.css";
import vector from "./../../assets/Vector.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={s.wrap}>
      <div className={s.container}>
        <div className={s.title}>СИСТЕМА УЧЕТА ВОДЫ</div>
        <div className={s.reg}>
          <NavLink to="/" className={s.linkMenu}>
            Главная
          </NavLink>
          <NavLink to="/admin/place" className={s.linkMenu}>
            Админ
          </NavLink>
          <div className={s.user}>
            <img src={vector} alt="" />
            <div className={s.name}>name</div>
          </div>
          <div className={s.out}>Выход</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
