import React from "react";
import { useParams, useRouteMatch, Switch, Route, Link } from "react-router-dom";

export function Home() {
  const { path, url } = useRouteMatch();
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={`${url}/first`}>First page</Link>
          </li>
          <li>
            <Link to={`${url}/second`}>Second page</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path={path}>
          Select page
        </Route>
        <Route path={`${path}/:page`}>
          <Page />
        </Route>
      </Switch>
    </>
  );
}

function Page() {
  // The <Route> that rendered this component has a
  // path of `/home/:page`. The `:page` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  const { page } = useParams();

  return (
    <div>
      <h3>{page}</h3>
    </div>
  );
}
