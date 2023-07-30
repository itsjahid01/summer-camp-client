import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useSelectedClasses from "../hooks/useSelectedClasses";

const ClassCard = ({ singleClass }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useSelectedClasses();

  // console.log(singleClass);
  const { Image, InstructorName, Name, Price, AvailableSeats } = singleClass;

  const handleSelectClass = (singleClass) => {
    // console.log(singleClass);
    const { Image, InstructorName, Name, Price, AvailableSeats } = singleClass;
    if (user) {
      const item = {
        Image,
        InstructorName,
        Name,
        Price,
        AvailableSeats,
        email: user?.email,
      };

      fetch("http://localhost:5000/selectedClasses", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(item),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Successfully added",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "Please login fast!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div
      className={`card rounded-none ${
        AvailableSeats === 0 ? "bg-red-400" : "bg-[#B7D2ED]"
      } shadow-2xl transform transition-all hover:scale-105`}
    >
      <figure className="px-5 pt-5">
        <img src={Image} alt="Shoes" className="rounded-sm" />
      </figure>
      <div className="card-body items-center text-center">
        <p>
          <span className="text-lg font-semibold">Class Name: </span>
          {Name}
        </p>
        <p>
          <span className="text-lg font-semibold">Instructor Name: </span>
          {InstructorName}
        </p>
        <p>
          <span className="text-lg font-semibold">Price: $</span>
          {Price}
        </p>
        <p>
          <span className="text-lg font-semibold">Available Seats: </span>
          {AvailableSeats}
        </p>
        <div className="w-full ">
          <button
            onClick={() => handleSelectClass(singleClass)}
            disabled={AvailableSeats === 0 ? true : ""}
            className="btn w-full bg-[#1A1C38] text-white hover:text-black"
          >
            Select Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
