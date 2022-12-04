import React, { useContext } from "react";
import { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
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
} from "./pages";
import AdminDashBoard from "./pages/Admin/Admin-Dashboard";
import AdminLogin from "./pages/Admin/AdminLogin";
import UserDetails from "./pages/Admin/UserDetails";

const AppRoutes = () => {
  const { myAuth, setAuth, initialAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const { isAdmin, isAuthenticated } = myAuth;

  useEffect(() => {
    const localAuth =
      localStorage.getItem("authInfo") &&
      JSON.parse(localStorage.getItem("authInfo"));
    if (localAuth) {
      setAuth(localAuth);
    } else {
      localStorage.setItem("authInfo", JSON.stringify(myAuth));
    }
  }, []);

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
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/changePassword" element={<ChangePassword />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/createStory" element={<CreateStory />} />

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
  const { isAuthenticated } = useContext(AuthContext).myAuth;
  if (!isAuthenticated) {
    return <Navigate replace to="/login" />;
  } else {
    return <>{children}</>;
  }
};

const Admin = ({ children }) => {
  const { isAdmin, isAuthenticated } = useContext(AuthContext).myAuth;
  if (!isAdmin && !isAuthenticated) {
    return <Navigate replace to="/" />;
  } else {
    return <>{children}</>;
  }
};

export default AppRoutes;
