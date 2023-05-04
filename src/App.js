import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./components/routes";
import Layout from "./components/Layout";
import { useState } from "react";
import userContext from "./context/userContext";

function App() {
  const [showDice, setShowDice] = useState(false);

  return (
    <BrowserRouter>
      <userContext.Provider value={{showDice, setShowDice}}>
        <Layout>
          <Routes>
            {routes.map((route) => {
              return <Route key={route.id} {...route} />;
            })}
          </Routes>
        </Layout>
      </userContext.Provider>
    </BrowserRouter>
  );
}

export default App;
