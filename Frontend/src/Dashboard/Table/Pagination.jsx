import React from "react";

const Pagination = ({ totalRows, rowPerPage, setCurrentPage, currentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalRows / rowPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className=" flex justify-center ">
      <div className="w-2/3 flex justify-center gap-4">
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={`py-1 text-xl px-3 border border-black shadow shadow-black my-3 rounded-xl ${
                page === currentPage
                  ? "bg-blue-700 text-white"
                  : "bg-white text-black"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
