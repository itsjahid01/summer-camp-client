import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import SocialLogin from "../components/SocialLogin";
import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    loginUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from);
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="container mx-auto">
      <div className="md:flex justify-center items-center gap-8 p-8 ">
        <div className=" md:w-1/2 p-5">
          <div className="card shadow-2xl p-5 bg-[#B7D2ED]">
            <h1 className="text-3xl font-bold text-center">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <div className=" flex items-center">
                  <input
                    type={show ? "text" : "password"}
                    placeholder="Password"
                    {...register("password", { required: true })}
                    className="input input-bordered w-full"
                  />
                  <FaEye onClick={() => setShow(!show)} className="-ml-7" />
                </div>
                {errors.password && (
                  <p className="text-red-500">password is required</p>
                )}
              </div>
              <p className="text-red-500">{error}</p>
              <div className="form-control w-36 mt-6">
                <button type="submit" className="btn bg-[#1A1C38] text-white">
                  Login
                </button>
              </div>
            </form>
            <p className="mt-3 mb-3  font-semibold">
              Don't have an account?
              <Link to="/register" className="link-primary">
                Sign Up
              </Link>
            </p>
            <SocialLogin text={"login with"}></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
