import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Errorpage from "./pages/errorpage";
import Footer from "./pages/Footer";
import Logout from "./pages/Logout";
import "./App.css";
import AdminLayout from "./Layout/admin-Layout";
import Adminusers from "./Layout/Admin-users";
import AdminContacts from "./Layout/Admin-Contacts";
import AdminUserEdit from "./Layout/Admin-UserEdit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Services />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Errorpage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<Adminusers />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="users/:id/edit" element={<AdminUserEdit />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
