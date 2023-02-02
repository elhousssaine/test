import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Project from "./pages/Project";
import Nopage from "./pages/Nopage";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import RequireAuth from "./components/auth/RequireAuth";
import RequireSudo from "./components/auth/RequireSudo";

import UploadProject from "./pages/UploadProject";
import UploadBlog from "./pages/UploadBlog";
import Adminlayout from "./pages/Adminlayout";

import Account from "./pages/Account";
import Register from "./pages/Register";
import AdminRestrict from "./components/auth/AdminRestrict";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="project/:prjId" element={<Project />} />
          <Route
            path="admin"
            element={
              <RequireAuth>
                <Adminlayout />
              </RequireAuth>
            }
          >
            
              <Route index element={<Admin />} />
              <Route path="upload" element={<AdminRestrict><UploadProject /></AdminRestrict>} />
              <Route path="addblog" element={<AdminRestrict><UploadBlog /></AdminRestrict>}></Route>
              <Route path="account" element={<AdminRestrict><Account /></AdminRestrict>} />
            <Route
              path="register"
              element={
                <RequireSudo>
                  <Register />
                </RequireSudo>
              }
            />
          </Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="*" element={<Nopage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
