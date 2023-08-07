import React, { useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/${user?.email}`);
      return res.data;
    },
  });

  const handleUpdate = () => {};
  return (
    <div>
      <Helmet>
        <title>WorldSpeak | My Classes</title>
      </Helmet>
      <h2 className="text-3xl text-center font-bold">My Classes</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class name</th>
              <th>Seats</th>
              <th>Price</th>
              <th>Enrolled Student</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Action</th>
            </tr>
          </thead>
          {classes.map((item, index) => (
            <tbody key={item._id}>
              <tr>
                <th>{index + 1}</th>
                <td>
                  <div className="w-12">
                    <img className="rounded " src={item?.Image} alt="Img" />
                  </div>
                </td>
                <td>{item?.Name}</td>
                <td>{item?.AvailableSeats}</td>
                <td>${item?.Price}</td>
                <td>{0}</td>
                <td>{item?.status}</td>
                <td>{}</td>
                <th className="flex gap-2">
                  <Link to={`/dashboard/my-classes/update/${item?._id}`}>
                    <button
                      disabled={item?.status === "approved" ? true : ""}
                      className="btn btn-success text-lg rounded "
                    >
                      <FaRegEdit />
                    </button>
                  </Link>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
