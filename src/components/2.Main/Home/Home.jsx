import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../../Modal/Modal";

import "./Home.css";

const Home = () => {
  const [productBlog, setProductBlog] = useState(true);
  const [blogID, setBlogID] = useState();
  const [blogShop, setBlogShop] = useState(true);
  const [blogFloor, setBlogFloor] = useState(true);
  const [blogSite, setBlogSite] = useState(true);
  const [blogRoom, setBlogRoom] = useState(true);
  const [btn, setBtn] = useState(true);
  const [modalActive, setModalActive] = useState(false);
  const data = useSelector((state) => state.location.location);
  const workArr = blogID && data.filter((item) => item.id === blogID)[0];

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
      setBtn(false);
    }
  };

  const checkBlogShop = () => {
    if (workArr.site) {
      setBlogSite(false);
    } else if (!workArr.site && workArr.floor) {
      setBlogFloor(false);
    } else if (!workArr.floor && workArr.room) {
      setBlogRoom(false);
      setBtn(false);
    }

    if (workArr.site && !workArr.floor && !workArr.room) {
      setBtn(false);
    }
  };
  const checkBlogSite = () => {
    if (workArr.floor) {
      setBlogFloor(false);
    } else if (!workArr.floor && workArr.room) {
      setBlogRoom(false);
      setBtn(false);
    }

    if (workArr.floor && !workArr.room) {
      setBtn(false);
      console.log("aaa");
    }
  };
  const checkBlogFloor = () => {
    if (workArr.room) {
      setBlogRoom(false);
      setBtn(false);
    }

    if (!workArr.room) {
      setBtn(false);
    }
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

  const handleClick = () => {
    setModalActive(true);
  };

  const handleSubmit = () => {};

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
          <div className={blogRoom ? "blogRoomOff" : "blogRoom"}>
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
        <button
          className={btn ? "btnAppliOff" : "btnAppli"}
          onClick={handleClick}
        >
          создать заявку
        </button>
        <Modal modalActive={modalActive} setModalActive={setModalActive}>
          <div className="titleAppli">СОЗДАТЬ ЗАЯВКУ</div>

          <form onSubmit={handleSubmit}>
            <div className="formAppli">
              <label>Выбрать пользователя</label>
              <input type="text" name="user" />
            </div>
            <div className="formAppli">
              <label>Количество бутылей</label>
              <input type="text" name="product" />
            </div>

            <button className="btnModal_Appli">СОЗДАТЬ</button>
          </form>
          <div>asdasd</div>
        </Modal>
      </div>
    </div>
  );
};

export default Home;
