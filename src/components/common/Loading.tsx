import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="py-10 flex flex-col justify-center items-center">
      <FaSpinner className="w-16 h-16 fill-gray-600 animate-spin" />
    </div>
  );
};

export default Loading;
