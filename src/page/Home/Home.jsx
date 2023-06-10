import PopularClasses from "../../components/PopularClasses/PopularClasses";
import PopularInstructors from "../../components/PopularInstructors/PopularInstructors";
import Banner from "../../components/banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner/>
            <PopularClasses/>
            <PopularInstructors/>
        </div>
    );
};

export default Home;