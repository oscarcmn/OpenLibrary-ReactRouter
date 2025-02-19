import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [layout("./layouts/index.tsx", [
    index("routes/welcome.tsx"),
    route("search", "routes/search.tsx"),
    route("about ", "routes/about.tsx"),
])] satisfies RouteConfig;
