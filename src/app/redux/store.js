import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import middlewares from "./middlewares";

const store = configureStore({
  /**
   * A single reducer function that will be used as the root reducer, or an
   * object of slice reducers that will be passed to `combineReducers()`.
   */
  reducer: rootReducer,
  /**
   * An array of Redux middleware to install. If not supplied, defaults to
   * the set of middleware returned by `getDefaultMiddleware()`.
   */
  middleWare: middlewares,
  /**
   * Whether to enable Redux DevTools integration. Defaults to `true`.
   *
   * Additional configuration can be done by passing Redux DevTools options
   */
  devTools: process.env.NODE_ENV === "development",
});

// needed for HMR, see — https://webpack.js.org/concepts/hot-module-replacement/
if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./rootReducer", () => {
    // eslint-disable-next-line global-require
    const newReducer = require("./rootReducer").default;
    store.replaceReducer(newReducer);
  });
}

export default store;
