import {
    type RouteConfig,
    layout,
    route,
    index,
  } from "@react-router/dev/routes";
  
  export default [
    layout("layouts/home.tsx", [
      index("routes/search.tsx"), 
      route("about", "routes/about.tsx"), 
      route("favorites", "routes/favorites.tsx"), 
      route("book/:key", "routes/details.tsx"),
    ]),
  ] satisfies RouteConfig;
