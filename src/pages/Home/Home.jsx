import { Helmet } from "react-helmet-async";
import LearningPath from "./LearningPath";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import Slider from "./Slider";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>WorldSpeak | Home</title>
      </Helmet>
      <Slider></Slider>
      <PopularClasses></PopularClasses>
      <LearningPath></LearningPath>
      <PopularInstructors></PopularInstructors>
    </div>
  );
};

export default Home;
