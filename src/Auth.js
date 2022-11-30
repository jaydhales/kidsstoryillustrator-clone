import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "./store";

const state = store.getState();

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
} from "./pages";
import AdminDashBoard from "./pages/Admin/Admin-Dashboard";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminSignup from "./pages/Admin/AdminSignup";
import UserDetails from "./pages/Admin/UserDetails";



const DefaultRoutes = (
  <>
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
    <Route path="/changePassword" element={<ChangePassword />} />
    <Route path="/forgotPassword" element={<ForgotPassword />} />
  </>
);

const PublicRoutes = <>{DefaultRoutes}</>;

const ProtectedRoutes = (
  <>
    {DefaultRoutes}
    <Route path="/myStories" element={<MyStories />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/userdashboard" element={<UserDashboard />} />
    <Route path="/story/:id" element={<Story />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/profile/edit" element={<ProfileEdit />} />
    <Route path="/account-info" element={<Info />} />
    <Route path="/account-settings" element={<Settings />} />
    <Route path="/billing" element={<Billing />} />
    <Route path="/cancelSubscription" element={<CancelSubscription />} />
    <Route path="/createStory" element={<CreateStory />} />
    <Route path="/summaryActivities" element={<SummaryActivities />} />
    <Route path="/users" element={<Users />} />
  </>
);

const AdminRoutes = (
  <>
    {ProtectedRoutes}
    <Route path="/admin" element ={<AdminDashBoard/>}/>
    <Route path="/admin/userlist" element ={<UserList/>}/>
    <Route path="/admin/adminlogin" element ={<AdminLogin/>}/>
    <Route path="/admin/adminsignup" element ={<AdminSignup/>}/>
    <Route path="/admin/userdetails/" element={<UserDetails/>} />
    <Route path="/admin/archive" element ={<Archive/>}/>
  </>
);

const AppRoutes = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (isAuthenticated) return <Routes>{AdminRoutes} </Routes>;
  else return <Routes>{PublicRoutes}</Routes>;
};

export default AppRoutes;
