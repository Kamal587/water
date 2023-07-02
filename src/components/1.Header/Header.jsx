import React from "react";
import "./Header.css";
import vector from "./../../assets/Vector.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editReg } from "../../redux/regist";

const Header = () => {
  const data = useSelector((state) => state.regist.regist);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();

    let result = "";
    dispatch(
      editReg({
        result,
      })
    );
  };
  return (
    <div className="wrapper">
      <div className="containerHead">
        <div className="titleHead">СИСТЕМА УЧЕТА ВОДЫ</div>
        <div className="reg">
          <NavLink to="/" className="linkMenu">
            Главная
          </NavLink>
          <NavLink
            to="/admin/place"
            className={data === "admin12345" ? "linkMenu" : "linkMenuNON"}
          >
            Админ
          </NavLink>
          <div className="user">
            <img src={vector} alt="" />
            <div className="name">name</div>
          </div>
          {data !== "admin12345" && (
            <NavLink to="/regist" className="linkMenuReg">
              Вход
            </NavLink>
          )}
          {data === "admin12345" && (
            <NavLink to="/" className="linkMenuReg" onClick={handleClick}>
              Выход
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
