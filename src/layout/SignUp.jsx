import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../components/SocialLogin";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import signUpImg from "../assets/signup.jpg";

const SignUp = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { registerUser, updateUserProfile } = useContext(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);

    if (data.password !== data.confirmPass) {
      setError("Your password did not match");
      return;
    }

    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        const user = result.user;
        updateUserProfile(data.name, data.photoUrl)
          .then(() => {
            // console.log("profile updated");
            const saveUser = {
              name: user?.displayName,
              email: user?.email,
              role: "student",
            };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data?.insertedId) {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Created successfully",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/");
                }
              });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="container mx-auto">
      <div className="md:flex justify-center items-center gap-8 p-8 ">
        <div className="w-1/2 p-5">
          <img src={signUpImg} alt="" />
        </div>
        <div className=" md:w-1/2 p-5">
          <div className="card shadow-2xl p-5 bg-[#B7D2ED]">
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
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500">password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500"> password must be 6 characters</p>
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
              <p className="text-red-500">{error}</p>
              <div className="form-control w-36 mt-6">
                <button
                  type="submit"
                  className="btn bg-[#1A1C38] text-white hover:text-black"
                >
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
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
