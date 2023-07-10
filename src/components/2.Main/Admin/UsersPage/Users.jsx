import React, { useEffect, useMemo, useState } from "react";
import "./Users.css";
import { useTable } from "react-table";
import Modal from "../../../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  editLocal,
  editUser,
  removeLocal,
  setLocal,
} from "../../../../redux/slice";
import del2 from "./../../../../assets/del2.png";
import { v4 as uuidv4 } from "uuid";

const Users = ({ localDate, nameDate, modalActive, setModalActive }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [editID, setEditID] = useState();
  const [editArr, setEditArr] = useState([]);
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
    dispatch(removeLocal({ tableProps }));
    setAbc(tableProps);
  };

  const editRow = (tableProps) => {
    setEdit(true);

    setEditArr(localDate?.filter((item) => item.id === tableProps)[0]);
  };

  const handleSubmitEdit = (event) => {
    event.preventDefault();

    dispatch(editUser({ editArr }));
    setEdit(false);
  };

  const handleChangeEdit = (event) => {
    const { name, value } = event.target;

    setEditArr((values) => ({ ...values, [name]: value }));
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
        Header: "МЕСТОПОЛОЖЕНИЕ",
        accessor: "product",
      },

      {
        Header: "УПРАВЛЕНИЕ",
        accessor: "id",

        Cell: (tableProps) => (
          <div className="control">
            <div className="textEdit" onClick={() => editRow(tableProps.value)}>
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

  // const handleModalClick = () => {};

  const checkModul = () => {
    setModalActive(true);
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const handleSubmit = (event) => {
    console.log("asdasd");
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
    e.target.value == "-- выберите --" && setDis(true);
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
              <option selected>-- выберите --</option>
              {localDate[0] &&
                localDate.map((item) => (
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

      <Modal modalActive={edit} setModalActive={setEdit}>
        <div className="titleModal">ИЗМЕНИТЬ ПОЛЬЗОВАТЕЛЯ</div>
        <form onSubmit={handleSubmitEdit}>
          <div className="formsBlog">
            <label>ФИО</label>
            <input
              placeholder="фамилия, инициалы"
              type="text"
              name="name"
              value={editArr && editArr.name}
              onChange={handleChangeEdit}
            />
          </div>

          <button className="btnModal">СОЗДАТЬ</button>
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
