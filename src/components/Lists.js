import React from "react";
import List from "./List";

const Lists = React.memo(({ todoList }) => {
  //   console.log("Lists");
  return (
    <>
      {todoList?.map((todo) => (
        <List key={todo.id} todo={todo} />
      ))}
    </>
  );
});
export default Lists;
