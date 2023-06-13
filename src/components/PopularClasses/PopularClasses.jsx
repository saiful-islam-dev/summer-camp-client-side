import Card from "../Card/Card";
import SectionTitle from "../SectionTitle/SectionTitle";
import useClass from "../../hooks/useClass";

const PopularClasses = () => {
  const [allclass] = useClass();
  return (
    <div className="px-20">
      <SectionTitle
        heading={"Our Popular Class"}
        subHeading={
          "Immerse yourself in a supportive and collaborative environment, where you can network with like-minded individuals and forge lifelong connections"
        }
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {allclass.slice(0, 6).map((allclas) => (
          <Card
            key={allclas._id}
            img={allclas.image}
            leftName="Name"
            leftValue={allclas.name}
            rightName="teacher"
            rightValue={allclas.instructorName}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
