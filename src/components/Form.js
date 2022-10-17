import React from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Input } from "antd";

const Form = () => {
  const handleClickButton = (value, event) => {
    console.log("value", value, "event", event);
  };

  return (
    <article>
      <Input.Search
        prefix={<PlusCircleOutlined />}
        placeholder="작업 추가"
        enterButton="입력"
        size="large"
        loading={false}
        onSearch={handleClickButton}
      />
    </article>
  );
};

export default Form;
