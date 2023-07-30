import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = ({ text }) => {
  const { googleLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <p className="text-center text-lg font-semibold">or {text}</p>
      <div className="flex justify-center items-center ">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-circle btn-outline mt-3 shadow-blue-300"
        >
          <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
