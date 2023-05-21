import React, { useState } from "react";
import s from "./Main.module.css";
import Location from "./Other/LocationPage/Location";
import Navigate from "./Navigate/Navigate";
import RouterPage from "./Other/RouterPage";
import Modal from "../Modal/Modal";

const Main = () => {
  const [modalActive, setModalActive] = useState(false);
  const [formData, setFormData] = useState([]);
  console.log(formData);
  return (
    <div className={s.wrap}>
      <div className={s.menu}>
        <Navigate />
      </div>
      <div className={s.table}>
        <RouterPage
          formData={formData}
          setFormData={setFormData}
          modalActive={modalActive}
          setModalActive={setModalActive}
        />
      </div>
    </div>
  );
};

export default Main;
