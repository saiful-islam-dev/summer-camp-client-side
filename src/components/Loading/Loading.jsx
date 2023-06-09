import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <FadeLoader color="#36d7b7" />
    </div>
  );
};

export default Loading;
