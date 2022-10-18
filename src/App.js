import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Col, Row } from "antd";
import "antd/dist/antd.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Todo from "./components/Todo";

import { getTodoLists } from "./util/api";

const App = () => {
  // console.log("App");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getTodoLists("/todo").then((data) => {
        setTodoList(data);
      });
    }, 1000);
  }, []);

  return (
    <BrowserRouter>
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Nav />
        </Col>
        <Col span={24}>
          <Routes>
            <Route
              path="/"
              element={<Todo todoList={todoList} setTodoList={setTodoList} />}
            />
            <Route path="/todo" element={<Todo />} />
            <Route path="/dome" element={<Todo />} />
          </Routes>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Footer />
        </Col>
      </Row>
    </BrowserRouter>
  );
};

export default App;
