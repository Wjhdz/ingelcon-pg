import { Routes, Route } from "react-router-dom";
import Routers from "../Routes";

const IndexRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        {Routers().map((e) => (
          <>
            <Route key={e.id} path={e.path} element={e.element}></Route>
          </>
        ))}
      </Routes>
    </>
  );
};

export default IndexRoutes;
