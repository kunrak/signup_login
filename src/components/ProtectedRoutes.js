import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = ({ children }) => {
    const authentication = useSelector(state => state.isAuthenticated)
    // if (authentication) {
    //     return children ? children : <Outlet />
    // } else {
    //     return <Navigate to="/" replace />
    // }
    if (!authentication) {
        return <Navigate to="/login" />
    }
}