import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Col, Row } from "antd";
import "antd/dist/antd.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import All from "./components/All";
import Todo from "./components/Todo";
import Done from "./components/Done";

const App = () => (
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
          <Route path="/" element={<All />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/dome" element={<Done />} />
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
export default App;
