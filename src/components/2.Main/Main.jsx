import React, { useEffect, useState } from "react";
import s from "./Main.module.css";
import Location from "./Admin/LocationPage/Location";
import Navigate from "./Navigate/Navigate";
import RouterPage from "./RouterPage";
import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Admin from "./Admin/Admin";
import Users from "./Admin/UsersPage/Users";
import Application from "./Admin/ApplicationPage/Application";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Navigate to="/admin/place" />}>
          {/* <Route index element={<Admin />} />
          <Route path="users" element={<Users />} />
          <Route path="place" element={<Location />} />
          <Route path="application" element={<Application />} /> */}
        </Route>
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default Main;
