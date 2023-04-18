import Home from "../pages/Home";
import Klasse from "../pages/Klasse";
import Volk from "../pages/Volk";

const routes = [
  { path: "/", element: <Home />, id: 1 },
  { path: "/volk", element: <Volk/>, id: 2 },
  { path: "/klasse", element: <Klasse/>, id: 3 },
];

export default routes;
