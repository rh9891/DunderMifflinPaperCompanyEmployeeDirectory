import React from "react";
import "./table.css";
import TableData from "../TableData/TableData";
import employees from "../../employees.json"

function Table(props) {

    return (
        <table className="table table-striped table-hover table-dark">
            <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col"><i className="fas fa-envelope-open-text"></i> Email</th>
                <th scope="col"><i className="far fa-building"></i> Department</th>
                <th scope="col"><i className="fas fa-city"></i> Branch</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee =>
                <TableData
                    key={employee.id}
                    id={employee.id}
                    image={employee.image}
                    name={employee.name}
                    email={employee.email}
                    department={employee.department}
                    branch={employee.branch} />)}
            </tbody>
        </table>
    )
}

export default Table;