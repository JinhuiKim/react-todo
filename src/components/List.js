import React, { useState } from "react";
import { Card, Checkbox, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { deleteTodoList } from "../util/api";

const List = React.memo(({ todo, setTodoList }) => {
  const { id, title, completed } = todo;
  //   console.log("List");
  const [checked, setChecked] = useState(completed);

  const onChange = (e) => {
    setChecked(e.target.checked);
  };

  const handleClickUpdateButton = (e) => {
    console.log("수정");
  };

  const handleClickDeleteButton = (e) => {
    deleteTodoList(id).then(() => {
      setTodoList((prev) => {
        return prev.filter((todo) => todo.id !== id);
      });
    });
  };

  return (
    <Card key={id}>
      <Checkbox checked={checked} onChange={onChange} />
      <span>{title}</span>
      <Button
        type="primary"
        shape="round"
        icon={<EditOutlined />}
        onClick={handleClickUpdateButton}
      >
        수정
      </Button>
      <Button
        type="primary"
        shape="round"
        icon={<DeleteOutlined />}
        danger
        onClick={handleClickDeleteButton}
      >
        삭제
      </Button>
    </Card>
  );
});
export default List;
