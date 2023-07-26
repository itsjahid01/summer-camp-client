import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  // const handleGoogleLogin = () => {
  //   googleLogin(googleProvider)
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //       navigate(from);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };

  return (
    <div className="container mx-auto">
      <div className="md:flex justify-center items-center gap-8 p-8 ">
        <div className=" md:w-1/2 p-5">
          <div className="card shadow-2xl p-5">
            <h1 className="text-3xl font-bold text-center">Login</h1>
            <form className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-4/6 mx-auto mt-6">
                <button type="submit" className="btn bg-rose-600 text-white">
                  Login
                </button>
              </div>
            </form>
            <p className="mt-3 mb-3 text-center font-semibold">
              Don't have an account?
              <Link to="/register" className="link-primary">
                Sign Up
              </Link>
            </p>
            <p className="text-center font-semibold">or Login With</p>
            <button className="btn btn-outline w-4/6 mx-auto mt-3">
              <span className="mr-2">
                <FaGoogle />
              </span>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
