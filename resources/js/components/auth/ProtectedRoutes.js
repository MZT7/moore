import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth";

function ProtectedRoutes() {
    const { auth } = useAuth();
    const location = useLocation();

    // if (!auth.user) {
    //     return
    // }
    {
        /* <div>{children}</div>; */
    }
    return auth?.user ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
}
export default ProtectedRoutes;
