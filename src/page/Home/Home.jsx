import { Helmet } from "react-helmet-async";
import PopularClasses from "../../components/PopularClasses/PopularClasses";
import PopularInstructors from "../../components/PopularInstructors/PopularInstructors";
import Unknow from "../../components/Unknow/Unknow";
import Banner from "../../components/banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> SUMMERsports || Home</title>
      </Helmet>
      <Banner />
      <PopularClasses />
      <Unknow />
      <PopularInstructors />
    </div>
  );
};

export default Home;
