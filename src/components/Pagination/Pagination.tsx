import React, { useState } from "react";
import "./Pagination.css";

type PaginationProps = {
  count: number;
  currentPage: number;
  updateCurrentPage: number;
};

const Pagination = (props: PaginationProps) => {
  const [select, setSelect] = useState(props.currentPage);
  const pages = new Array(props.count).fill(0);

  return (
    <div
      data-testid="page-cont"
      className="pageContainer"
      style={{ display: "flex" }}
    >
      <div
        data-testid="prev"
        onClick={() => setSelect(select - 1)}
        className="box1"
      >
        Previous
      </div>

      {pages.map((el, ind) => {
        return (
          <div
            data-testid="items"
            className={`box1 ${select - 1 === ind ? "selected" : "box1"}`}
            key={ind}
          >
            {ind + 1}
          </div>
        );
      })}

      <div
        data-testid="nex"
        onClick={() => setSelect(select + 1)}
        className="box1"
      >
        Next
      </div>
    </div>
  );
};

export default Pagination;
