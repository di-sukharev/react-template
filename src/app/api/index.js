const baseURL = "api";

const request = async ({
  url,
  method = "GET",
  headers = { "Content-Type": "application/json; charset=utf-8" },
  body,
}) => {
  const response = await fetch(baseURL + url, {
    headers,
    method,
    body: body ? JSON.stringify(body) : null,
  });
  return response.data;
};

export { request };
