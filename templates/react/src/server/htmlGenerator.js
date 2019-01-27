import { renderToString } from "react-dom/server";
import React from "react";
import StaticRoutes from "./StaticRoutes";

export default function htmlGenerator(locals, callback) {
  callback(null, locals.doctype + renderToString(<StaticRoutes locals={locals}/>));
};
