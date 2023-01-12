import React from "react";
import { Routes, Route } from "react-router-dom";
import AddContact from "./components/AddContact";
import ListContact from "./components/ListContact";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AddContact />} />
      <Route path="/contacts" element={<ListContact />} />
    </Routes>
  );
};

export default MainRoutes;
