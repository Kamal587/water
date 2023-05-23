import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "../Main";
import Application from "./ApplicationPage/Application";
import Location from "./LocationPage/Location";
import Users from "./UsersPage/Users";

const RouterPage = ({ datas, setDatas, modalActive, setModalActive }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Location
            modalActive={modalActive}
            setModalActive={setModalActive}
            
          />
        }
      />
      <Route path="/users" element={<Users />} />
      <Route path="/application" element={<Application />} />
    </Routes>
  );
};

export default RouterPage;
