import React, { useState } from "react";
import Navigate from "../Navigate/Navigate";
import RouterPage from "../RouterPage";
import s from "./Admin.module.css";

const Admin = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className={s.wrap}>
      <div className={s.menu}>
        <Navigate />
      </div>
      <div className={s.table}>
        <RouterPage modalActive={modalActive} setModalActive={setModalActive} />
      </div>
    </div>
  );
};

export default Admin;
