import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/worldspeaklogo-removebg-preview.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import "../shared/navbar.css";
import useSelectedClasses from "../hooks/useSelectedClasses";
import useAdmin from "../hooks/useAdmin";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [classes] = useSelectedClasses();
  const [role, isRoleLoading] = useAdmin();

  const navItem = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/instructors">Instructors</NavLink>
      </li>
      <li>
        <NavLink to="/classes">Classes</NavLink>
      </li>
      {role?.role === "admin" ? (
        <li>
          <NavLink to="/dashboard/admin-home"> Dashboard</NavLink>
        </li>
      ) : role?.role === "instructor" ? (
        <li>
          <NavLink to="/dashboard/instructor-home"> Dashboard</NavLink>
        </li>
      ) : (
        <li>
          <NavLink to="/dashboard/student-home"> Dashboard</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/dashboard/selectedClasses">
          <FaShoppingCart />
          <sup className="badge badge-info">{classes.length || 0}</sup>
        </NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="">
      <div className=" container mx-auto navbar font-semibold">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content sidebar mt-3 p-2 shadow rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <Link to="/">
            <div className="flex ">
              <img className="w-1/2 mr-2" src={logo} alt="" />
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal sidebar px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          {user && user ? (
            <>
              <div title={user?.displayName} className=" mr-4">
                <img className="w-10 rounded-full" src={user?.photoURL} />
              </div>
              <Link
                onClick={handleLogOut}
                className="btn bg-[#1A1C38] text-white hover:text-black"
              >
                Logout
              </Link>
            </>
          ) : (
            <Link
              to="/login"
              className="btn bg-[#1A1C38] text-white hover:text-black"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
