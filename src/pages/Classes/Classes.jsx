import { Helmet } from "react-helmet-async";
import ClassCard from "../../components/ClassCard";
import SectionTitle from "../../components/SectionTitle";
import useClasses from "../../hooks/useClasses";

const Classes = () => {
  const [classes] = useClasses();
  return (
    <div className="container mx-auto my-5">
      <Helmet>
        <title>WorldSpeak | Classes</title>
      </Helmet>
      <SectionTitle
        title={"Our Classes"}
        subtitle={"How people join our courses"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5">
        {classes.map((singleClass) => (
          <ClassCard
            key={singleClass?._id}
            singleClass={singleClass}
          ></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
