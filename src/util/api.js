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
