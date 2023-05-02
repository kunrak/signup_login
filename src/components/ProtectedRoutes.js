import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = () => {
    const isAuthenticated = !!localStorage.getItem("myData");
    return (
        isAuthenticated ? <Outlet /> : <Navigate to="/profile" />
    )
}

export default ProtectedRoutes