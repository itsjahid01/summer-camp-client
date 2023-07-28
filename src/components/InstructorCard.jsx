const InstructorCard = ({ instructor }) => {
  console.log(instructor);

  const { Image, email, classes, name } = instructor;

  return (
    <div className="card  shadow-2xl">
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
        <div className="card-actions justify-end">
          <button className="btn bg-[#1A1C38] text-white hover:text-black">
            See Classes
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
