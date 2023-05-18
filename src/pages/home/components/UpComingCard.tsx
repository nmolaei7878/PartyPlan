import Saly2 from "../../../assets/icons/Saly2.svg";

const UpComingCard = () => {
  return (
    <div className="bg-gradient-to-r from-slate-500 to-slate-800 rounded-md h-40 p-6 relative">
      <p className="mb-2 text-lg">sara birthday bash</p>
      <p className="text-sm mb-3 font-normal">10 days to go</p>
      <div></div>

      <img
        className="absolute top-1/2 right-3 -translate-y-2/4 w-28"
        src={Saly2}
        alt=""
      />
      <div className="flex items-center justify-between w-1/2 ">
        <div>
          <p className="text-md">0</p>
          <p className="text-sm text-gray-300">done</p>
        </div>
        <div>
          <p className="text-md">5</p>
          <p className="text-sm text-gray-300">To Do</p>
        </div>
      </div>
    </div>
  );
};

export default UpComingCard;
