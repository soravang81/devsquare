import React from "react";
import { Navbar} from "./components/Navbar";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";

import Forum from "./components/Forums";
import Authentication from "./components/Login and Signup";
import HelpRequests from "./components/HelpRequest";
import ChatWithFriend from "./components/chatwithfriend";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Forum></Forum>
    <HelpRequests></HelpRequests>
    <ChatWithFriend></ChatWithFriend>
    <Routes>
      <Route path="/" element={<Dashboard/>}></Route>
    </Routes>
    
    </BrowserRouter>
  )
}