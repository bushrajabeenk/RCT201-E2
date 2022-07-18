import React, { useState } from "react";
import { PageStyled } from "./Pagination.styled";

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
      <PageStyled onClick={() => setSelect(select - 1)} className="box1">
        Previous
      </PageStyled>

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

      <PageStyled onClick={() => setSelect(select + 1)} className="box1">
        Next
      </PageStyled>
    </div>
  );
};

export default Pagination;
