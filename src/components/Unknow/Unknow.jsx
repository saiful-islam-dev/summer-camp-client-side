const Unknow = () => {
  return (
    <div className="bg-black flex flex-col text-center py-36 mt-14">
      <h2 className="text-white text-4xl uppercase font-mono font-bold">Join us this summer</h2>
      <p className="text-white text-2xl font-mono py-5 w-2/4 mx-auto">
        Summer sport Dnorllmen for summer 2023 is now open! Join our mailing
        list to learn more about our camps and recive other helpfull resources.Join us and learn from the best this summer.
      </p>
      <div className="form-control mx-auto">
        <label className="input-group">
          <span className="bg-pink-700 text-white font-bold">Email</span>
          <input
            type="text"
            placeholder="info@site.com"
            className="input input-bordered"
          />
        </label>
      </div>
    </div>
  );
};

export default Unknow;
