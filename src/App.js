import React from "react";
import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper"
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Table from "./components/Table/Table";

function App() {

    return (
      <Wrapper>
      <Header></Header>
      <Search></Search>
      <Table></Table>
      </Wrapper>
    );
}

export default App;