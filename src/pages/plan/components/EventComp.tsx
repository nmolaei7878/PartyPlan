import React, {
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import FormInput from "../../../components/shared-ui/Form";
import { useAppDispatch, useAppSelector } from "../../../core/hook/hooks";
import {
  updateEventDate,
  updateEventName,
  updateEventTime,
  updateEventbudget,
} from "../../../redux/plan-slice";
import { NextButton } from "../../../redux/ui-slice";
import { debounce } from "../../../core/util/debounce";

const EventComp = () => {
  const plan = useAppSelector((state) => state.plan.newPlan);
  const dispatch = useAppDispatch();

  const nameChange = useCallback(
    debounce((e: any) => {
      dispatch(updateEventName(e.target.value));
      console.log(plan?.eventName);
    }, 500),
    [debounce]
  );

  const dateChange = useCallback(
    debounce((e: any) => {
      console.log(plan?.eventDate);
      dispatch(updateEventDate(e.target.value));
      console.log(plan?.eventDate);
    }, 500),
    [debounce]
  );
  const timeChange = useCallback(
    debounce((e: any) => {
      console.log(e.target.value);

      dispatch(updateEventTime(e.target.value));
      console.log(plan?.eventTime);
    }, 500),
    [debounce]
  );
  const budgetChange = useCallback(
    debounce((e: any) => {
      dispatch(updateEventbudget(e.target.value));
      console.log(plan?.budget);
    }, 500),
    [debounce]
  );

  useEffect(() => {
    if (
      plan?.eventName !== "" &&
      plan?.eventDate !== "" &&
      plan?.eventTime !== "" &&
      plan?.budget !== ""
    ) {
      dispatch(NextButton(true));
    }
  }, [plan?.budget]);

  return (
    <form className="w-full items-center justify-evenly flex flex-col gap-6 mt-3">
      <FormInput
        onChange={nameChange}
        formType="text"
        id="Event Name"
        label="Event Name"
        value={plan?.eventName}
      />
      <FormInput
        onChange={dateChange}
        formType="date"
        id="Date"
        label="Date"
        value={plan?.eventDate}
      />
      <FormInput
        onChange={timeChange}
        formType="time"
        id="Time"
        label="Time"
        value={plan?.eventTime}
      />
      <FormInput
        onChange={budgetChange}
        formType="number"
        id="Budget"
        label="Budget"
        value={plan?.budget}
      />
    </form>
  );
};

export default EventComp;
