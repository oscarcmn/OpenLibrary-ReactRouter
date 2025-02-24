import {
    type RouteConfig,
    layout,
    route,
    index,
  } from "@react-router/dev/routes";
  
  export default [
    layout("layouts/home.tsx", [
      index("routes/welcome.tsx"), 
      route("about", "routes/about.tsx"), 
      route("search", "routes/search.tsx"), 
      route("book/:name", "routes/details.tsx"),
    ]),
  ] satisfies RouteConfig;
