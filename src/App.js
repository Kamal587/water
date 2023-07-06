import { useState } from "react";
import "./App.css";
import Header from "./components/1.Header/Header";
import Main from "./components/2.Main/Main";

import Footer from "./components/3.Footer/Footer";

function App() {
  const [prodWay, setProdWay] = useState();
  const [siteWay, setSiteWay] = useState();
  const [shopWay, setShopWay] = useState();
  const [floorWay, setFloorWay] = useState();
  const [roomWay, setRoomWay] = useState();
  const [timeDiff, setTimeDiff] = useState();
  const [timeStr, setTimeStr] = useState([]);
  return (
    <div className="App">
      <Header />
      <Main
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
        timeDiff={timeDiff}
        setTimeDiff={setTimeDiff}
        timeStr={timeStr}
        setTimeStr={setTimeStr}
      />
    </div>
  );
}

export default App;
