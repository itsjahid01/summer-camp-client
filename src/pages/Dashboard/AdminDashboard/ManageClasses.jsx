import React from "react";
import useClasses from "../../../hooks/useClasses";
import { BiCheck } from "react-icons/bi";
import { MdOutlinePending } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const ManageClasses = () => {
  const [Classes] = useClasses();
  console.log(Classes);
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-5">Manage Classes </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class name</th>
              <th>Instructor name</th>
              <th>Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {Classes.map((item, index) => (
            <tbody key={item._id}>
              <tr>
                <th>{index + 1}</th>
                <td>
                  <div className="w-12">
                    <img className="rounded " src={item?.Image} alt="Img" />
                  </div>
                </td>
                <td>{item?.Name}</td>
                <td>{item?.InstructorName}</td>
                <td>{item?.AvailableSeats}</td>
                <td>${item?.Price}</td>
                <td>{}</td>
                <th className="flex flex-col gap-2">
                  <button
                    // onClick={() => handleAdmin(user?._id)}
                    className="btn-success text-lg p-1 w-7 rounded "
                  >
                    <BiCheck />
                  </button>
                  <button
                    // onClick={() => handleInstructor(user?._id)}
                    className="btn-info text-lg p-1  w-7 rounded "
                  >
                    <MdOutlinePending />
                  </button>
                  <button
                    // onClick={() => handleDelete(user?._id)}
                    className="btn-error text-lg p-1  w-7 rounded "
                  >
                    <RxCross2 />
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

export default ManageClasses;
