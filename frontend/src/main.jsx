import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx"; // ✅ add this

// import Shows from "./pages/Shows.jsx";
// import Playlists from "./pages/Playlists.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} /> {/* ✅ add this */}
        {/* <Route path="/shows" element={<Shows />} />
        <Route path="/playlists" element={<Playlists />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
