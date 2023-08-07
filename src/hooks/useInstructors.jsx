import { useEffect, useState } from "react";

const useInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("https://summer-camp-server-side-peach.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setInstructors(data);
      });
  }, []);
  return [instructors];
};

export default useInstructors;
