import React from "react";

import Form from "./Form";
import Lists from "./Lists";

const Todo = React.memo(({ todoList, setTodoList }) => {
  // console.log("Todo");
  return (
    <section>
      <Form setTodoList={setTodoList} />
      <Lists todoList={todoList} setTodoList={setTodoList} />
    </section>
  );
});

export default Todo;
