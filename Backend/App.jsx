import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingSpinner from "./LoadingSpinner";

const Home = lazy(() => import("../Home/Home"));
const Dashboard = lazy(() => import("../Dashboard/Dashboard"));
const Login = lazy(() => import("../Login/Login"));

// wrapping the app into BrowserRouter
function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("Email")) {
      navigate("/");
    } else {
      navigate("/Login");
    }
  }, []);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Suspense>
  );
}

export default AppWrapper;
