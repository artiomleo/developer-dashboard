import "./App.css";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "@/pages/dashboard/Dashboard";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route />
          <Route path="/" element={<Navigate to="/app/dashboard" />} />
          <Route path="/app/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
