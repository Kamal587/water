import React, { useState } from "react";
import "./ColumnFilter.css";
import t from "./../../../../assets/t.png";

export const ColumnFilter = ({ column }) => {
  const [search, setSearch] = useState(false);
  const { filterValue, setFilter } = column;
  const handleClick = () => {
    setSearch(!search);
  };
  return (
    <div>
      <div className="d" onClick={handleClick}>
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
      <div className={search ? "int" : "inpNone"}>
        <input
          className="inputFilter"
          value={filterValue || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
    </div>
  );
};
