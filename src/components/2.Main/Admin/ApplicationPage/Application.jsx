import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useTable } from "react-table";

const Application = () => {
  const [datas, setDatas] = useState([]);
  const localDate = useSelector((state) => state.location.location);
  const localDateAppli = localDate.filter((item) => item.datestring);
  const data = useMemo(() => datas, [datas]);

  useEffect(() => {
    setDatas(localDateAppli);
  }, []);

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
        Header: "ДАТА",
        accessor: "datestring",

        // Cell: (tableProps) => (
        //   <div className="control">
        //     <div className="textEdit" onClick={() => editRow(tableProps)}>
        //       EDIT
        //     </div>
        //     <img
        //       src={del2}
        //       className="delete"
        //       onClick={() => deleteRow(tableProps.value)}
        //     ></img>
        //   </div>
        // ),
      },
      {
        Header: "ВРЕМЯ РЕАГИРОВАНИЯ",
        accessor: "time",
      },
      {
        Header: "РАБОТНИК ФИО",
        accessor: "name",
      },
      {
        Header: "КОЛ-ВО БУТЫЛЕЙ",
        accessor: "water",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div>
      <div className="titlePage">СПИСОК ЗАЯВОК</div>
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

export default Application;
