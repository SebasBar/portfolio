const fetchApi = (path, method, body) => {
  return fetch(path, {
    method,
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  }).then((resp) => {
    if (!resp.ok) {
      return resp.json().then((json) => {
        console.log(resp.status);
        const error = new Error(json.message);
        error.status = resp.status;
        throw error;
      });
    }
    return resp.json();
  });
};

export default fetchApi;
