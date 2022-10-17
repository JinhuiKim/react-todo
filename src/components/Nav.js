import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppstoreOutlined } from "@ant-design/icons";
import { Menu } from "antd";

const Nav = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Nav;

const items = [
  {
    label: <Link to="/">전체</Link>,
    key: "mail",
    icon: <AppstoreOutlined />,
  },
  {
    label: <Link to="/todo">할 일</Link>,
    key: "app",
    icon: <AppstoreOutlined />,
  },

  {
    label: <Link to="/dome">완료</Link>,
    key: "alipay",
    icon: <AppstoreOutlined />,
  },
];
