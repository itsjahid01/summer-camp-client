import React from "react";
import { Helmet } from "react-helmet-async";

const AdminHome = () => {
  return (
    <div>
      <Helmet>
        <title>WorldSpeak | Admin Home</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center">Admin Home </h2>
    </div>
  );
};

export default AdminHome;
