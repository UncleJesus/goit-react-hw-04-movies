import React, { lazy, Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import routes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route
            path={routes.home}
            exact
            component={lazy(() => import("./components/HomePage/HomePage"))}
          />
          <Route
            path={routes.movies}
            exact
            component={lazy(() => import("./components/MoviesPage/MoviesPage"))}
          />
          <Route
            path={routes.movieDetails}
            component={lazy(() =>
              import("./components/MovieDetailsPage/MovieDetailsPage")
            )}
          />
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
