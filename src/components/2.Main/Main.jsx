import React, { useEffect, useState } from "react";
import Navigate from "./Navigate/Navigate";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Admin from "./Admin/Admin";
import "./Main.css";
import RegistPage from "./Regist/RegistPage";

const Main = ({
  prodWay,
  setProdWay,
  floorWay,
  setFloorWay,
  siteWay,
  setSiteWay,
  shopWay,
  setShopWay,
  roomWay,
  setRoomWay,
  timeDiff,
  setTimeDiff,
  timeStr,
  setTimeStr,
  checkRecord,
  setCheckRecord,
}) => {
  const [wayOfEnd, setWayOfEnd] = useState(false);

  return (
    <div className="main">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              prodWay={prodWay}
              setProdWay={setProdWay}
              floorWay={floorWay}
              setFloorWay={setFloorWay}
              siteWay={siteWay}
              setSiteWay={setSiteWay}
              shopWay={shopWay}
              setShopWay={setShopWay}
              roomWay={roomWay}
              setRoomWay={setRoomWay}
              wayOfEnd={wayOfEnd}
              setWayOfEnd={setWayOfEnd}
              timeDiff={timeDiff}
              setTimeDiff={setTimeDiff}
              timeStr={timeStr}
              setTimeStr={setTimeStr}
              checkRecord={checkRecord}
              setCheckRecord={setCheckRecord}
            />
          }
        />
        <Route path="/admin" element={<Navigate to="/admin/place" />}>
          {/* <Route index element={<Admin />} />
          <Route path="users" element={<Users />} />
          <Route path="place" element={<Location />} />
          <Route path="application" element={<Application />} /> */}
        </Route>
        <Route path="/admin/*" element={<Admin checkRecord={checkRecord} />} />
        <Route path="/regist" element={<RegistPage />} />
      </Routes>
    </div>
  );
};

export default Main;
