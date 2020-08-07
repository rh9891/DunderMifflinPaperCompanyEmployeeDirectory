import React, { Component } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper"
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Table from "./components/Table/Table";
import employees from "./employees.json";

class App extends Component() {
  state = {
    employees
  }
  render() {
    return (
      <Wrapper>
      <Header></Header>
      <Search></Search>
      {this.state.employees.map(employees => (
          <Table
            id={employees.id}
            key={employees.id}
            image={employees.image}
            name={employees.name}
            department={employees.department}
            branch={employees.branch}
          />
      ))}
      </Wrapper>
    );
  }
}

export default App;
