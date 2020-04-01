import { isNotEmptyObject } from ".";

const LocalStorage = {
  set(key, value) {
    localStorage[key] = value;
    return localStorage[key];
  },

  get(key) {
    return localStorage[key];
  },

  setObject(key, value) {
    localStorage[key] = JSON.stringify(value);
    return localStorage[key];
  },

  getObject(key) {
    const obj = JSON.parse(localStorage[key] || "{}");
    return isNotEmptyObject(obj) ? obj : null;
  },

  clear() {
    return localStorage.clear();
  },
};

export default LocalStorage;
