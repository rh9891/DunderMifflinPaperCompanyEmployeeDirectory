import React from "react";
import "./table.css";

function Table() {
    return (
        <table class="table table-striped table-hover table-dark">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Department</th>
            <th scope="col">Branch</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>John Smith</td>
            <td>jsmith@dundermifflin.com</td>
            <td>Sales</td>
            <td>New York</td>
            </tr>
        </tbody>
        </table>
    )
}

export default Table