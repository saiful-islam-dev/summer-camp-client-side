import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img from "../../../assets/home/profile.jpg";

const InstructorsPage = () => {
  return (
    <div>
      <SectionTitle
        heading="Learn from the Best in the Field"
        subHeading="Our summer camp boasts a remarkable lineup of experienced instructors who bring a wealth of knowledge and passion to their teaching. With years of expertise in their respective fields, they are committed to providing top-notch instruction and nurturing the talents of our campers."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="card w-96 border-4 border-slate-900 rounded-md bg-base-300 shadow-xl">
          <figure>
            <div className="p-3">
              <img className="rounded-md" src={img} alt="Shoes" />
            </div>
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
              <div>
                <p className="capitalize">
                  <span className="font-semibold">Name:</span> saifuol
                </p>
                <p className="capitalize">
                  <span className="font-semibold">Instructor:</span> saifuol
                </p>
              </div>
              <div>
                <p className="capitalize">
                  <span className="font-semibold">Price: </span> 20
                </p>
                <p className="capitalize">
                  <span className="font-semibold">Available seats:</span>10
                </p>
              </div>
            </div>
            <button className="btn btn-active btn-ghost">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorsPage;
