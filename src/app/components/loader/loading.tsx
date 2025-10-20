import { Circles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <Circles
        height="80"
        width="80"
        color="#3498db"
        ariaLabel="loading"
        visible={true}
      />
      <p className="text-gray-500 mt-4">Fetching data, please wait...</p>
    </div>
  );
};

export default Loader;