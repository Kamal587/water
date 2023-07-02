import React, { useState } from "react";
import "./RegistPage.css";
import { useDispatch } from "react-redux";
import { editReg } from "../../../redux/regist";
import { useNavigate } from "react-router-dom";

const RegistPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();

    let result = login + password;
    dispatch(
      editReg({
        result,
      })
    );
    setLogin("");
    setPassword("");
    navigate("/");
  };

  return (
    <div>
      <div className="wrapReg">
        <form action="" className="form" onSubmit={(e) => handleClick(e)}>
          <div className="titleRegist">Регистрация</div>
          <label htmlFor="">Логин</label>
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <label htmlFor="">Пароль</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btnReg">ОТПРАВИТЬ</button>
        </form>
      </div>
    </div>
  );
};

export default RegistPage;
