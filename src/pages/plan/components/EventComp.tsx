import React, { FormEvent, useEffect, useRef, useState } from "react";
import FormInput from "../../../components/shared-ui/Form";
import { useAppDispatch, useAppSelector } from "../../../core/hook/hooks";
import { updateEvent } from "../../../redux/plan-slice";
import { NextButton } from "../../../redux/ui-slice";

const EventComp = () => {
  const plan = useAppSelector((state) => state.plan.newPlan);
  const dispatch = useAppDispatch();

  const nameChange = (e: any) => {
    dispatch(updateEvent({ eventName: e.target.value }));
    console.log(plan?.eventName);
  };
  const dateChange = (e: any) => {
    dispatch(updateEvent({ eventDate: e.target.value }));
    console.log(plan?.eventDate);
  };
  const timeChange = (e: any) => {
    dispatch(updateEvent({ eventTime: e.target.value }));
    console.log(plan?.eventTime);
  };
  const budgetChange = (e: any) => {
    dispatch(updateEvent({ budget: e.target.value }));
    console.log(plan?.budget);
  };

  useEffect(() => {
    dispatch(NextButton(true));
  }, []);

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
