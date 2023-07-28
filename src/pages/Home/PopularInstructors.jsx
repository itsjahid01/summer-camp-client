import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import InstructorCard from "../../components/InstructorCard";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInstructors(data);
      });
  }, []);
  return (
    <div>
      <SectionTitle
        title={"Popular Instructors"}
        subtitle={"How people loves their instructors"}
      ></SectionTitle>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-5 p-5">
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
