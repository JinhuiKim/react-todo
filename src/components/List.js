import React, { useState } from "react";
import { Card, Checkbox, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const List = () => {
  const [checked, setChecked] = useState(false);

  const onChange = (e) => {
    console.log("checked = ", e.target.checked);
    setChecked(e.target.checked);
  };

  return (
    <Card>
      <Checkbox checked={checked} onChange={onChange} />
      <span>할 일</span>
      <Button type="primary" shape="round" icon={<EditOutlined />}>
        수정
      </Button>
      <Button type="primary" shape="round" icon={<DeleteOutlined />} danger>
        삭제
      </Button>
    </Card>
  );
};
export default List;
