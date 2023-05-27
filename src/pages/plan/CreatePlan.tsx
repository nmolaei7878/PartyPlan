import { useCallback, useEffect, useMemo } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../core/hook/hooks";
import { addPlan, resetPlan } from "../../redux/slices/plan-slice";
import HeaderCreatePlan from "../../components/shared-ui/HeaderCreatePlan";
import NextButtonCreatePlan from "../../components/shared-ui/NextButtonCreatePlan";
import useNextStep from "../../core/hook/nexstep";
import RouteIndicator from "../../components/shared-ui/RouteIndicator";
import {
  NextButton,
  addToStteper,
  removeFromStteper,
} from "../../redux/slices/ui-slice";

const CreatePlan = () => {
  const history = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const plans = useAppSelector((state) => state.plan);
  const ui = useAppSelector((state) => state.ui);
  const pathName = history.pathname.split("/").at(-1);

  useEffect(
    useCallback(() => {
      window.onpopstate = () => {
        dispatch(NextButton(true));
        dispatch(removeFromStteper());
      };
    }, []),
    [window.onpopstate]
  );

  const memoizeId = useMemo(() => {
    if (history.state) {
      return history.state.id;
    } else {
      history.state = plans.createdID;
      return plans.createdID;
    }
  }, []);

  const router = useNextStep(pathName!);
  console.log(router);
  const onCLickNext = useCallback(() => {
    if (ui.next) {
      if (router === "home") {
        dispatch(addPlan());
        dispatch(resetPlan());
        navigate("/home", { replace: true });
        return;
      }
      dispatch(NextButton(false));
      dispatch(addToStteper());
      navigate(router);
    }
  }, [ui.next, router]);

  return (
    <div className="h-full w-full text-white text-lg font-bold lg:flex min-h-screen lg:gap-5">
      <RouteIndicator pathName={pathName!} />
      <div className="lg:w-10/12 lg:relative ">
        <HeaderCreatePlan />
        <div className="h-8/10 mt-10">
          <Outlet context={memoizeId} />
        </div>
        <NextButtonCreatePlan onCLickNext={onCLickNext} />
      </div>
    </div>
  );
};

export default CreatePlan;
