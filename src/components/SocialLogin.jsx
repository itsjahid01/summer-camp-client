import { FaGoogle } from "react-icons/fa";

const SocialLogin = ({ text }) => {
  // const handleGoogleLogin = () => {
  //   googleLogin(googleProvider)
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //       navigate(from);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };
  return (
    <div>
      <p className="text-center text-lg font-semibold">or {text}</p>
      <div className="flex justify-center items-center ">
        <button className="btn btn-circle btn-outline mt-3 shadow-blue-300">
          <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
