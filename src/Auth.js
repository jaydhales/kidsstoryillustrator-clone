import React, { useContext } from "react";
import { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";

import {
  About,
  Blog,
  BlogDetails,
  ChangePassword,
  Contact,
  CreateStory,
  Dashboard,
  Error,
  FAQ,
  ForgotPassword,
  Home,
  HowToUse,
  Login,
  MyStories,
  Story,
  Pricing,
  Billing,
  CancelSubscription,
  Privacy,
  Profile,
  ProfileEdit,
  SignUp,
  SummaryActivities,
  Info,
  Users,
  UserList,
  Settings,
  UserDashboard,
  Archive,
  Account,
  Security,
  BillingPage,
  UsersDashboard,
} from "./pages";
import AdminDashBoard from "./pages/Admin/Admin-Dashboard";
import AdminLogin from "./pages/Admin/AdminLogin";
import UserDetails from "./pages/Admin/UserDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blogDetails" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/error" element={<Error />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/howToUse" element={<HowToUse />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/changePassword" element={<ChangePassword />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route
        path="/createStory"
        element=<Protected>{<CreateStory />}</Protected>
      />
      <Route path="/users/dashboard" element={<UsersDashboard />} />

      {/* Protected */}

      <Route
        path="/myStories"
        element=<Protected>{<MyStories />} </Protected>
      />
      <Route
        path="/dashboard"
        element=<Protected>{<Dashboard />} </Protected>
      />
      <Route
        path="/userdashboard"
        element=<Protected>{<UserDashboard />} </Protected>
      />
      <Route path="/story/:id" element=<Protected>{<Story />} </Protected> />
      <Route path="/profile" element=<Protected>{<Profile />} </Protected> />
      <Route
        path="/profile/edit"
        element=<Protected>{<ProfileEdit />} </Protected>
      />
      <Route path="/account-info" element=<Protected>{<Info />} </Protected> />
      <Route
        path="/account-settings"
        element=<Protected>{<Settings />} </Protected>
      />
      <Route path="/billing" element=<Protected>{<Billing />} </Protected> />
      <Route path="/account" element=<Protected>{<Account />} </Protected> />
      <Route path="/security" element=<Protected>{<Security />} </Protected> />
      <Route
        path="/billing-page"
        element=<Protected>{<BillingPage />} </Protected>
      />
      <Route
        path="/cancelSubscription"
        element=<Protected>{<CancelSubscription />} </Protected>
      />
      <Route
        path="/summaryActivities"
        element=<Protected>{<SummaryActivities />} </Protected>
      />
      <Route path="/users" element=<Protected>{<Users />} </Protected> />

      {/* Admin */}
      <Route path="/admin" element=<Admin>{<AdminDashBoard />}</Admin> />
      <Route path="/admin/userlist" element=<Admin>{<UserList />}</Admin> />
      <Route
        path="/admin/userdetails/:id"
        element=<Admin>{<UserDetails />}</Admin>
      />
      <Route path="/admin/archive" element=<Admin>{<Archive />}</Admin> />
    </Routes>
  );
};

const Protected = ({ children }) => {
  const { locationHistory, setLocationHistory } = useContext(AuthContext);
  const location = useLocation();

  const localAuth = JSON.parse(localStorage.getItem("authInfo"));

  if (!localAuth) {
    setLocationHistory(location.pathname);
    return <Navigate replace to="/login" />;
  } else if (localAuth.isAuthenticated === false) {
    setLocationHistory(location.pathname);
    return <Navigate replace to="/login" />;
  } else {
    return <>{children}</>;
  }
};

const Admin = ({ children }) => {
  const localAuth = JSON.parse(localStorage.getItem("authInfo"));

  if (!localAuth) return <Navigate replace to="/" />;

  const { isAdmin, isAuthenticated } = localAuth;

  if (isAdmin === false && isAuthenticated === false) {
    return <Navigate replace to="/" />;
  } else {
    return <>{children}</>;
  }
};

// const Red = ({ children }) => {
//   const { isAuthenticated } = JSON.parse(localStorage.getItem("authInfo"));

//   console.log(isAuthenticated);
//   if (isAuthenticated) {
//     return <Navigate replace to="/users/dashboard" />;
//   } else {
//     return <>{children}</>;
//   }
// };

export default AppRoutes;
