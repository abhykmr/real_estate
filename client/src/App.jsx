import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
<<<<<<< HEAD
import Profile from "./pages/Profile";
=======
import DynamicPage from "./pages/DynamicPage";
>>>>>>> a3008aa4aa3f107d7ce21ebec6ff296a4b136108

const App = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle for login state

  // PrivateRoute for Dashboard
  const PrivateRoute = ({ children }) => {
    return isLogin ? children : <Navigate to="/login" replace />;
  };

  return (
    <BrowserRouter>
      {/* Navbar is outside of Routes */}
      <Navbar isLogin={isLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
<<<<<<< HEAD
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
=======
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/:id" element={<DynamicPage />} />
>>>>>>> a3008aa4aa3f107d7ce21ebec6ff296a4b136108
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
