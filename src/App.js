import { useState } from "react";
import "./App.css";
import Header from "./components/1.Header/Header";
import Main from "./components/2.Main/Main";

import Footer from "./components/3.Footer/Footer";
import { useSelector } from "react-redux";

function App() {
  const [prodWay, setProdWay] = useState();
  const [siteWay, setSiteWay] = useState();
  const [shopWay, setShopWay] = useState();
  const [floorWay, setFloorWay] = useState();
  const [roomWay, setRoomWay] = useState();
  const [timeDiff, setTimeDiff] = useState();
  const [timeStr, setTimeStr] = useState([]);
  const [datastr, setDatastr] = useState();
  const [blogID, setBlogID] = useState();
  const [valueAppli, setValueAppli] = useState(0);
  const data = useSelector((state) => state.location.location);
  const dataApply = useSelector((state) => state.apply.apply);
  console.log(data);
  const workArr = blogID && data.filter((item) => item.id === blogID)[0];
  const applyArr = blogID && dataApply.filter((item) => item.id === blogID)[0];
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
        datastr={datastr}
        setDatastr={setDatastr}
        blogID={blogID}
        setBlogID={setBlogID}
        workArr={workArr}
        data={data}
        applyArr={applyArr}
        dataApply={dataApply}
        valueAppli={valueAppli}
        setValueAppli={setValueAppli}
      />
    </div>
  );
}

export default App;
