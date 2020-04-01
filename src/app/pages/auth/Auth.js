import React, { useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { Window, WindowHeader, WindowContent, Tabs, Tab, TabBody } from "react95/dist/prod";
import { Signup } from "./signup/Signup";
import { Login } from "./login/Login";
import styles from "./Auth.module.css";

export function Auth() {
  const { path } = useRouteMatch();
  const [activeTab, setActiveTab] = useState(0);
  const handleChange = value => setActiveTab(value);

  return (
    <Route exact path={path}>
      <div className={styles.wrapper}>
        <Window className={styles.window}>
          <WindowHeader>
            <span role="img" aria-label="rainbow">
              🌈
            </span>
            Authentication
          </WindowHeader>
          <WindowContent>
            <Tabs value={activeTab} onChange={handleChange}>
              <Tab value={0}>SIGN UP</Tab>
              <Tab value={1}>LOG IN</Tab>
            </Tabs>
            <div>
              <TabBody>
                {activeTab === 0 && <Signup />}
                {activeTab === 1 && <Login />}
              </TabBody>
            </div>
          </WindowContent>
        </Window>
      </div>
    </Route>
  );
}
