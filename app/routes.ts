import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('/cryptos', 'routes/cryptos.tsx'),
] satisfies RouteConfig;
