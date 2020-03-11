import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import Docs from "./pages/Docs";

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "/get_started", name: "Get Started", component: GetStarted },
  { path: "/docs", name: "Docs", component: Docs }
];

export default routes;
