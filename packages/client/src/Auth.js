import React from 'react';
import { Routes, Route } from 'react-router-dom';
import store from './store';

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
  Privacy,
  Profile,
  ProfileEdit,
  SignUp,
  SummaryActivities,
  Info,
  Users,
  Settings,
  UserDetails
} from "./pages";

const AppRoutes = (
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/blog/:id" element={<BlogDetails />} />
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
  <Route path="/userDetails" element={<UserDetails />} />
</Routes>
);

// const PublicRoutes = (
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/about" element={<About />} />
//     <Route path="/blog" element={<Blog />} />
//     <Route path="/blog/:id" element={<BlogDetails />} />
//     <Route path="/contact" element={<Contact />} />
//     <Route path="/error" element={<Error />} />
//     <Route path="/faq" element={<FAQ />} />
//     <Route path="/howToUse" element={<HowToUse />} />
//     <Route path="/login" element={<Login />} />
//     <Route path="/pricing" element={<Pricing />} />
//     <Route path="/privacy" element={<Privacy />} />
//     <Route path="/signup" element={<SignUp />} />
//   </Routes>
// );

// const ProtectedRoutes = (
//   <Routes>
//     <Route path="/myStories" element={<MyStories />} />
//     <Route path="/dashboard" element={<Dashboard />} />
//     <Route path="/story/:id" element={<Story />} />
//     <Route path="/profile" element={<Profile />} />
//     <Route path="/profile/edit" element={<ProfileEdit />} />
//     <Route path="/account-info" element={<Info />} />
//     <Route path="/account-settings" element={<Settings />} />
//   </Routes>
// );

// const AppRoutes = isAuthenticated ? ProtectedRoutes : PublicRoutes;

export default AppRoutes;

