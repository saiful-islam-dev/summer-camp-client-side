import { Helmet } from "react-helmet-async";
import useInstructor from "../../../hooks/useInstructor";
import InstructorCart from "./InstructorCart/InstructorCart";

const InstructorsPage = () => {
  const [instructors] = useInstructor();

  return (
    <div>
      <Helmet>
        <title>
          {" "}
          SUMMERsports || Instructor
        </title>
      </Helmet>
      <div className="bg-slate-900">
        <h1 className="text-white text-center text-3xl font-bold uppercase underline underline-offset-8 py-20">
          our Instructor
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 py-7 px-4">

      {
        instructors.map((instructor) => <InstructorCart key={instructor._id} 
        instructor={instructor}/>)
      }
      </div>
    </div>
  );
};

export default InstructorsPage;