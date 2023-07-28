const InstructorCard = ({ instructor }) => {
  console.log(instructor);

  const { Image, email, classes, name } = instructor;

  return (
    <div className="card rounded-none bg-[#93989E] shadow-2xl group-hover:scale-100">
      <figure>
        <img src={Image} alt="Movie" />
      </figure>
      <div className="card-body">
        <p>
          <span className="text-lg font-semibold">Name: </span>
          {name}
        </p>
        <p>
          <span className="text-lg font-semibold">Email: </span>
          {email}
        </p>
        <p>
          <span className="text-lg font-semibold">Classes: </span>
          {classes}
        </p>
        <div className="">
          <button className="btn bg-[#1A1C38] text-white hover:text-black">
            See Classes
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
