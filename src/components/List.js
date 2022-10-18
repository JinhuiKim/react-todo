import React, { useState } from "react";
import { Card, Checkbox, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { deleteTodoList, patchTodoList } from "../util/api";

const List = React.memo(({ todo, setTodoList }) => {
  // console.log("List");
  const { id, title, completed } = todo;
  const [checked, setChecked] = useState(completed);

  const handleChangeUpdateButton = (e) => {
    const completed = e.target.checked;
    patchTodoList(id, { completed }).then(() => {
      setChecked(completed);
    });
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
      <Checkbox checked={checked} onChange={handleChangeUpdateButton} />
      <TitleSpan checked={checked}>{title}</TitleSpan>
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

const TitleSpan = styled.span`
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`;
