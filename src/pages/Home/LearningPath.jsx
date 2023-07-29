import classImg from "../../assets/school.jpg";

const LearningPath = () => {
  return (
    <div
      style={{ backgroundImage: `url(${classImg})` }}
      className=" bg-fixed text-center text-white my-10"
    >
      <div className="md:flex justify-center items-center bg-black bg-opacity-70 pb-20 pt-12 px-36">
        <div className="md:ml-10 mt-8">
          <p className="text-3xl font-bold mt-11">
            Find the right learning path for you
          </p>
          <p className="my-6">
            Match your goals to our programs, explore your options and <br />{" "}
            map out your path to success.
          </p>
          <button className="mt-4 bg-[#1A1C38] text-white hover:bg-slate-400 hover:text-black px-4 py-2 font-semibold uppercase rounded text-xs tracking-wider">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;
