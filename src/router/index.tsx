import { Routes, Route } from "react-router-dom";
import Routers from "../config/Router";

const IndexRoutes: React.FC = () => {
  return (
    <Routes>
      {Routers().map((e) => {
        if (Array.isArray(e.path)) {
          // Si el path es un array, mapeamos cada ruta individualmente
          return e.path.map((p, index) => (
            <Route key={`${e.id}-${index}`} path={p} element={e.element} />
          ));
        } else {
          // Si el path es una string, manejamos el caso normal
          return <Route key={e.id} path={e.path} element={e.element} />;
        }
      })}
    </Routes>
  );
};

export default IndexRoutes;
