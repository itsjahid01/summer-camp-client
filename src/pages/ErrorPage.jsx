import { Link, useRouteError } from "react-router-dom";
import img from "../assets/404.gif";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className=" w-2/5 h-2/5 mx-auto mt-18 text-center ">
      <img className=" rounded" src={img} alt="" />
      <p className="mt-3 text-xl text-red-500">Page Not Pound!!</p>
      <p className="mt-2 text-xl text-red-500">{error.data}</p>
      <Link to="/">
        <button className="btn bg-rose-700 mt-4 text-white ">
          Back to HomePage
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
