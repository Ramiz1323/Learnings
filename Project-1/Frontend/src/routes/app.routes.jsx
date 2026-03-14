import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import AuthLayout from "../Features/layout/components/AuthLayout";
import MainLayout from "../Features/layout/components/MainLayout";
import Landing from "../Features/auth/pages/Landing";
import Login from "../Features/auth/pages/Login";
import Register from "../Features/auth/pages/Register";
import Feed from "../Features/post/pages/Feed";
import CreatePost from "../Features/post/pages/CreatePost";
import ProtectedRoute from "./protected.routes";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* PUBLIC ROUTES*/}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* AUTHORIZED ROUTES */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/feed" element={<Feed />} />
            <Route path="/create" element={<CreatePost />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
