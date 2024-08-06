import routeinterface from "../../interfaces/routesInterface";
import { Home } from "../../pages/Home";

const Routers = () => {
  const routes: routeinterface[] = [
    { id: 1, path: "/", name: "home", element: <Home /> },
  ];
  return routes;
};
export default Routers;
