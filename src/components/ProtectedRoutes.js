// import { Outlet, Navigate } from 'react-router-dom'

// const ProtectedRoutes = () => {
//     const isAuthenticated = !!localStorage.getItem("myData");
//     return (
//         isAuthenticated ? <Outlet /> : <Navigate to="/profile" />
//     )
// }

// export default ProtectedRoutes

import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = ({ redirectPath = "/", children }) => {
    const authentication = useSelector(state => state.isAuthenticated)
    console.log(authentication)
    if (!authentication) {
        return <Navigate to="/" replace />
    }
    return children ? children : <Outlet />
}