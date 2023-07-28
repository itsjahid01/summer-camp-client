const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center p-5">
      <h2 className="text-3xl  mt-5 font-bold mb-2">{title}</h2>
      <p className=" ">{subtitle}</p>
      <br />
      <hr />
    </div>
  );
};

export default SectionTitle;
