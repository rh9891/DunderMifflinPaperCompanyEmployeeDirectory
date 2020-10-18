import React from "react";
import "./tableData.css";

function TableData({ image, name, email, department, branch }) {
  return (
    <tr>
      <th scope="row">
        <img src={image} alt={name} className="rounded-circle" />
      </th>
      <td className="text-center">{name}</td>
      <td className="text-center">{email}</td>
      <td className="text-center">{department}</td>
      <td className="text-center">{branch}</td>
    </tr>
  );
}

export default TableData;
