import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Loader from "../components/Loader";

const StudentRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [role, isRoleLoading] = useAdmin();
  const location = useLocation();

  if (loading || isRoleLoading) {
    return <Loader></Loader>;
  }

  if (user && role?.role === "student") {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default StudentRoute;
