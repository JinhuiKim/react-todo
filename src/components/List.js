import React, { useState } from "react";
import { Card, Checkbox, Button, Input } from "antd";
import { SaveOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { deleteTodoList, patchTodoList } from "../util/api";

const List = React.memo(({ todo, setTodoList }) => {
  // console.log("List");
  const { id, title, completed } = todo;
  const [checked, setChecked] = useState(completed);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [inputValue, setinputValue] = useState(editedTitle);

  const handleChangeCheckBox = (e) => {
    const completed = e.target.checked;
    if (isEditing) {
      setChecked(completed);
      return;
    }
    patchTodoList(id, { completed }).then(() => {
      setChecked(completed);
    });
  };

  const handleClickUpdateButton = (e) => {
    setIsEditing((prev) => !prev);
  };

  const handleClickSaveButton = (e) => {
    patchTodoList(id, { title: inputValue, completed: checked }).then(() => {
      handleClickUpdateButton();
      setChecked(completed);
      setEditedTitle(inputValue);
    });
  };

  const handleClickDeleteButton = (e) => {
    deleteTodoList(id).then(() => {
      setTodoList((prev) => {
        return prev.filter((todo) => todo.id !== id);
      });
    });
  };

  const handleChangeInput = (e) => {
    setinputValue(e.target.value);
  };

  return (
    <Card key={id}>
      <Checkbox checked={checked} onChange={handleChangeCheckBox} />
      {isEditing ? (
        <Input
          placeholder="Basic usage"
          value={inputValue}
          onChange={handleChangeInput}
        />
      ) : (
        <TitleSpan checked={checked}>{editedTitle}</TitleSpan>
      )}
      {isEditing ? (
        <Button
          type="default"
          shape="round"
          icon={<SaveOutlined />}
          onClick={handleClickSaveButton}
        >
          저장
        </Button>
      ) : (
        <>
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
        </>
      )}
    </Card>
  );
});
export default List;

const TitleSpan = styled.span`
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`;
