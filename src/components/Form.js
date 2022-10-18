import React, { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { createTodoList } from "../util/api";

const Form = React.memo(({ setTodoList }) => {
  //   console.log("Form");
  const [inputValue, setInputValue] = useState("");

  const handleChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleClickButton = (value, event) => {
    const data = {
      title: value,
      completed: false,
    };
    createTodoList("/todo", data).then((data) => {
      setTodoList((prev) => [...prev, data]);
      setInputValue("");
    });
  };

  return (
    <article>
      <Input.Search
        value={inputValue}
        onChange={handleChangeInputValue}
        prefix={<PlusCircleOutlined />}
        placeholder="작업 추가"
        enterButton="입력"
        size="large"
        loading={false}
        onSearch={handleClickButton}
      />
    </article>
  );
});

export default Form;
