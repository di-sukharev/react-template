import { parseObjectToURL } from "../../tools/index";
import { baseURL } from "./constants";

const request = async (endpoint, method = "GET", data = null) => {
  try {
    const body = method === "POST" && data ? JSON.stringify(data) : null;

    // eslint-disable-next-line no-param-reassign
    if (!body) endpoint += parseObjectToURL(data);

    console.log("REQ DATA --- ", data);
    console.log("REQ URL --- ", endpoint);

    const headers = new Headers();
    headers.append("Content-Type", "application/json; charset=utf-8");
    // headers.append('Authorization', `Bearer ${token}`);

    const res = await fetch(baseURL + endpoint, {
      method,
      headers,
      body,
      // mode: 'cors',
      // credentials: 'include',
    });

    const json = await res.json();

    console.log("RESPONSE", json);

    return json;
  } catch (err) {
    console.log('API ERROR --- ', err); // eslint-disable-line
    throw err;
  }
};

export default request;
