import { Link, NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-72 h-full bg-cyan-100 text-base-content">
          {/* Sidebar content here */}
          <li>
            <NavLink to={"/dashboard/student-home"}>
              <FaHome /> Student Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/enrolled-classes"}>
              <FaHome /> Enrolled Classes
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
            </NavLink>
          </li>
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
