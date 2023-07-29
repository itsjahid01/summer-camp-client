const ClassCard = ({ singleClass }) => {
  console.log(singleClass);
  const { Image, InstructorName, Name, Price, AvailableSeats } = singleClass;

  return (
    <div
      className={`card rounded-none ${
        AvailableSeats === 0 ? "bg-red-400" : "bg-[#B7D2ED]"
      } shadow-2xl`}
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
            disabled={AvailableSeats === 0 ? "true" : ""}
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
