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
      path: "landing-ingelcon-pg/",
      name: "Home",
      visible: false,
      element: <Home />,
    },
    {
      id: 1,
      path: "ingelcon-pg/Nosotros",
      name: "Nosotros",
      visible: true,
      element: <About />,
    },
    {
      id: 2,
      path: "ingelcon-pg/services",
      name: "Servicios",
      element: <Service />,
      visible: true,
    },
    {
      id: 3,
      path: "ingelcon-pg/proyectos",
      name: "Proyectos",
      visible: true,
      element: <Proyects />,
    },
    {
      id: 4,
      path: "ingelcon-pg/*",
      name: "NotFound",
      visible: false,
      element: <NotFound />,
    },
  ];
  return routes;
};
export default Routers;
