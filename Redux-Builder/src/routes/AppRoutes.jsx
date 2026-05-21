import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

import AuthPage from "../features/auth/AuthPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Home Route */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* Dashboard Route */}
      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      {/* Login Route */}
      <Route
        path="/login"
        element={<AuthPage />}
      />
    </Routes>
  );
};

export default AppRoutes;