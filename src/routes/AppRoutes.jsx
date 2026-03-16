import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import MainLayout from "../layouts/MainLayout";
import Teacher from "../pages/Teacher";
import Student from "../pages/Student";

const isAuth = () => {
  return !!localStorage.getItem("token");
};

function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          isAuth() ? (
            <MainLayout>
              <Dashboard />
            </MainLayout>
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/teacher"
        element={
          isAuth() ? (
            <MainLayout>
              <Teacher />
            </MainLayout>
          ) : (
            <Navigate to="/" />
          )
        }
      />

      <Route
        path="/student"
        element={
          isAuth() ? (
            <MainLayout>
              <Student />
            </MainLayout>
          ) : (
            <Navigate to="/" />
          )
        }
      />

    </Routes>
  );
}

export default AppRoutes;