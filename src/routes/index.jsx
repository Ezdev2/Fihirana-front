import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "@/components/display/loading";

const Home = lazy(() => import("@/pages/home"));

const routes = [
  {
    path: "/",
    element: <Loading element={<Home />} />,
  },
];

function RoutesConfig() {
  return (
    <Routes>
      {routes.map((r, index) => (
        <Route path={r.path} element={r.element} key={index} />
      ))}
    </Routes>
  );
}

export default RoutesConfig;
