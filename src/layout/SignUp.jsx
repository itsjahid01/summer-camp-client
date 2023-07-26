import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container mx-auto">
      <div className="md:flex justify-center items-center gap-8 p-8 ">
        <div className=" md:w-1/2 p-5">
          <div className="card shadow-2xl p-5">
            <h1 className="text-3xl font-bold text-center">Sign Up</h1>
            <form className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="password"
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
                  name="photoUrl"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-4/6 mx-auto mt-6">
                <button type="submit" className="btn bg-rose-600 text-white">
                  Register
                </button>
              </div>
            </form>
            <p className="text-center font-semibold mt-3">
              Already have an account?
              <Link to="/login" className="link-primary">
                Log in
              </Link>
            </p>
            <p className="text-center font-semibold mt-3">or Sign Up with</p>
            <button className="btn btn-outline w-4/6 mx-auto mt-3">
              <span className="mr-2">
                <FaGoogle />
              </span>
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
