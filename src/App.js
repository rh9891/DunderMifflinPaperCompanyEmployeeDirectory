import React, { useState } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper"
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Table from "./components/Table/Table";
import employeesArr from "../src/employees.json";

function App() {
  // const [sortName, setName] = useState("");
  const [employees, setEmployees] = useState({
    every: employeesArr,
    filtered: employeesArr,
  });
  const searchEmployee = event => {
    const filtered = employees.every.filter(({ name }) => 
      name.toLowerCase().includes(event.target.value.toLowerCase()));
    setEmployees({ ...employees, filtered });
  };

    return (
      <Wrapper>
      <Header></Header>
      <Search handleSearch={searchEmployee}></Search>
      <Table employees={employees.filtered}></Table>
      </Wrapper>
    );
}

export default App;