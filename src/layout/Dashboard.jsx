import { Link, NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
// import { FaUserGroup } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { MdLibraryAdd, MdPeople } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import "../layout/dashboard.css";
import useSelectedClasses from "../hooks/useSelectedClasses";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [classes] = useSelectedClasses();

  const [role] = useAdmin();
  // console.log(role);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col  mt-12 ">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-info drawer-button lg:hidden w-40"
        >
          Open drawer
        </label>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu sidebar p-4 w-72 h-full bg-cyan-100 text-base-content">
          {/* Sidebar content here */}
          {role?.role === "admin" ? (
            <>
              <li>
                <NavLink to={"/dashboard/admin-home"}>
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manage-classes"}>
                  <FaWallet /> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manage-users"}>
                  <MdPeople /> Manage Users
                </NavLink>
              </li>
            </>
          ) : role?.role === "instructor" ? (
            <>
              <li>
                <NavLink to={"/dashboard/instructor-home"}>
                  <FaHome /> Instructor Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/my-classes"}>
                  <BiCalendar /> My Classes
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/add-class"}>
                  <MdLibraryAdd /> Add Class
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/dashboard/student-home"}>
                  <FaHome /> Student Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/enrolled-classes"}>
                  <IoIosPeople /> Enrolled Classes
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/payment-history"}>
                  <FaWallet /> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/selectedClasses"}>
                  <FaShoppingCart /> Selected Classes
                  <div className="badge badge-info">+{classes.length || 0}</div>
                </NavLink>
              </li>
            </>
          )}

          {/* divider */}
          <div className="divider"></div>
          <li>
            <Link to={"/"}>
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to={"/instructors"}>
              <MdPeople />
              Instructors
            </Link>
          </li>
          <li>
            <Link to={"/classes"}>
              <IoIosPeople />
              Classes
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
