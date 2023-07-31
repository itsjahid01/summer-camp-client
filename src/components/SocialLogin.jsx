import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);

        const saveUser = { name: user?.displayName, email: user?.email };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data?.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User login successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(from, { replace: true });
            }
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="divider">or</div>
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
