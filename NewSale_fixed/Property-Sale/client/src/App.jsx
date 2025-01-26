import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
// import Theme from "./components/Theme";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import ListingPage from "./pages/ListingPage";
import SaveListing from "./pages/SaveListing";
import Search from "./pages/Search";
import Message from "./pages/Message";
import SocketConnection from "./components/SocketConnection";
import AddProperty from "./components/AddProperty";
import DashboardSettings from "./pages/SettingPage";
<<<<<<< HEAD
=======
// import DashboardSettings from"./pages/SettingPage";

// import DashboardSettings from"./pages/SettingPage";
// import DashboardSettings from "./pages/SettingPage";
>>>>>>> c29a6882923669fd26ae3ea8dff4b2d35e8604a8
import SalesDash from "./pages/SalesDash";
import SalesTeamDashboard from "./pages/SalesTeamDashboard";
import YourClient from "./pages/YourClient";
import InterestedClient from "./pages/InterestedClient";

function App() {
  return (
    <>
      <SocketConnection />
      <BrowserRouter>
        <Navbar />
        {/* <Theme/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/listing/:id" element={<ListingPage />} />
          <Route path="/search?" element={<Search />} />
          <Route path="/your-projects" element={<Search />} />
<<<<<<< HEAD
          <Route path="/your-clients" element={<YourClient />} />
=======
          <Route path="/your-clients" element={<Search />} />
          <Route path="/add-property" element={<AddProperty />} />
          <Route path="/settings" element={<DashboardSettings />} />
>>>>>>> c29a6882923669fd26ae3ea8dff4b2d35e8604a8
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-property" element={<AddProperty />} />
          <Route path="/settings" element={<DashboardSettings />} />
          <Route path="/salesdash" element={<SalesDash />} /> {/* New Route */}
          <Route path="/your-sales-team" element={<SalesTeamDashboard />} />
          <Route
            path="/your-interested-clients"
            element={<InterestedClient />}
          />
          {/* /---------Private Routes-----------/ */}
          <Route element={<PrivateRoute />}>
<<<<<<< HEAD
=======
            <Route path="/profile" element={<Profile />} />
>>>>>>> c29a6882923669fd26ae3ea8dff4b2d35e8604a8
            <Route path="/create_post" element={<CreatePost />} />
            <Route path="/update_post/:id" element={<UpdatePost />} />
            <Route path="/saved_listing" element={<SaveListing />} />
            <Route path="/message" element={<Message />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
