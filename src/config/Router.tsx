import routeinterface from "../interfaces/Router/routesInterface";
import About from "../pages/about";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import Service from "../pages/service";
import Proyects from "../pages/proyects";
const Routers = () => {
  const routes: routeinterface[] = [
    {
      id: 0,
      path: "/",
      name: "Home",
      visible: false,
      element: <Home />,
    },
    {
      id: 1,
      path: "/nosotros",
      name: "Nosotros",
      visible: true,
      element: <About />,
    },
    {
      id: 2,
      path: "/servicios",
      name: "Servicios",
      element: <Service />,
      visible: true,
    },
    {
      id: 3,
      path: "/proyectos",
      name: "Proyectos",
      visible: true,
      element: <Proyects />,
    },
    {
      id: 4,
      path: "/*",
      name: "NotFound",
      visible: false,
      element: <NotFound />,
    },
  ];
  return routes;
};
export default Routers;
