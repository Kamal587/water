import React, { useEffect, useState } from "react";
import Navigate from "./Navigate/Navigate";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Admin from "./Admin/Admin";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
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
