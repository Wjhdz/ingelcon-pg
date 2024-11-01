import routeinterface from "../interfaces/Router/routesInterface";
import About from "../pages/about";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import Service from "../pages/service";
import Proyects from "../pages/projects";
const Routers = () => {
  const routes: routeinterface[] = [
    {
      id: 0,
      path: "",
      name: "",
      visible: true,
      element: <Home />,
    },
    {
      id: 1,
      path: "/",
      name: "Home",
      visible: true,
      element: <Home />,
    },
    {
      id: 2,
      path: "/nosotros",
      name: "Nosotros",
      visible: true,
      element: <About />,
    },
    {
      id: 3,
      path: "/servicios",
      name: "Servicios",
      element: <Service />,
      visible: true,
    },
    {
      id: 4,
      path: "/proyectos",
      name: "Proyectos",
      visible: true,
      element: <Proyects />,
    },

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
