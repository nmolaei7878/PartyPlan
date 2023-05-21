import { useAppDispatch, useAppSelector } from "../../../core/hook/hooks";
import { useNavigate } from "react-router-dom";
import { createPlan, resetPlan } from "../../../redux/plan-slice";
import { KIcons } from "../../../core/constant/KIcons";
import { NextButton, resetStteper } from "../../../redux/ui-slice";

interface Props {
  isShow: boolean;
}

const Header: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const id = new Date().getTime();

  function goToCreatePlan() {
    dispatch(resetStteper());
    dispatch(resetPlan());
    dispatch(NextButton(false));
    dispatch(createPlan(id));
    navigate("/create-plan/occasion", { state: { id } });
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
      {props.isShow && (
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
