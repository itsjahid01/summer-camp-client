import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [role, isRoleLoading] = useAdmin();

  if (loading || isRoleLoading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-bars  w-[50px] h-[500px] "></span>
      </div>
    );
  }

  if (user && role?.role === "admin") {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
