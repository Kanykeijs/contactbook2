import React from "react";
import "./App.css";
import ContactContextProvider from "./context/ContactContextProvider";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <ContactContextProvider>
      <MainRoutes />
    </ContactContextProvider>
  );
}

export default App;
