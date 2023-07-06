import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Application from "./Admin/ApplicationPage/Application";
import Location from "./Admin/LocationPage/Location";
import Users from "./Admin/UsersPage/Users";
import RegistPage from "./Regist/RegistPage";

const RouterPage = ({ modalActive, setModalActive }) => {
  const localDate = useSelector((state) => state.location.location);
  let nameDate = localDate.filter((item) => item.name);
  return (
    <Routes>
      <Route
        path="/place"
        element={
          <Location modalActive={modalActive} setModalActive={setModalActive} />
        }
      />
      <Route
        path="/users"
        element={
          <Users
            localDate={localDate}
            nameDate={nameDate}
            modalActive={modalActive}
            setModalActive={setModalActive}
          />
        }
      />
      <Route path="/application" element={<Application />} />
    </Routes>
  );
};

export default RouterPage;
