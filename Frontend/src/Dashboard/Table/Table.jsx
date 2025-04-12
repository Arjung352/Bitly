import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
function Table() {
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState([]);
  const [rowPerPage, setRowPerPage] = useState(5);

  const lastRowIndex = currentPage * rowPerPage;
  const firstRowIndex = lastRowIndex - rowPerPage;
  const currentRow = tableData.slice(firstRowIndex, lastRowIndex);

  // Sample dummy data
  useEffect(() => {
    const dummyData = Array.from({ length: 20 }).map((_, i) => ({
      originalUrl: `https://example.com/long-url-${i + 1}`,
      shortUrl: `https://bit.ly/short${i + 1}`,
      totalClicks: Math.floor(Math.random() * 100),
      createdAt: new Date().toLocaleDateString(),
    }));
    setTableData(dummyData);
  }, []);

  const TableRow = ({ data }) => (
    <tr className="hover:bg-gray-100 transition">
      <td className="py-3 px-4 truncate max-w-xs">{data.originalUrl}</td>
      <td className="py-3 px-4 text-blue-600 hover:underline cursor-pointer">
        <a href={data.shortUrl} target="_blank" rel="noopener noreferrer">
          {data.shortUrl}
        </a>
      </td>
      <td className="py-3 px-4">{data.totalClicks}</td>
      <td className="py-3 px-4">{data.createdAt}</td>
    </tr>
  );

  return (
    <div className="overflow-x-auto my-8 rounded-2xl shadow-xl">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-blue-700 text-white text-left">
            <th className="py-3 px-4">Original URL</th>
            <th className="py-3 px-4">Short URL</th>
            <th className="py-3 px-4">Total Clicks</th>
            <th className="py-3 px-4">Created Date</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {currentRow.map((row, index) => (
            <TableRow key={index} data={row} />
          ))}
        </tbody>
      </table>
      <Pagination
        totalRows={tableData.length}
        rowPerPage={rowPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Table;
