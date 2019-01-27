import React from "react";
import PropTypes from "prop-types";

function IndexPage(props) {
  return (
    <html lang="en">
    <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="theme-color" content="#222222"/>
      <meta name="msapplication-TileColor" content="#ffffff"/>
      <title>{props.staticContext.title}</title>
    </head>
    <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"/>
    <script src={props.staticContext.assets.index}/>
    <script dangerouslySetInnerHTML={{
      __html: `
      console.log('getOwnPropertyNames', ${JSON.stringify(Object.getOwnPropertyNames(props))});
      console.log('location', ${JSON.stringify(props.location)});
      console.log('staticContext', ${JSON.stringify(props.staticContext)});
      console.log('history', ${JSON.stringify(props.history)});
      console.log('match', ${JSON.stringify(props.match)});
    `
    }}/>
    </body>
    </html>
  );
}

IndexPage.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string
  }),
  staticContext: PropTypes.shape({
    assets: PropTypes.object,
    title: PropTypes.string
  }),
  history: PropTypes.object,
  match: PropTypes.object
};

export default IndexPage;
