import React, { useEffect, useMemo, useState } from "react";
import "./Location.css";
import { useTable } from "react-table";
import Modal from "../../../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setLocal } from "../../../../redux/slice";

const Location = ({ formData, setFormData, modalActive, setModalActive }) => {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const localDate = useSelector((state) => state.location.location);
  console.log(localDate);
  // const [valueProd, setValueProd] = useState();
  // const [valueShop, setValueShop] = useState();
  // const [valueSite, setValueSite] = useState();
  // const [valueFloor, setValueFloor] = useState();
  // const [valueRoom, setValueRoom] = useState();

  const columns = React.useMemo(
    () => [
      {
        Header: "№",
        accessor: "number", // accessor is the "key" in the data
      },
      {
        Header: "ПРОИЗВОДСТВО",
        accessor: "production",
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
        accessor: "control",
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
    event.preventDefault();
    dispatch(
      setLocal({
        location: formData,
      })
    );
    console.log(event.target.product);
    console.log(formData);
    setFormData([]);
    event.target.product.value = "";
    event.target.shop.value = "";
    setModalActive(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const checkData = () => {
    console.log("asd");
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
