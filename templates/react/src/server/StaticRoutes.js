import React from "react";
import { Route, StaticRouter, Switch } from "react-router";
import PropTypes from "prop-types";
import { ROUTE_MAPPING } from "../configuration/constants";

const mapLocalsToContext = locals => ({
  assets: locals.assets,
  title: locals.title,
});

function StaticRoutes(props) {
  const context = mapLocalsToContext(props.locals);
  return (
    <StaticRouter
      context={context}
      location={`${props.locals.path}`}
    >
      <Switch>
        {Object.getOwnPropertyNames(ROUTE_MAPPING).map(route => (
          <Route
            component={ROUTE_MAPPING[route]}
            path={route}
            exact={true}
            key={route}
          />
        ))}
      </Switch>
    </StaticRouter>
  );
}

StaticRoutes.propTypes = {
  locals: PropTypes.shape({
    path: PropTypes.string,
    assets: PropTypes.array,
    title: PropTypes.string,
  })
};

export default StaticRoutes;
