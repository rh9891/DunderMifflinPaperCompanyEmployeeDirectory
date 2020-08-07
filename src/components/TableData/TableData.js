import React from "react";
import "./tableData.css";

function TableData(props) {
    return (
        <tr>
            <th scope="row"><img src={props.image} alt={props.name} className="rounded-circle"/></th>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.department}</td>
            <td>{props.branch}</td>
        </tr>
    )
}

export default TableData;