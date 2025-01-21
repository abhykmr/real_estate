// src/App.jsx
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project1";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import CurrentProjects from "./components/CurrentProjects"; // Import CurrentProjects
import ProjectDetail from "./components/ProjectDetail"; // Import ProjectDetail
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import SettingsPage from "./components/SettingsPage";
import projects from "./data/projects"; // Import centralized projects data
import Project1 from "./pages/Project1";



const App = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle for login state

  // PrivateRoute for Dashboard
  const PrivateRoute = ({ children }) => {
    return isLogin ? children : <Navigate to="/login" replace />;
  };

  return (
    <BrowserRouter>
      {/* Navbar is outside of Routes to appear on all pages */}
      {/* Navbar is outside of Routes */}
      <Navbar isLogin={isLogin} />
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Project Route */}
        <Route path="/our-project" element={<Project1 />} />

        {/* Projects List Route */}
        <Route
          path="/projects"
          element={<CurrentProjects projects={projects} />}
        />

        {/* Project Detail Route */}
        <Route
          path="/projects/:id"
          element={<ProjectDetail projects={projects} />}
        />

        {/* Protected Dashboard Route */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Authentication Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* 404 Not Found Route */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer is outside of Routes to appear on all pages */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
