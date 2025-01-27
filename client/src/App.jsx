import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
// import Project from "./pages/Project1";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import CurrentProjects from "./components/CurrentProjects"; // Import CurrentProjects
import ProjectDetail from "./components/ProjectDetail"; // Import ProjectDetail
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import SettingsPage from "./components/SettingsPage";
// Import centralized projects data
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import SettingsPage from "./components/SettingsPage";
// import projects from "./data/projects"; // Import centralized projects data
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import SettingsPage from "./components/SettingsPage";
import projects from "./data/projects"; // Import centralized projects data
// import projects from "./data/projects"; // Import centralized projects data
import PropertyListingPage from "./components/PropertyDetails";
import Project1 from "./pages/Project1";
import Application from "./components/Application";
import ProtectedRoute from "./Hooks/ProtectRoute";
import { AuthProvider } from "./Hooks/AuthProvider.jsx";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* Navbar is outside of Routes to appear on all pages */}
        {/* Navbar is outside of Routes */}
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Project Route */}
          <Route path="/our-project" element={<Project1 />} />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <SettingsPage />
              </ProtectedRoute>
            }
          />
          <Route path="/property" element={<PropertyListingPage />} />
          <Route path="/our-project" element={<Project1 />} />

          {/* Projects List Route */}
          <Route
            path="/projects"
            element={<CurrentProjects projects={projects} />}
          />

          {/* Application Form Route */}
          <Route
            path="/application"
            element={
              <ProtectedRoute>
                <Application />
              </ProtectedRoute>
            }
          />

          {/* Project Detail Route */}
          <Route
            path="/projects/:id"
            element={<ProjectDetail projects={projects} />}
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          {/* 404 Not Found Route */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
        {/* Footer is outside of Routes to appear on all pages */}
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
