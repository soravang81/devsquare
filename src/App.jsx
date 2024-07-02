import React from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";

import Forum from "./components/Forums";
import Authentication from "./components/Login and Signup";
import Cards from "./components/Cards";

import Discussion from "./components/Discussion";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Cards></Cards>
      <Discussion></Discussion>
      <Forum></Forum> */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
