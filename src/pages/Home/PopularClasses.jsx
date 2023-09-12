import SectionTitle from "../../components/SectionTitle";

import ClassCard from "../../components/ClassCard";
import useClasses from "../../hooks/useClasses";

const PopularClasses = () => {
  const [classes] = useClasses();

  return (
    <div className="my-5">
      <SectionTitle
        title={"Popular Classes"}
        subtitle={"How people join our courses"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5">
        {classes.slice(0, 6).map((singleClass) => (
          <ClassCard
            key={singleClass?._id}
            singleClass={singleClass}
          ></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
