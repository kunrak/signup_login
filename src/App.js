import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";
import reducer from "./store/reducer";

import PrivateRoutes from "./components/PrivateRoutes"
import ProtectedRoutes from "./components/ProtectedRoutes";


function App() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  });
  const isAuthenticated = !!localStorage.getItem("myData");
  const user = JSON.parse(localStorage.getItem("myData"));

  useEffect(() => {
    async function checkRefreshToken() {
      const result = await (await fetch('http://localhost:4000/refresh_token', {
        method: 'POST',
        credentials: 'include', // Needed to include the cookie
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
        <Route path="/profile" element={<Profile />} />
        {/* {isAuthenticated
        {/* {isAuthenticated ?
          <Route path="/profile" element={<Profile />} />
          :
          <Route path="/login" element={<LoginForm />} />
        } */}
        {/* <Route path="/login" element={<LoginForm />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Routes>
      {/* <PrivateRoute
          path="/profile"
          element={<Profile /> }
          isAuthenticated={isAuthenticated}
          user={user}
        /> */}
      {/* <Route path="/profile" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Profile user={user} />} />
        </Route> */}
      {/* <PrivateRoute path="/profile" element={<Profile user={user} />} /> */}
    </BrowserRouter>

  );
}

export default App;

// import React, { useState } from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import SignupForm from "./components/SignupForm";
// import LoginForm from "./components/LoginForm";
// import Profile from "./components/Profile";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(true);

//   return (
//     <BrowserRouter>
//       <Routes>
//         {isAuthenticated ? (
//           <>
//             <Route path="/profile" element={<Profile />} />
//             <Navigate to="/profile" replace />
//           </>
//         ) : (
//           <>
//             <Route path="/" element={<SignupForm />} />
//             <Route
//               path="/login"
//               element={<LoginForm setIsAuthenticated={setIsAuthenticated} />}
//             />
//             <Navigate to="/" replace />
//           </>
//         )}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
