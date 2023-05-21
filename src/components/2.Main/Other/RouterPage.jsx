import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "../Main";
import Application from "./ApplicationPage/Application";
import Location from "./LocationPage/Location";
import Users from "./UsersPage/Users";

const RouterPage = ({formData, setFormData, modalActive, setModalActive }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Location
            formData={formData}
            setFormData={setFormData}
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
