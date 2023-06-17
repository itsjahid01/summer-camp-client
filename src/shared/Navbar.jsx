import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";

const Navbar = () => {
  //   const { logOut, user } = useContext(AuthContext);
  //   const navigate = useNavigate();

  //   const handleLogOut = () => {
  //     logOut()
  //       .then(() => {
  //         navigate("/");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  return (
    <div className="bg-[#2A2F4F] text-white">
      <div className=" container mx-auto navbar">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#2A2F4F] rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/instructors">Instructors</Link>
              </li>
              <li>
                <Link to="/classes">Classes</Link>
              </li>
              {/* <li>
                <Link to="/dashboard"> Dashboard</Link>
              </li> */}
            </ul>
          </div>
          <Link to="/">
            <div className="flex ">
              <img className="w-8 mr-2" src={logo} alt="" />
              <span className=" normal-case text-xl font-bold italic">
                Feel Good Yoga
              </span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/instructors">Instructors</Link>
            </li>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
            {/* <li>
                <Link to="/dashboard"> Dashboard</Link>
              </li> */}
          </ul>
        </div>
        <div className="navbar-end">
          {/* {user && user ? (
            <>
              <div title={user?.displayName} className=" mr-4">
                <img className="w-10 rounded-full" src={user?.photoURL} />
              </div>
              <Link
                onClick={handleLogOut}
                to="/login"
                className="btn bg-[#917FB3]"
              >
                Logout
              </Link>
            </>
          ) : (
            <Link to="/login" className="btn bg-[#917FB3]">
              Login
            </Link>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
