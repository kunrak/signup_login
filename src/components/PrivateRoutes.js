// import React from "react";
// import { Route, Redirect } from "react-router-dom";
// import { useSelector } from "react-redux";

// function ProtectedRoute({ path, exact = false, component }) {
//   const token = useSelector((state) => state.token);

//   return (
//     <Route
//       path={path}
//       exact={exact}
//       render={(props) =>
//         token ? (
//           React.createElement(component, props)
//         ) : (
//           <Redirect to="/login" />
//         )
//       }
//     />
//   );
// }

// export default ProtectedRoute;





// import React from "react";
// import { Link, Navigate, Route } from "react-router-dom";



// const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
//   return (
//       <Route
//         {...rest}
//         render={(props) =>
//           isAuthenticated ? (
//             <Component {...props} />
//           ) : (
//             <Navigate
//               to={{ pathname: "/login", state: { from: props.location } }}
//             />
//           )
//         }
//       />
//   );
// };

// export default PrivateRoute;

import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
  const isAuthenticated = !!localStorage.getItem("myData");
  console.log(isAuthenticated)
  return (
    isAuthenticated ? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRoutes
