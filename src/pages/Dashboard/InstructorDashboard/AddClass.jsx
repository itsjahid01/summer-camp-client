import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const img_hosting_key = import.meta.env.VITE_img_hosting_key;

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    const { email, Price, AvailableSeats, InstructorName, Name } = data;
    const formData = new FormData();
    formData.append("image", data?.Image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        // console.log(imgResponse);
        if (imgResponse.success) {
          const imgUrl = imgResponse?.data?.display_url;
          const newClass = {
            email,
            Price: parseFloat(Price),
            AvailableSeats: parseInt(AvailableSeats),
            InstructorName,
            Name,
            Image: imgUrl,
            status: "pending",
          };

          axiosSecure.post("/classes", newClass).then((data) => {
            console.log(data);
            if (data?.data?.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "New Class Added",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  return (
    <div>
      <h2 className="text-2xl text-center font-bold">Add A Class</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body px-16">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Class Name*</span>
          </label>
          <input
            {...register("Name", { required: true })}
            type="text"
            placeholder="Class Name"
            className="input input-bordered"
          />
        </div>
        <div className="flex  gap-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Instructor Name*</span>
            </label>
            <input
              {...register("InstructorName", { required: true })}
              defaultValue={user?.displayName}
              type="text"
              placeholder="Instructor Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control  w-full">
            <label className="label">
              <span className="label-text font-semibold">
                Instructor Email*
              </span>
            </label>
            <input
              {...register("email", { required: true })}
              defaultValue={user?.email}
              type="text"
              placeholder="Instructor Email"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="flex  gap-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Available seats*</span>
            </label>
            <input
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
            {...register("Image", { required: true })}
            type="file"
            className="file-input file-input-bordered w-full "
          />
        </div>
        <div className="form-control mt-6 w-40">
          <button className="btn  bg-[#1A1C38] text-white hover:text-black">
            Add Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
