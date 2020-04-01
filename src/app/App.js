import React from "react";
import { Provider } from "react-redux";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes } from "react95";
import Router from "./routes";

const ResetStyles = createGlobalStyle`
  ${reset}
`;

export default function App({ store }) {
  return (
    <Provider store={store}>
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <Router />
      </ThemeProvider>
    </Provider>
  );
}
