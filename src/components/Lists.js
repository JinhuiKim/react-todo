import React from "react";
import List from "./List";

const Lists = React.memo(({ todoList, setTodoList }) => {
  //   console.log("Lists");
  return (
    <>
      {todoList?.map((todo) => (
        <List key={todo.id} todo={todo} setTodoList={setTodoList} />
      ))}
    </>
  );
});
export default Lists;
