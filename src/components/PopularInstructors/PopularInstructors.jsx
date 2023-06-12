import SectionTitle from "../SectionTitle/SectionTitle";
import Card from "../Card/Card";
import useInstructor from "../../hooks/useInstructor";

const PopularInstructors = () => {
  const [instructors] = useInstructor();
  return (
    <div>
      <SectionTitle
        heading="Learn from the Best in the Field"
        subHeading="Our summer camp is led by a team of accomplished instructors who bring their expertise and passion to create an unforgettable learning journey for every participant."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {
        instructors.slice(0, 6).map(instructor => <Card
        key={instructor._id}
            img={instructor.image}
            leftName="Name"
            leftValue={instructor.name}
            rightName="Email"
            rightValue={instructor.email}
          />)
        }
      </div>
    </div>
  );
};

export default PopularInstructors;
