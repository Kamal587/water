import React, { useEffect, useMemo, useState } from "react";
import "./Users.css";
import { useTable } from "react-table";
import Modal from "../../../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { editLocal, removeLocal, setLocal } from "../../../../redux/slice";
import del2 from "./../../../../assets/del2.png";
import { v4 as uuidv4 } from "uuid";

const Users = ({ localDate, nameDate, modalActive, setModalActive }) => {
  const dispatch = useDispatch();

  const [datas, setDatas] = useState([]);
  const [dis, setDis] = useState(true);
  const [optionId, setOptionId] = useState(0);
  const [abc, setAbc] = useState(0);

  const [userData, setUserData] = useState([]);

  const data = useMemo(() => datas, [datas]);

  useEffect(() => {
    setDatas(nameDate);
  }, [abc, nameDate]);

  const deleteRow = (tableProps) => {
    console.log(tableProps);
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
        Header: "ФИО РАБОТНИКА",
        accessor: "name",
      },

      {
        Header: "УПРАВЛЕНИЕ",
        accessor: "id",

        Cell: (tableProps) => (
          <img
            src={del2}
            className="delete"
            onClick={() => deleteRow(tableProps.value)}
          ></img>
        ),
      },
    ],
    []
  );

  // const handleModalClick = () => {};

  const checkModul = () => {
    setModalActive(true);
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const handleSubmit = (event) => {
    event.preventDefault();
    const optionDate = {
      name: userData.userName,
      option: optionId,
    };
    dispatch(
      editLocal({
        optionDate,
      })
    );
    userData.userName = "";
    setDis(true);
    setModalActive(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((values) => ({ ...values, [name]: value }));
  };

  const handleOption = (e) => {
    console.log(e.target.value);
    e.target.value && e.target.value !== "-- выберите --" && setDis(false);
    setOptionId(e.target.value);
  };

  return (
    <div className="head">
      <div className="blockCheck">
        <button className="check" onClick={checkModul}>
          СОЗДАТЬ
        </button>
      </div>
      <Modal modalActive={modalActive} setModalActive={setModalActive}>
        <div className="titleModal">СОЗДАТЬ ПОЛЬЗОВАТЕЛЯ</div>
        <form onSubmit={handleSubmit}>
          <div className="formsBlog">
            <label>ФИО</label>
            <input
              placeholder="фамилия, инициалы"
              type="text"
              name="userName"
              value={userData.userName}
              onChange={handleChange}
            />
          </div>
          <div className="formsBlog">
            <label>ПРОИЗВОДСТВО</label>
            <select onChange={(e) => handleOption(e)}>
              <option disabled>-- выберите --</option>
              {localDate.map((item) => (
                <option
                  key={item.id}
                  value={item.id}
                  onChange={(e) => console.log(e)}
                >
                  {item.product}
                </option>
              ))}
            </select>
            {/* <select type="text" name="product" onChange={handleChange} /> */}
          </div>

          <button className="btnModal" disabled={dis}>
            СОЗДАТЬ
          </button>
        </form>
      </Modal>
      <div className="titlePage">УПРАВЛЕНИЕ ПОЛЬЗОВАТЕЛЯМИ</div>
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

                        background: "",
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

export default Users;
