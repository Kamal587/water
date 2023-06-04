import React, { useEffect, useMemo, useState } from "react";
import "./Location.css";
import { useTable } from "react-table";
import Modal from "../../../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { editPlace, removeLocal, setLocal } from "../../../../redux/slice";
import del2 from "./../../../../assets/del2.png";
import { v4 as uuidv4 } from "uuid";

const Location = ({ modalActive, setModalActive }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [editID, setEditID] = useState();
  const [editArr, setEditArr] = useState();
  const [datas, setDatas] = useState([]);
  const [abc, setAbc] = useState(0);

  const [formData, setFormData] = useState([]);
  const localDate = useSelector((state) => state.location.location);
  const data = useMemo(() => datas, [datas]);
  const { v4: uuidv4 } = require("uuid");
  useEffect(() => {
    setDatas(localDate);
  }, [formData, abc, localDate]);





  // EDIT
  const editRow = (tableProps, e) => {
    e.preventDefault();
    setAbc(+abc + 1);
    setEditID(tableProps);

    setEditArr(datas.filter((item) => item.id === editID)[0]);
    console.log(datas);
    editArr && setEdit(true);
  };

// 

  const handleSubmitEdit = (event) => {
    event.preventDefault();

    console.log("submit");

    dispatch(editPlace({ editArr }));
  };

  const handleChangeEdit = (event) => {
    const { name, value } = event.target;
    setEditArr((values) => ({ ...values, [name]: value }));
    console.log("change");
  };

  const deleteRow = (tableProps) => {
    dispatch(removeLocal({ tableProps }));
    setAbc(tableProps);
  };
  const columns = React.useMemo(
    () => [
      {
        Header: "№",
        accessor: "number", // accessor is the "key" in the data
      },
      {
        Header: "ПРОИЗВОДСТВО",
        accessor: "product",
      },
      {
        Header: "ЦЕХ",
        accessor: "shop",
      },
      {
        Header: "УЧАСТОК",
        accessor: "site",
      },
      {
        Header: "ЭТАЖ",
        accessor: "floor",
      },
      {
        Header: "КОМНАТА",
        accessor: "room",
      },
      {
        Header: "УПРАВЛЕНИЕ",
        accessor: "id",

        Cell: (tableProps) => (
          <div className="control">
            <div
              className="textEdit"
              onClick={(e) => editRow(e, tableProps.value)}
            >
              EDIT
            </div>
            <img
              src={del2}
              className="delete"
              onClick={() => deleteRow(tableProps.value)}
            ></img>
          </div>
        ),
      },
    ],
    []
  );

  const checkModul = () => {
    setModalActive(true);
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const handleSubmit = (event) => {
    setDatas(localDate);
    uuidv4();
    event.preventDefault();

    formData.product &&
      dispatch(
        setLocal({
          formData,
        })
      );

    setFormData([]);
    event.target.product.value = "";
    event.target.shop.value = "";
    event.target.site.value = "";
    event.target.floor.value = "";
    event.target.room.value = "";
    setModalActive(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="head">
      <div className="blockCheck">
        <button className="check" onClick={checkModul}>
          СОЗДАТЬ
        </button>
      </div>
      <Modal modalActive={modalActive} setModalActive={setModalActive}>
        <div className="titleModal">СОЗДАТЬ МЕСТОПОЛОЖЕНИЕ</div>
        <form onSubmit={handleSubmit}>
          <div className="formsBlog">
            <label>ID</label>
            <input
              type="text"
              name="id"
              value={uuidv4()}
              onChange={handleChange}
            />
          </div>
          <div className="formsBlog">
            <label>ПРОИЗВОДСТВО</label>
            <input
              type="text"
              name="product"
              value={formData.product}
              onChange={handleChange}
            />
          </div>
          <div className="formsBlog">
            <label>ЦЕХ</label>
            <input
              type="text"
              name="shop"
              value={formData.shop}
              onChange={handleChange}
            />
          </div>
          <div className="formsBlog">
            <label>УЧАСТОК</label>
            <input
              type="text"
              name="site"
              value={formData.site}
              onChange={handleChange}
            />
          </div>

          <div className="formsBlog">
            <label>ЭТАЖ</label>
            <input
              type="text"
              name="floor"
              value={formData.floor}
              onChange={handleChange}
            />
          </div>

          <div className="formsBlog">
            <label>КОМНАТА</label>
            <input
              type="text"
              name="room"
              value={formData.room}
              onChange={handleChange}
            />
          </div>

          <button className="btnModal">СОЗДАТЬ</button>
        </form>
      </Modal>

      <Modal modalActive={edit} setModalActive={setEdit}>
        <div className="titleModal">ИЗМЕНИТЬ МЕСТОПОЛОЖЕНИЕ</div>
        <form onSubmit={handleSubmitEdit}>
          <div className="formsBlog">
            <label>ID</label>
            <input
              type="text"
              name="id"
              value={editID}
              onChange={handleChangeEdit}
            />
          </div>
          <div className="formsBlog">
            <label>ПРОИЗВОДСТВО</label>
            <input
              type="text"
              name="product"
              value={editArr && editArr.product}
              onChange={handleChangeEdit}
            />
          </div>
          <div className="formsBlog">
            <label>ЦЕХ</label>
            <input
              type="text"
              name="shop"
              value={editArr && editArr.shop}
              onChange={handleChangeEdit}
            />
          </div>
          <div className="formsBlog">
            <label>УЧАСТОК</label>
            <input
              type="text"
              name="site"
              value={editArr && editArr.site}
              onChange={handleChangeEdit}
            />
          </div>

          <div className="formsBlog">
            <label>ЭТАЖ</label>
            <input
              type="text"
              name="floor"
              value={editArr && editArr.floor}
              onChange={handleChangeEdit}
            />
          </div>

          <div className="formsBlog">
            <label>КОМНАТА</label>
            <input
              type="text"
              name="room"
              value={editArr && editArr.room}
              onChange={handleChangeEdit}
            />
          </div>

          <button className="btnModal">СОЗДАТЬ</button>
        </form>
      </Modal>

      <div className="titlePage">УПРАВЛЕНИЕ МЕСТОПОЛОЖЕНИЯМИ</div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: "solid 1px gray",
                        background: "papayawhip",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Location;
