import React from "react";
import "./table.css";

function Table(props) {
    return (
        <table className="table table-striped table-hover table-dark">
        <thead>
            <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Department</th>
            <th scope="col">Branch</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row"><img src={props.image} alt={props.name} className="rounded-circle"/></th>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.department}</td>
            <td>{props.branch}</td>
            </tr>
        </tbody>
        </table>
    )
}

export default Table;