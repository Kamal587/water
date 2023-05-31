import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editWater } from "../../../redux/slice";
import Modal from "../../Modal/Modal";

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
  const data = useSelector((state) => state.location.location);
  const workArr = blogID && data.filter((item) => item.id === blogID)[0];
  const dispatch = useDispatch();
  useEffect(() => {}, [blogID]);

  const checkBlog = (id) => {
    setBlogID(id);
    setProductBlog(false);
  };

  const checkBlogProduct = (id) => {
    if (workArr.shop) {
      setBlogShop(false);
    } else if (!workArr.shop && workArr.site) {
      setBlogSite(false);
    } else if (!workArr.site && workArr.floor) {
      setBlogFloor(false);
    } else if (!workArr.floor && workArr.room) {
      setBlogRoom(false);
    }

    if (workArr.shop && !workArr.site && !workArr.floor && !workArr.room) {
      setTitleRoom(workArr.shop);
      setModalActive(true);
    }
    if (workArr.product && !workArr.site && !workArr.floor && workArr.room) {
      setModalActive(true);
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
      setModalActive(true);
    }
  };

  useEffect(() => {
    !productBlog && checkBlogProduct();
  }, [productBlog]);

  const checkBlogShop = () => {
    if (workArr.site) {
      setBlogSite(false);
    } else if (!workArr.site && workArr.floor) {
      setBlogFloor(false);
    } else if (!workArr.floor && workArr.room) {
      setTitleRoom(workArr.room);
      setBlogRoom(false);
      setModalActive(true);
    }

    if (workArr.site && !workArr.floor && !workArr.room) {
      setTitleRoom(workArr.site);
      setModalActive(true);
    }

    if (!workArr.site && workArr.floor && !workArr.room) {
      setTitleRoom(workArr.floor);
      setModalActive(true);
    }
  };
  const checkBlogSite = () => {
    if (workArr.floor) {
      setBlogFloor(false);
    } else if (!workArr.floor && workArr.room) {
      setTitleRoom(workArr.room);
      setBlogRoom(false);
      setModalActive(true);
    }

    if (workArr.floor && !workArr.room) {
      setTitleRoom(workArr.floor);
      setModalActive(true);
    }
  };
  const checkBlogFloor = () => {
    if (workArr.room) {
      setTitleRoom(workArr.room);
      setBlogRoom(false);
      setModalActive(true);
    }

    if (!workArr.room) {
      setModalActive(true);
    }
  };

  const checkBlogRoom = () => {
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
    let d = new Date();

    let datestring =
      d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
    let time = d.getHours() + ":" + d.getMinutes();
    console.log(time);
    console.log(event);
    console.log(blogID);
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
    setValueAppli(0);
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

        <Modal modalActive={modalActive} setModalActive={setModalActive}>
          <div className="titleAppli">СОЗДАТЬ ЗАЯВКУ</div>
          <div className="modalApp">
            <form onSubmit={handleSubmit}>
              <div className="formAppli">
                <label>Выбрать пользователя</label>
                <input type="text" name="user" className="inputModal" />
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
