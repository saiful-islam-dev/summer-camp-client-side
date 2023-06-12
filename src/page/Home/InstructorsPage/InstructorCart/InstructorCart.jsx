
const InstructorCart = ({instructor}) => {
    return (
      <div className="card w-96 border-4 border-slate-900 rounded-md bg-base-300 shadow-xl">
        <figure>
          <div className="p-3">
            <img className="rounded-md border-4 border-slate-900" src={instructor.image} alt="" />
          </div>
        </figure>
        <div className="card-body">
          <div className="text-center">
            <p className="capitalize font-semibold">
              <span className="font-bold">Name:</span> {instructor.name}
            </p>
            <p className="capitalize font-semibold">
              <span className="font-bold">Email:</span> {instructor.email}
            </p>
            <p className="capitalize font-semibold">
              Classes taken by <span className="">{instructor.numberOfClassesTaken}</span> him</p>
          </div>
        </div>
      </div> 
    );
};

export default InstructorCart;