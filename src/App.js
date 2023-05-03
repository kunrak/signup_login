import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";

import PrivateRoutes from "./components/PrivateRoutes"
import { useSelector } from "react-redux";
import { ProtectedRoute } from "./components/ProtectedRoutes";


function App() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  });
  // const isAuthenticated = !!localStorage.getItem("myData");
  // const user = JSON.parse(localStorage.getItem("myData"));

  useEffect(() => {
    async function checkRefreshToken() {
      const result = await (await fetch('http://localhost:4000/refresh_token', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        }
      })).json();
      setValues({
        accesstoken: result.accesstoken,
      });
    }
    checkRefreshToken();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter >

  );
}

export default App;

