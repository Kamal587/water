import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useTable, useFilters } from "react-table";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import { ColumnFilter } from "./ColumnFilter";

const Application = () => {
  const [datas, setDatas] = useState([]);
  const apply = useSelector((state) => state.apply.apply);
  const localDateAppli = apply.filter((item) => item.water);
  const data = useMemo(() => datas, [datas]);

  useEffect(() => {
    setDatas(localDateAppli);
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "№",
        accessor: "number",

        disableFilters: true,
        // accessor is the "key" in the data
      },
      {
        Header: "ПРОИЗВОДСТВО",
        accessor: "product",
        Filter: ColumnFilter,
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
        disableFilters: true,
      },
      {
        Header: "ВРЕМЯ РЕАГИРОВАНИЯ  (минуты)",
        accessor: "time",
        disableFilters: true,
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

  const defaultColumn = React.useMemo(
    () => ({
      Filter: ColumnFilter,
    }),
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data, defaultColumn }, useFilters);

  return (
    <div>
      <div className="titlePage">СПИСОК ЗАЯВОК</div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}

                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
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
