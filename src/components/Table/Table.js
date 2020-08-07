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
                <th scope="col">Email</th>
                <th scope="col">Department</th>
                <th scope="col">Branch</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => (
                <TableData
                    // id={employee.id}
                    key={employee.id}
                    image={employee.image}
                    name={employee.name}
                    email={employee.email}
                    department={employee.department}
                    branch={employee.branch} />))}
            </tbody>
        </table>
    )
}

export default Table;