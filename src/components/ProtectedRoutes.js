// import { Outlet, Navigate } from 'react-router-dom'

// const ProtectedRoutes = () => {
//     const isAuthenticated = !!localStorage.getItem("myData");
//     return (
//         isAuthenticated ? <Outlet /> : <Navigate to="/profile" />
//     )
// }

// export default ProtectedRoutes

import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = ({ isAllowed, redirectPath = "/login", children }) => {
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />
    }
    return children ? children : <Outlet />
}