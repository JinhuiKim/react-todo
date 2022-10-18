import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import { Col, Row } from "antd";

import Header from "./components/Header";
// import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Todo from "./components/Todo";

import { getTodoLists } from "./util/api";

const App = () => {
  // console.log("App");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    // setTimeout(() => {
    getTodoLists().then((data) => {
      setTodoList(data);
    });
    // }, 1000);
  }, []);

  return (
    <Row>
      <Col span={24}>
        <Header />
      </Col>
      <BrowserRouter>
        <Col span={16} offset={4}>
          <Nav />
          <Routes>
            <Route
              path="/"
              element={<Todo todoList={todoList} setTodoList={setTodoList} />}
            />
            {/* <Route path="/todo" element={<Todo />} />
            <Route path="/dome" element={<Todo />} /> */}
          </Routes>
        </Col>
      </BrowserRouter>
      {/* <Footer /> */}
    </Row>
  );
};

export default App;
