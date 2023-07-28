import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";

import ClassCard from "../../components/ClassCard";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClasses(data);
      });
  }, []);

  return (
    <div className="my-5">
      <SectionTitle
        title={"Popular Classes"}
        subtitle={"How people join our courses"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
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
