import InstructorCard from "../../components/InstructorCard";
import SectionTitle from "../../components/SectionTitle";
import useInstructors from "../../hooks/useInstructors";

const Instructors = () => {
  const [instructors] = useInstructors();

  return (
    <div className="container mx-auto my-5">
      <SectionTitle
        title={"Our Instructors"}
        subtitle={"How people loves their instructors"}
      ></SectionTitle>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-5 p-5">
        {instructors.map((instructor) => (
          <InstructorCard
            key={instructor?._id}
            instructor={instructor}
          ></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default Instructors;