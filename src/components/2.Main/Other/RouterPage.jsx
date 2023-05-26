import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "../Main";
import Application from "./ApplicationPage/Application";
import Location from "./LocationPage/Location";
import Users from "./UsersPage/Users";

const RouterPage = ({ modalActive, setModalActive }) => {
  const localDate = useSelector((state) => state.location.location);
  let nameDate = localDate.filter((item) => item.name);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Location modalActive={modalActive} setModalActive={setModalActive} />
        }
      />
      <Route
        path="/users"
        element={
          <Users localDate={localDate} nameDate={nameDate} modalActive={modalActive} setModalActive={setModalActive} />
        }
      />
      <Route path="/application" element={<Application />} />
    </Routes>
  );
};

export default RouterPage;
