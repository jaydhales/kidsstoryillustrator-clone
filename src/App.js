import React, { useEffect } from "react";

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import "./App.scss";
import {
  About,
  Blog,
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
  Privacy,
  Profile,
  ProfileEdit,
  SignUp,
  SummaryActivities,
  Info,
  Users,
  Settings
} from "./pages";
import BlogPage from "./pages/BlogPage/BlogPage";

const MoveToTop = () => {
  const navigate = useNavigate();
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (hash) return;

    window.scrollTo(0, 0);
  }, [pathname, navigate, hash]);
  return null;
};

const App = () => (
  <>
    <MoveToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blogPage" element={<BlogPage />} />
      <Route path="/changePassword" element={<ChangePassword />} />
      <Route path ="/contact" element ={<Contact/>}/>
      <Route path="/createStory" element={<CreateStory />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/error" element={<Error />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/howToUse" element={<HowToUse />} />
      <Route path="/login" element={<Login />} />
      <Route path="/myStories" element={<MyStories />} />
      <Route path="/story/:id" element={<Story />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/edit" element={<ProfileEdit />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/summaryActivities" element={<SummaryActivities />} />
      <Route path="/users" element={<Users />} />
      <Route path="/account-info" element={<Info />} />
      <Route path="/account-settings" element={<Settings />} />
    </Routes>
  </>
);
export default App;
