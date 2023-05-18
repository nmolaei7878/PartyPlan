import { useAppSelector } from "../../../core/hook/hooks";
import { useNavigate } from "react-router-dom";
import { resetStteper } from "../../../redux/plan-slice";
import { useDispatch } from "react-redux";
import { KIcons } from "../../../core/constatnt/KIcons";

const Header = () => {
  const plans = useAppSelector((state) => state.plan);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function goToCreatePlan() {
    dispatch(resetStteper());

    navigate("/create-plan/occasion");
  }

  return (
    <>
      <header className="flex justify-between items-center">
        <div className="">hi, ishita 👋</div>
        <div className="relative w-11 h-11">
          <img
            className="h-full w-full absolute top-0 right-0"
            src={KIcons.profileborder}
            alt=""
          />
          <img
            className="absolute top-0 p-1 right-0 h-full w-full"
            src={KIcons.profile}
            alt=""
          />
        </div>
      </header>
      {plans.plans.length > 0 && (
        <div className="flex justify-between items-center mt-2">
          <div className="">upcoming</div>
          <button
            onClick={goToCreatePlan}
            className="bg-gray-800 px-4 py-2 rounded-md capitalize text-sm "
          >
            create new
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
