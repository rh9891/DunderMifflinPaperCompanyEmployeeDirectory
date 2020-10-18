import React from "react";
import TableData from "../TableData/TableData";

function Table({
  sortByName,
  sortByEmail,
  sortByDepartment,
  sortByBranch,
  employees,
}) {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover table-dark">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col" onClick={sortByName}>
              <i className="fas fa-user-tie"></i> &nbsp;Employee Name
            </th>
            <th scope="col" onClick={sortByEmail}>
              <i className="fas fa-envelope-open-text"></i> &nbsp;Email Address
            </th>
            <th scope="col" onClick={sortByDepartment}>
              <i className="far fa-building"></i> &nbsp;Department
            </th>
            <th scope="col" onClick={sortByBranch}>
              <i className="fas fa-city"></i> &nbsp;Branch
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
    </div>
  );
}

export default Table;
