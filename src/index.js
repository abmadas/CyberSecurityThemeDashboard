import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.js";
// import RTLLayout from "layouts/RTL/RTL.js";
import Signup from "views/Signup"; // Import Signup component
import Login from "views/Login";   // Import Login component

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";
import User from "layouts/User/User";
import Subadmin from "layouts/Subadmin/Subadmin";
// import PrivateRoute from "PrivateRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} /> {/* Signup Route */}
          <Route path="/login" element={<Login />} />   {/* Login Route */}
          <Route
            path="/user"
            element={<User/>}
          />
           <Route
            path="/subadmin"
            element={<Subadmin/>}
          />

          <Route path="/admin/*" element={<AdminLayout />} />
          {/* <Route path="/rtl/*" element={<RTLLayout />} /> */}
          <Route
            path="*"
            element={<Navigate to="/signup" replace />} 
          />
          <Route
            path="/admin/*"
            element={<Navigate element={<AdminLayout/>} />}
          />
         
        </Routes>
      </BrowserRouter>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>
);
