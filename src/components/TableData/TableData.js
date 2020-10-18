import React from "react";

function TableData({ image, name, email, department, branch }) {
  return (
    <tr>
      <th scope="row">
        <img src={image} alt={name} className="rounded-circle" />
      </th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{department}</td>
      <td>{branch}</td>
    </tr>
  );
}

export default TableData;
