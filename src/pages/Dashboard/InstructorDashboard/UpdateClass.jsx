import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const UpdateClass = () => {
  const updateClass = useLoaderData();
  //   console.log(updateClass);
  const { AvailableSeats, Image, Name, Price, _id } = updateClass;

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    const { AvailableSeats, Image, Name, Price } = data;

    const updatedClass = { Name, Price, AvailableSeats, Image };

    fetch(`http://localhost:5000/classes/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedClass),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data?.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Class Update",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>WorldSpeak | Update Class</title>
      </Helmet>
      <h2 className="text-3xl text-center font-bold">Update Class</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body px-16">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Class Name*</span>
          </label>
          <input
            {...register("Name", { required: true })}
            defaultValue={Name}
            type="text"
            placeholder="Class Name"
            className="input input-bordered"
          />
        </div>

        <div className="flex  gap-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Available seats*</span>
            </label>
            <input
              defaultValue={AvailableSeats}
              {...register("AvailableSeats", { required: true })}
              type="number"
              placeholder="Available seats"
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              defaultValue={Price}
              {...register("Price", { required: true })}
              type="number"
              placeholder="Price"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Class Image*</span>
          </label>
          <input
            defaultValue={Image}
            {...register("Image", { required: true })}
            type="text"
            placeholder="Image"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6 w-40">
          <button className="btn  bg-[#1A1C38] text-white hover:text-black">
            Update Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateClass;
