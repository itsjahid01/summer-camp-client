import SectionTitle from "../../components/SectionTitle";
import InstructorCard from "../../components/InstructorCard";
import useInstructors from "../../hooks/useInstructors";

const PopularInstructors = () => {
  const [instructors] = useInstructors();
  return (
    <div className="my-5">
      <SectionTitle
        title={"Popular Instructors"}
        subtitle={"How people loves their instructors"}
      ></SectionTitle>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-10 p-5">
        {instructors.slice(0, 6).map((instructor) => (
          <InstructorCard
            key={instructor?._id}
            instructor={instructor}
          ></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
