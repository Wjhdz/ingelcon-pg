import routeinterface from "../interfaces/routesInterface";
import About from "../pages/about";
import Home from "../pages/home";
import NotFound from "../pages/notFound";

const Routers = () => {
  const routes: routeinterface[] = [
    { id: 3, path: "/", name: "Home", visible: true, element: <Home /> },
    { id: 4, path: "/about", name: "About", visible: true, element: <About /> },
    {
      id: 5,
      path: "/*",
      name: "NotFound",
      visible: false,
      element: <NotFound />,
    },
  ];
  return routes;
};
export default Routers;
