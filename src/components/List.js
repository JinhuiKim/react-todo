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
      setChecked(checked);
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
    <CardCompoenent key={id}>
      <TitleWapper>
        <CheckBoxWapper checked={checked} onChange={handleChangeCheckBox} />
        {isEditing ? (
          <Input
            placeholder="Basic usage"
            value={inputValue}
            onChange={handleChangeInput}
          />
        ) : (
          <TitleSpan checked={checked}>{editedTitle}</TitleSpan>
        )}
      </TitleWapper>
      <div>
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
            <DeleteButton
              type="primary"
              shape="round"
              icon={<DeleteOutlined />}
              danger
              onClick={handleClickDeleteButton}
            >
              삭제
            </DeleteButton>
          </>
        )}
      </div>
    </CardCompoenent>
  );
});
export default List;

const CardCompoenent = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  border: 1px solid #f0f0f0;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const TitleSpan = styled.span`
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`;

const TitleWapper = styled.div`
  display: flex;
`;

const CheckBoxWapper = styled(Checkbox)`
  margin-right: 15px;
`;

const DeleteButton = styled(Button)`
  margin-left: 10px;
`;
