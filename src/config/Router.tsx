import routeinterface from "../interfaces/Router/routesInterface";
import About from "../pages/about/index";
import Home from "../pages/home/index";
import Services from "../pages/service/index";
import NotFound from "../pages/notFound";

const Routers = () => {
  const routes: routeinterface[] = [
    { id: 0, path: "/", name: "Home", visible: false, element: <Home /> },
    { id: 1, path: "/about", name: "About", visible: true, element: <About /> },
    {
      id: 2,
      path: "/servicios",
      name: "Servicios",
      visible: true,
      element: <Services />,
    },
    {
      id: 3,
      path: "/*",
      name: "NotFound",
      visible: false,
      element: <NotFound />,
    },
  ];
  return routes;
};
export default Routers;
