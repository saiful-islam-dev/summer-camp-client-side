import Card from "../Card/Card";
import SectionTitle from "../SectionTitle/SectionTitle";
import img from "../../assets/home/profile.jpg"


const PopularClasses = () => {
    return (
        <div className="">
            <SectionTitle heading={"Our Popular Class"}  subHeading={"Immerse yourself in a supportive and collaborative environment, where you can network with like-minded individuals and forge lifelong connections"}/>

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

export default PopularClasses;