

const Card = ({img,leftName,rightName,leftValue, rightValue }) => {
  return (
      <div className="card md:w-full border-4 border-slate-900 w-96 bg-base-300 shadow-xl">
        <figure>
          <div className="p-5">
          <img 
          className="rounded-lg border-4 border-slate-900"
            src={img}
            alt="img"
          />
          </div>
        </figure>
        <div className="card-actions justify-between p-4">
            <h1 className="font-bold capitalize"><span className="uppercase">{leftName} :</span> {leftValue}</h1>
            <h1 className="font-bold capitalize"><span className="uppercase">{rightName} :</span> {rightValue}</h1>
        </div>
      </div>
  );
};

export default Card;
