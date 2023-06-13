import { Helmet } from "react-helmet-async";
import useClass from "../../../hooks/useClass";
import ClassCard from "../../../components/ClassCard/ClassCard";

const ClassesPage = () => {
  const [allclass] = useClass();

  return (
    <div>
      <Helmet>
        <title> SUMMERsports || classes</title>
      </Helmet>
      <div className="bg-slate-900">
        <h1 className="text-white text-center text-3xl font-bold uppercase underline underline-offset-8 py-20">
          our classes
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 py-7">
        {allclass.map((element) => <ClassCard key={element._id} element={element}/>)}
      </div>
    </div>
  );
};

export default ClassesPage;
