import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import Form from "./components/Form"

function App() {
  return (
    <div>
      <Form />
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route index element={<SignupForm />} />
    //     <Route path="login" element={<LoginForm />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
