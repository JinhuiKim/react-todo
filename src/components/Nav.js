import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BarsOutlined,
  ExclamationCircleOutlined,
  IssuesCloseOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

const Nav = React.memo(() => {
  // console.log("Nav");
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
});

export default Nav;

const items = [
  {
    label: <Link to="/">전체</Link>,
    key: "mail",
    icon: <BarsOutlined />,
  },
  // {
  //   label: <Link to="/todo">할 일</Link>,
  //   key: "app",
  //   icon: <ExclamationCircleOutlined />,
  // },

  // {
  //   label: <Link to="/dome">완료</Link>,
  //   key: "alipay",
  //   icon: <IssuesCloseOutlined />,
  // },
];
