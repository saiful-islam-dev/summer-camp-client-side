import img from "../../../assets/home/profile.jpg";

const InstructorsPage = () => {
  return (
    <div>
     <div className="bg-slate-900">
        <h1 className="text-white text-center text-3xl font-bold uppercase underline underline-offset-8 py-20">our Instructor</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 py-7 px-4">
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
