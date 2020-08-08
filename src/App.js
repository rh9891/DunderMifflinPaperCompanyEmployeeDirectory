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

  const [sortName, setName] = useState("");

  const [sortEmail, setEmail] = useState("");

  const searchEmployee = event => {
    const filtered = employees.every.filter(({ name }) => 
      name.toLowerCase().includes(event.target.value.toLowerCase()));
    setEmployees({ ...employees, filtered });
  };

  const sortByName = () => {
      let sortedNames = employees.filtered.sort(( a, b ) => {
        const nameA = a.name;
        const nameB = b.name;

        let comparison = 0
        if (nameA > nameB) {
          comparison = 1 
        } else if (nameA < nameB) {
          comparison = -1
        } return comparison
      })
      if (sortName === "DESC") {
          sortedNames.reverse();
          setName("ASC")
      } else {
        setName("DESC")
      }
      setEmployees({
        ...employees, sortedNames
      })
  }

  const sortByEmail = () => {
    let sortedEmails = employees.filtered.sort(( a, b ) => {
      const emailA = a.email;
      const emailB = b.email;

      let comparison = 0
      if (emailA > emailB) {
        comparison = 1 
      } else if (emailA < emailB) {
        comparison = -1
      } return comparison
    })
    if (sortEmail === "DESC") {
        sortedEmails.reverse();
        setEmail("ASC")
    } else {
      setEmail("DESC")
    }
    setEmployees({
      ...employees, sortedEmails
    })
}

    return (
      <Wrapper>
      <Header></Header>
      <Search handleSearch={searchEmployee}></Search>
      <Table employees={employees.filtered} sortByName={sortByName} sortByEmail={sortByEmail}></Table>
      </Wrapper>
    );
}

export default App;