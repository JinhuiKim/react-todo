import React from "react";
import styled from "styled-components";
import { Typography } from "antd";

const HeaderComponent = styled.header`
  text-align: center;
`;

const { Title } = Typography;

const Header = React.memo(() => {
  //   console.log("Header");
  return (
    <HeaderComponent>
      <Title>To Do List</Title>
    </HeaderComponent>
  );
});

export default Header;
