import Ausrüstung from "../pages/Ausrüstung";
import GesinnungUndSprachen from "../pages/GesinnungUndSprachen";
import Hintergrund from "../pages/Hintergrund";
import Home from "../pages/Home";
import Klasse from "../pages/Klasse";
import Rüstung from "../pages/Rüstung";
import Volk from "../pages/Volk";
import Waffen from "../pages/Waffen";
import Werkzeuge from "../pages/Werkzeuge";
import Talent from "../pages/Talent";

const routes = [
  { path: "/", element: <Home />, id: 1 },
  { path: "/volk", element: <Volk />, id: 2 },
  { path: "/klasse", element: <Klasse />, id: 3 },
  { path: "/hintergrund", element: <Hintergrund />, id: 4 },
  { path: "/gesinnung-sprachen", element: <GesinnungUndSprachen />, id: 5 },
  { path: "/waffen", element: <Waffen />, id: 6 },
  { path: "/rüstung", element: <Rüstung />, id: 7 },
  { path: "/ausrüstung", element: <Ausrüstung />, id: 8 },
  { path: "/werkzeuge", element: <Werkzeuge />, id: 9 },
  { path: "/talente", element: <Talent />, id: 10 },
];

export default routes;
