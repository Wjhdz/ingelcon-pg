import routeinterface from "../../interfaces/routesInterface";
import About from "../../pages/About";
import Home from "../../pages/Home";

const Routers = () => {
  const routes: routeinterface[] = [
    { id: 2, path: "/home", name: "Home", open: true, element: <Home /> },
    { id: 3, path: "/", name: "Home", open: false, element: <Home /> },
    { id: 4, path: "/about", name: "About", open: true, element: <About /> },
  ];
  return routes;
};
export default Routers;
