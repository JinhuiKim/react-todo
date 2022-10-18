const TODO = "/todo";

export const getTodoLists = (data) => {
  return fetch(TODO)
    .then((res) => {
      if (!res.ok) {
        throw Error("could not fetch the data for that resource");
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Error", error);
    });
};

export const createTodoList = (data) => {
  return fetch(TODO, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.error("Error", error);
    });
};
