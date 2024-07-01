import React from "react";
import { Navbar} from "./components/Navbar";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}