import { Link } from "react-router-dom";
import SocialLogin from "../components/SocialLogin";
import { useForm } from "react-hook-form";
import { useState } from "react";

const SignUp = () => {
  const [error, setError] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (data.password !== data.confirmPass) {
      setError("Your password did not match");
      return;
    }
  };

  return (
    <div className="container mx-auto">
      <div className="md:flex justify-center items-center gap-8 p-8 ">
        <div className=" md:w-1/2 p-5">
          <div className="card shadow-2xl p-5">
            <h1 className="text-3xl font-bold text-center">Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <p className="text-red-500">Name is required</p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <p className="text-red-500">Email is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern:
                      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                  })}
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500">password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500"> password must be 6 character</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    password must have one uppercase, one lowercase,one digit
                    and one special character.
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirmPass", { required: true })}
                  className="input input-bordered"
                />
                <p className="text-red-500">{error}</p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo Url"
                  {...register("photoUrl", { required: true })}
                  className="input input-bordered"
                />
                {errors.photoUrl && (
                  <p className="text-red-500">photo Url is required</p>
                )}
              </div>
              <div className="form-control w-36 mt-6">
                <button type="submit" className="btn bg-[#1A1C38] text-white">
                  Register
                </button>
              </div>
            </form>
            <p className=" font-semibold mt-3">
              Already have an account?
              <Link to="/login" className="link-primary">
                Log in
              </Link>
            </p>
            <SocialLogin text={"sign up with"}></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
