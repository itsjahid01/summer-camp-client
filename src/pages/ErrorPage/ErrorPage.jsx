import { Link, useRouteError } from "react-router-dom";
import img from "../../assets/404.gif";
import { FaHome } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className=" w-2/5 h-2/5 mx-auto mt-18 text-center ">
      <Helmet>
        <title>WorldSpeak | Error Page</title>
      </Helmet>
      <img className=" rounded" src={img} alt="" />
      <p className="mt-3 text-xl text-red-500">Page Not Pound!!</p>
      <p className="mt-2 text-xl text-red-500">{error.data}</p>
      <Link to="/">
        <button className="btn  mt-4">
          Back to HomePage <FaHome />
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
