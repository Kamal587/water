import React, { useEffect, useState } from "react";
import Navigate from "./Navigate/Navigate";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Admin from "./Admin/Admin";
import "./Main.css";
import RegistPage from "./Regist/RegistPage";

const Main = () => {
  const [wayOfEnd, setWayOfEnd] = useState(false);
  console.log(wayOfEnd);
  return (
    <div className="main">
      <Routes>
        <Route
          path="/"
          element={<Home wayOfEnd={wayOfEnd} setWayOfEnd={setWayOfEnd} />}
        />
        <Route path="/admin" element={<Navigate to="/admin/place" />}>
          {/* <Route index element={<Admin />} />
          <Route path="users" element={<Users />} />
          <Route path="place" element={<Location />} />
          <Route path="application" element={<Application />} /> */}
        </Route>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/regist" element={<RegistPage />} />
      </Routes>
    </div>
  );
};

export default Main;
