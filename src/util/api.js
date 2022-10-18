export const getTodoLists = (url, data) => {
  return fetch(url)
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

export const createTodoList = (url, data) => {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(() => {
      // window.location.href = BASE_URL;
    })
    .catch((error) => {
      console.error("Error", error);
    });
};
