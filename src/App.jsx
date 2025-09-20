// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Refer from "./pages/Refer";
import Book from "./pages/Book";
import PageNotFound from "./pages/PageNotFound";

import "./App.css";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        {/* Navbar (fixed top) */}
        <Navbar />

        {/* Page Routes */}
        <main className="pt-20 bg-black min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/refer" element={<Refer />} />
            <Route path="/book" element={<Book />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>

        {/* Analytics */}
        <Analytics />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
