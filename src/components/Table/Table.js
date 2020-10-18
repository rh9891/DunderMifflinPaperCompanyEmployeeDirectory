import React from "react";
import TableData from "../TableData/TableData";
import "./table.css";

function Table({
  sortByName,
  sortByEmail,
  sortByDepartment,
  sortByBranch,
  employees,
}) {
  return (
    <table className="table table-striped table-hover table-dark">
      <thead>
        <tr>
          <th className="text-center" scope="col"></th>
          <th className="text-center" scope="col" onClick={sortByName}>
            Employee
          </th>
          <th className="text-center" scope="col" onClick={sortByEmail}>
            Email Address
          </th>
          <th className="text-center" scope="col" onClick={sortByDepartment}>
            Department
          </th>
          <th className="text-center" scope="col" onClick={sortByBranch}>
            Branch
          </th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <TableData
            key={employee.id}
            id={employee.id}
            image={employee.image}
            name={employee.name}
            email={employee.email}
            department={employee.department}
            branch={employee.branch}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
