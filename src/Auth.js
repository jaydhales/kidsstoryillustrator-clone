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
  Settings,
} from "./pages";

const PublicRoutes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/:id" element={<BlogDetails />} />
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
  </Routes>
);

const ProtectedRoutes = (
  <Routes>
    <Route path="/myStories" element={<MyStories />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/story/:id" element={<Story />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/profile/edit" element={<ProfileEdit />} />
    <Route path="/account-info" element={<Info />} />
    <Route path="/account-settings" element={<Settings />} />
    <Route path="/createStory" element={<CreateStory />} />
    <Route path="/summaryActivities" element={<SummaryActivities />} />
    <Route path="/users" element={<Users />} />
  </Routes>
);

const AppRoutes = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (isAuthenticated) return ProtectedRoutes;
  else return PublicRoutes;
};

export default AppRoutes;
