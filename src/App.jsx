import React, { useEffect } from "react";
import Dashboard from "./components/Dashboard";


function App() {

  React.useEffect(() => {
    document.body.classList.add("hold-transition", "sidebar-mini", "layout-fixed", "layout-navbar-fixed");
  }, []);

  return <Dashboard />;
}

export default App;
