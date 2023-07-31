import React from "react";
import useAllUsers from "../../../hooks/useAllUsers";

const ManageUsers = () => {
  const [users] = useAllUsers();
  return (
    <div>
      <h2 className="text-3xl font-bold">Admin Home </h2>
      <p>{users.length}</p>
    </div>
  );
};

export default ManageUsers;
