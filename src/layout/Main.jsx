import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Main;
