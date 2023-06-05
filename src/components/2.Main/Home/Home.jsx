import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editWater } from "../../../redux/slice";
import Modal from "../../Modal/Modal";
import arrow from "./../../../assets/Arrow.png";
import moment from "moment";
import "./Home.css";

const Home = () => {
  const [productBlog, setProductBlog] = useState(true);
  const [blogID, setBlogID] = useState();
  const [blogShop, setBlogShop] = useState(true);
  const [blogFloor, setBlogFloor] = useState(true);
  const [blogSite, setBlogSite] = useState(true);
  const [blogRoom, setBlogRoom] = useState(true);
  const [titleRoom, setTitleRoom] = useState();
  const [valueAppli, setValueAppli] = useState(0);
  const [modalActive, setModalActive] = useState(false);
  // TIME
  const [timeStart, setTimeStart] = useState([]);
  const [timeEnd, setTimeEnd] = useState([]);

  // END TIME

  // ПУТЬ
  const [modalWayEnd, setModalWayEnd] = useState(false);
  const [modalWay, setModalWay] = useState(false);
  const [wayOfEnd, setWayOfEnd] = useState(false);
  const [wayOf, setWayOf] = useState(false);
  const [prodWay, setProdWay] = useState();
  const [siteWay, setSiteWay] = useState();
  const [shopWay, setShopWay] = useState();
  const [floorWay, setFloorWay] = useState();
  const [roomWay, setRoomWay] = useState();
  //
  const data = useSelector((state) => state.location.location);
  const workArr = blogID && data.filter((item) => item.id === blogID)[0];
  const dispatch = useDispatch();
  useEffect(() => {}, [blogID]);
  console.log(workArr);
  const checkBlog = (id) => {
    setBlogID(id);
    setProductBlog(false);
  };
  console.log(workArr);
  const checkBlogProduct = (id) => {
    if (workArr.shop) {
      setBlogShop(false);
      setProdWay(workArr.product);
      setShopWay(workArr.shop);
    } else if (!workArr.shop && workArr.site) {
      setBlogSite(false);
      setProdWay(workArr.product);
      setSiteWay(workArr.site);
    } else if (!workArr.site && workArr.floor) {
      setBlogFloor(false);
      setProdWay(workArr.product);
      setFloorWay(workArr.floor);
    } else if (!workArr.floor && workArr.room) {
      setBlogRoom(false);
      setProdWay(workArr.product);
      setRoomWay(workArr.room);
    }

    if (workArr.shop && !workArr.site && !workArr.floor && !workArr.room) {
      setTitleRoom(workArr.shop);
      setProdWay(workArr.product);
      setShopWay(workArr.shop);
      setModalActive(true);
    }
    if (workArr.product && !workArr.site && !workArr.floor && workArr.room) {
      setModalActive(true);
      setProdWay(workArr.product);
      setRoomWay(workArr.room);
      setTitleRoom(workArr.room);
    }
    if (
      workArr.product &&
      !workArr.shop &&
      !workArr.site &&
      workArr.floor &&
      !workArr.room
    ) {
      setTitleRoom(workArr.floor);
      setProdWay(workArr.product);
      setFloorWay(workArr.floor);
      setModalActive(true);
    }
  };

  useEffect(() => {
    !productBlog && checkBlogProduct();
  }, [productBlog]);

  const checkBlogShop = () => {
    if (workArr.site) {
      setBlogSite(false);
      setSiteWay(workArr.site);
    } else if (!workArr.site && workArr.floor) {
      setFloorWay(workArr.floor);
      setBlogFloor(false);
    } else if (!workArr.floor && workArr.room) {
      setTitleRoom(workArr.room);
      setRoomWay(workArr.room);
      setBlogRoom(false);
      setModalActive(true);
    }

    if (workArr.site && !workArr.floor && !workArr.room) {
      setSiteWay(workArr.site);
      setTitleRoom(workArr.site);
      setModalActive(true);
    }

    if (!workArr.site && workArr.floor && !workArr.room) {
      setFloorWay(workArr.floor);
      setTitleRoom(workArr.floor);
      setModalActive(true);
    }
  };
  const checkBlogSite = () => {
    if (workArr.floor) {
      setBlogFloor(false);
      setFloorWay(workArr.floor);
    } else if (!workArr.floor && workArr.room) {
      setTitleRoom(workArr.room);
      setRoomWay(workArr.room);
      setBlogRoom(false);
      setModalActive(true);
    }

    if (workArr.floor && !workArr.room) {
      setFloorWay(workArr.floor);
      setTitleRoom(workArr.floor);
      setModalActive(true);
    }
  };
  const checkBlogFloor = () => {
    if (workArr.room) {
      setTitleRoom(workArr.room);
      setRoomWay(workArr.room);
      setBlogRoom(false);
      setModalActive(true);
    }

    if (!workArr.room) {
      setModalActive(true);
    }
  };

  const checkBlogRoom = () => {
    setRoomWay(workArr.room);
    setModalActive(true);
  };

  const btnProduct = () => {
    setProductBlog(true);
  };

  const btnShop = () => {
    setBlogShop(true);
  };

  const btnSite = () => {
    setBlogSite(true);
  };

  const btnFloor = () => {
    setBlogFloor(true);
  };

  const btnRoom = () => {
    setBlogRoom(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setWayOf(true);
    // let d = new Date();

    // let datestring =
    //   d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
    // let time = d.getHours() + ":" + d.getMinutes();

    // const waterDate = {
    //   water: valueAppli,
    //   waterId: blogID,
    //   datestring,
    //   time,
    // };
    // dispatch(
    //   editWater({
    //     waterDate,
    //   })
    // );
    // setValueAppli(0);
    setModalActive(false);
  };

  const oneCheck = (e) => {
    e.preventDefault();
    setValueAppli(+valueAppli + 1);
  };

  const twoCheck = (e) => {
    e.preventDefault();
    setValueAppli(+valueAppli + 5);
  };

  const minusOne = (e) => {
    e.preventDefault();
    +valueAppli > 0 && setValueAppli(+valueAppli - 1);
  };

  const minusFive = (e) => {
    e.preventDefault();
    +valueAppli >= 5 && setValueAppli(+valueAppli - 5);
  };

  const hasWayClick = () => {
    setModalWay(true);
  };

  const hasWayClickEnd = () => {
    console.log("asd");
    setModalWayEnd(true);
  };

  const hasModalWayOn = (e) => {
    e.preventDefault();
    let d = new Date();

    let datestring =
      d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
    let time = d.getHours() + ":" + d.getMinutes();
    const waterDate = {
      water: valueAppli,
      waterId: blogID,
      datestring,
      time,
    };
    dispatch(
      editWater({
        waterDate,
      })
    );
    console.log(waterDate);
    setValueAppli(0);
    // let d = new Date();
    // let starts = moment(d);
    // let ends = moment();

    // console.log(starts);
    setModalWay(false);
    setWayOf(false);
    setWayOfEnd(true);
  };

  const hasModalWayOFF = () => {
    setModalWayEnd(false);
    setWayOfEnd(false);
    setProdWay("");
    setShopWay("");
    setSiteWay("");
    setFloorWay("");
    setRoomWay("");
    setBlogFloor(true);
    setBlogRoom(true);
    setBlogShop(true);
    setBlogSite(true);

    setProductBlog(true);
  };
  const hasModalWayOFFStop = () => {
    console.log("aaa");
    setModalWay(false);
  };
  const hasModalWayOnSTOP = () => {
    setModalWay(false);
  };

  const changeInput = (event) => setValueAppli(event.target.value);

  return (
    <div className="wrapperHome">
      <div className={productBlog ? "mainHead" : "mainHeadOff"}>
        <div className="containerHome">
          {data.map((item) => (
            <div className="blog" onClick={() => checkBlog(item.id)}>
              <div className="textBlog">ПРОИЗВОДСТВО</div>
              <div className="prod">{item.product}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={productBlog ? "productOff" : "productOn"}>
        <div>
          <div>
            <div className="blog" onClick={(e) => checkBlogProduct(e)}>
              <div className="textBlog">ПРОИЗВОДСТВО</div>
              <div className="prod">{workArr && workArr.product}</div>
            </div>
            <div className="blogBtn" onClick={btnProduct}>
              НАЗАД
            </div>
          </div>

          <div>
            <div
              className={blogShop ? "blogShopOff" : "blogShop"}
              onClick={() => checkBlogShop(workArr.site)}
            >
              <div className="textblogShop">ЦЕХ</div>
              <div className="shop">{workArr && workArr.shop}</div>
            </div>
            <div
              className={blogShop ? "blogShopOff" : "blogBtn"}
              onClick={btnShop}
            >
              НАЗАД
            </div>
          </div>

          <div>
            <div
              className={blogSite ? "blogSiteOff" : "blogSite"}
              onClick={() => checkBlogSite(workArr.site)}
            >
              <div className="textblogSite">УЧАСТОК</div>
              <div className="site">{workArr && workArr.site}</div>
            </div>
            <div
              className={blogSite ? "blogSiteOff" : "blogBtn"}
              onClick={btnSite}
            >
              НАЗАД
            </div>
          </div>

          <div>
            <div
              className={blogFloor ? "blogFloorOff" : "blogFloor"}
              onClick={() => checkBlogFloor(workArr.floor)}
            >
              <div className="textblogFloor">ЭТАЖ</div>
              <div className="floor">{workArr && workArr.floor}</div>
            </div>
            <div
              className={blogFloor ? "blogFloorOff" : "blogBtn"}
              onClick={btnFloor}
            >
              НАЗАД
            </div>
          </div>

          <div>
            <div
              className={blogRoom ? "blogRoomOff" : "blogRoom"}
              onClick={() => checkBlogRoom(workArr.room)}
            >
              <div className="textblogRoom">КОМНАТА</div>
              <div className="room">{workArr && workArr.room}</div>
            </div>
            <div
              className={blogRoom ? "blogRoomOff" : "blogBtn"}
              onClick={btnRoom}
            >
              НАЗАД
            </div>
          </div>
        </div>

        {/* ПУТЬ */}
        <div className={wayOf ? "way" : "wayOff"}>
          <div>
            {roomWay || floorWay || siteWay || shopWay || prodWay} ({prodWay}
            <img src={arrow} alt="" className="arrow" />
            {shopWay && <span>цех</span>} {shopWay}{" "}
            {siteWay && <img src={arrow} alt="" className="arrow" />}
            {siteWay && <span>участок</span>} {siteWay}{" "}
            {floorWay && <img src={arrow} alt="" className="arrow" />}{" "}
            {floorWay && <span>этаж</span>} {floorWay}{" "}
            {roomWay && <img src={arrow} alt="" className="arrow" />} {roomWay})
          </div>
          <button className="btnWay" onClick={hasWayClick}>
            Взять
          </button>
        </div>

        <div className={wayOfEnd ? "way" : "wayOff"}>
          <div>
            {roomWay || floorWay || siteWay || shopWay || prodWay} ({prodWay}
            <img src={arrow} alt="" className="arrow" />
            {shopWay && <span>цех</span>} {shopWay}{" "}
            {siteWay && <img src={arrow} alt="" className="arrow" />}
            {siteWay && <span>участок</span>} {siteWay}{" "}
            {floorWay && <img src={arrow} alt="" className="arrow" />}{" "}
            {floorWay && <span>этаж</span>} {floorWay}{" "}
            {roomWay && <img src={arrow} alt="" className="arrow" />} {roomWay})
          </div>
          <div className="textWay">
            <span className="textWayRed">Работает:</span>
            <button className="btnWayEnd" onClick={hasWayClickEnd}>
              Завершить
            </button>
          </div>
        </div>

        {/* END ПУТЬ  */}
        <Modal modalActive={modalWay} setModalActive={setModalWay}>
          <div className="modalWay">
            <div className="titleWay">ЗАЯВКА</div>
            <div className="textModalWay">
              {roomWay || floorWay || siteWay || shopWay || prodWay} ({prodWay}
              <img src={arrow} alt="" className="arrow" />
              {shopWay && <span>цех</span>} {shopWay}{" "}
              {siteWay && <img src={arrow} alt="" className="arrow" />}
              {siteWay && <span>участок</span>} {siteWay}{" "}
              {floorWay && <img src={arrow} alt="" className="arrow" />}{" "}
              {floorWay && <span>этаж</span>} {floorWay}{" "}
              {roomWay && <img src={arrow} alt="" className="arrow" />}{" "}
              {roomWay})
            </div>
            <div className="btns">
              <button className="btnOn" onClick={hasModalWayOn}>
                Взять
              </button>
              <button className="btnOFF" onClick={hasModalWayOnSTOP}>
                Отмена
              </button>
            </div>
          </div>
        </Modal>

        <Modal modalActive={modalWayEnd} setModalActive={setModalWayEnd}>
          <div className="modalWay">
            <div className="titleWay">ЗАЯВКА</div>
            <div className="textModalWay">
              {roomWay || floorWay || siteWay || shopWay || prodWay} ({prodWay}
              <img src={arrow} alt="" className="arrow" />
              {shopWay && <span>цех</span>} {shopWay}{" "}
              {siteWay && <img src={arrow} alt="" className="arrow" />}
              {siteWay && <span>участок</span>} {siteWay}{" "}
              {floorWay && <img src={arrow} alt="" className="arrow" />}{" "}
              {floorWay && <span>этаж</span>} {floorWay}{" "}
              {roomWay && <img src={arrow} alt="" className="arrow" />}{" "}
              {roomWay})
            </div>
            <div className="time">Время:</div>
            <div className="btns">
              <button className="btnOn" onClick={hasModalWayOFF}>
                Завершить
              </button>
              <button className="btnOFF" onClick={hasModalWayOFFStop}>
                Отмена
              </button>
            </div>
          </div>
        </Modal>

        <Modal modalActive={modalActive} setModalActive={setModalActive}>
          <div className="titleAppli">СОЗДАТЬ ЗАЯВКУ</div>
          <div className="modalApp">
            <form onSubmit={handleSubmit}>
              <div className="formAppli">
                <label>Выбрать пользователя</label>
                <input
                  type="text"
                  name="user"
                  className="inputModal"
                  value={workArr && workArr.name}
                />
              </div>
              <div className="formAppli">
                <label>Количество бутылей</label>
                <input
                  type="number"
                  value={valueAppli}
                  name="product"
                  onChange={changeInput}
                  className="inputModal"
                />
              </div>
              <div className="btnInp">
                <button onClick={oneCheck}>+1</button>
                <button onClick={twoCheck}>+5</button>
                <button onClick={minusOne}>-1</button>
                <button onClick={minusFive}>-5</button>
              </div>

              <button className="btnModal_Appli">СОЗДАТЬ</button>
            </form>
            <div className="titleRoom">{titleRoom}</div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Home;
