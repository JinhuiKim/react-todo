import React, { useState } from "react";
import { Card, Checkbox, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const List = React.memo(({ todo }) => {
  //   console.log("List");
  const [checked, setChecked] = useState(todo.completed);

  const onChange = (e) => {
    console.log("checked = ", e.target.checked);
    setChecked(e.target.checked);
  };

  return (
    <Card key={todo.id}>
      <Checkbox checked={checked} onChange={onChange} />
      <span>{todo.title}</span>
      <Button type="primary" shape="round" icon={<EditOutlined />}>
        수정
      </Button>
      <Button type="primary" shape="round" icon={<DeleteOutlined />} danger>
        삭제
      </Button>
    </Card>
  );
});
export default List;
