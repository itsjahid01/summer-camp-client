import React from "react";
import useAllUsers from "../../../hooks/useAllUsers";
import { MdAdminPanelSettings, MdDelete } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [users, refetch] = useAllUsers();
  const isAdmin = true;

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
        if (data?.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeInstructor = (id) => {
    fetch(`http://localhost:5000/users/instructor/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
        if (data?.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "instructor",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            console.log(data);
            if (data?.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center">Manage Users </h2>
      <p className="text-3xl font-semibold ml-4">Total Users: {users.length}</p>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          {users.map((user, index) => (
            <tbody key={user._id}>
              <tr>
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{isAdmin ? "admin" : "student"}</td>
                <th className="flex gap-2">
                  <button
                    onClick={() => handleMakeAdmin(user?._id)}
                    className="btn-success text-xl p-1  rounded "
                  >
                    <MdAdminPanelSettings />
                  </button>
                  <button
                    onClick={() => handleMakeInstructor(user?._id)}
                    className="btn-info text-xl p-1  rounded "
                  >
                    <GiTeacher />
                  </button>
                  <button
                    onClick={() => handleDelete(user?._id)}
                    className="btn-error text-xl p-1 rounded "
                  >
                    <MdDelete />
                  </button>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
