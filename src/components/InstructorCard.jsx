const InstructorCard = ({ instructor }) => {
  console.log(instructor);

  const { Image, email, classes, name, classesName } = instructor;

  return (
    <div className="card rounded-none bg-[#93989E] shadow-2xl transform transition-all hover:scale-95 ">
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
        <p>
          <span className="text-lg font-semibold">Name of Classes: </span>
          {classesName.map((item, index) => (
            <span key={index}>{item}, </span>
          ))}
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
