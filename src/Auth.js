import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import RequireAuth from './features/auth/RequireAuth'

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


const AllRoutes = (
  <>
    <Route path="/" element={<Outlet />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blog/:id" element={<BlogDetails />} />
      <Route path="contact" element={<Contact />} />
      <Route path="error" element={<Error />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="howToUse" element={<HowToUse />} />
      <Route path="login" element={<Login />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="billing" element={<Billing />} />
      <Route path="forgotPassword" element={<ForgotPassword />} />

      <Route element={<RequireAuth />}>
        <Route path="userdashboard" element={<UserDashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="changePassword" element={<ChangePassword />} />
        <Route path="story/:id" element={<Story />} />
        <Route path="myStories" element={<MyStories />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/edit" element={<ProfileEdit />} />
        <Route path="account-info" element={<Info />} />
        <Route path="account-settings" element={<Settings />} />
        <Route path="cancelSubscription" element={<CancelSubscription />} />
        <Route path="createStory" element={<CreateStory />} />
        <Route path="summaryActivities" element={<SummaryActivities />} />
        <Route path="users" element={<Users />} />
        <Route path="admin" element={<AdminDashBoard />} />
        <Route path="admin/userlist" element={<UserList />} />
        <Route path="admin/adminlogin" element={<AdminLogin />} />
        <Route path="admin/adminsignup" element={<AdminSignup />} />
        <Route path="admin/userdetails/" element={<UserDetails />} />
        <Route path="admin/archive" element={<Archive />} />
      </Route>
    </Route>
  </>
)

const AppRoutes = () => {
  return <Routes>{AllRoutes}</Routes>
}

export default AppRoutes;
