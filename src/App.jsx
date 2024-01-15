import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

// Import pages
import SalaryCalculator from "./pages/SalaryCalculator";
import NotFound from "./components/NotFound";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<SalaryCalculator />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
