import LearningPath from "./LearningPath";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import Slider from "./Slider";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Slider></Slider>
      <PopularClasses></PopularClasses>
      <LearningPath></LearningPath>
      <PopularInstructors></PopularInstructors>
    </div>
  );
};

export default Home;
