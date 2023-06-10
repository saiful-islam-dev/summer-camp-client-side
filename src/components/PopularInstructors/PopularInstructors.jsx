import SectionTitle from "../SectionTitle/SectionTitle";
import img from "../../assets/home/profile.jpg"
import Card from "../Card/Card";

const PopularInstructors = () => {
    return (
        <div>
            <SectionTitle heading="Learn from the Best in the Field" subHeading="Our summer camp is led by a team of accomplished instructors who bring their expertise and passion to create an unforgettable learning journey for every participant." />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card img={img} leftName="Name" leftValue="cricket" rightName="teacher" rightValue="Saiful Islam" />
        <Card img={img} leftName="Name" leftValue="cricket" rightName="teacher" rightValue="Saiful Islam" />
        <Card img={img} leftName="Name" leftValue="cricket" rightName="teacher" rightValue="Saiful Islam" />
        <Card img={img} leftName="Name" leftValue="cricket" rightName="teacher" rightValue="Saiful Islam" />
        <Card img={img} leftName="Name" leftValue="cricket" rightName="teacher" rightValue="Saiful Islam" />
        <Card img={img} leftName="Name" leftValue="cricket" rightName="teacher" rightValue="Saiful Islam" />
        </div>
        </div>
    );
};

export default PopularInstructors;