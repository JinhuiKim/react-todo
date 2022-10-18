import React from "react";

import Form from "./Form";
import Lists from "./Lists";

const Todo = React.memo(({ todoList }) => {
  // console.log("Todo");
  return (
    <section>
      <Form />
      <Lists todoList={todoList} />
    </section>
  );
});

export default Todo;
