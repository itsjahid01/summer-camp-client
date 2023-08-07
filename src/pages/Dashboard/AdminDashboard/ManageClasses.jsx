import React from "react";
import useClasses from "../../../hooks/useClasses";
import { BiCheck } from "react-icons/bi";
import { MdOutlineFeedback } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ManageClasses = () => {
  const [Classes, refetch] = useClasses();
  // console.log(Classes);

  const handleApproved = (item) => {
    fetch(`http://localhost:5000/classes/approved/${item?._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        // console.log(data);
        if (data?.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item?.Name} is approved now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDenied = (item) => {
    fetch(`http://localhost:5000/classes/denied/${item?._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        // console.log(data);
        if (data?.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: `${item?.Name} is Denied!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleFeedback = (item) => {
    const { value: text } = Swal.fire({
      input: "textarea",
      inputLabel: "Admin Feedback",
      inputPlaceholder: "Type your feedback here...",
      inputAttributes: {
        "aria-label": "Type your feedback here",
      },
      showCancelButton: true,
    });

    if (text) {
      Swal.fire(text);
    }
  };

  return (
    <div>
      <Helmet>
        <title>WorldSpeak | Manage Classes</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center mb-2">Manage Classes </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class name</th>
              <th>Instructor name</th>
              <th>Email</th>
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
                <td>{item?.email}</td>
                <td>{item?.AvailableSeats}</td>
                <td>${item?.Price}</td>
                <td>{item?.status}</td>
                <th className="flex gap-2">
                  <button
                    disabled={item?.status === "approved"}
                    onClick={() => handleApproved(item)}
                    className="btn btn-success text-lg p-0 h-7 w-7 rounded "
                  >
                    <BiCheck />
                  </button>
                  <button
                    disabled={item?.status === "denied"}
                    onClick={() => handleDenied(item)}
                    className=" btn btn-info text-lg p-1  w-7 rounded "
                  >
                    <RxCross2 />
                  </button>
                  <button
                    onClick={() => handleFeedback(item)}
                    className=" btn btn-error text-lg p-1  w-7 rounded "
                  >
                    <MdOutlineFeedback />
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
