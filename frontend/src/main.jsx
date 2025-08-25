import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
// import Shows from "./pages/Shows.jsx";
// import Playlists from "./pages/Playlists.jsx"; 
import Account from "./pages/account.jsx"; 
//this is for now and will be connected to login page instead//

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/shows" element={<Shows />} />
        <Route path="/playlists" element={<Playlists />} /> */}3
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
