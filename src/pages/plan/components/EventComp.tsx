import React, { FormEvent, useRef } from "react";

const EventComp = () => {
  const name = useRef<HTMLInputElement>(null);
  const date = useRef<HTMLInputElement>(null);
  const time = useRef<HTMLInputElement>(null);
  const budget = useRef<HTMLInputElement>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      name.current?.value &&
      date.current?.value &&
      time.current?.value &&
      budget.current?.value
    ) {
      const data = {
        eventName: name.current?.value,
        eventDate: date.current?.value,
        eventTime: time.current?.value,
        budget: budget.current?.value,
      };
    }
  };
  return (
    <div>Event</div>
    // <form
    //   onSubmit={onSubmit}
    //   className="w-screen items-center justify-evenly flex flex-col gap-6"
    // >
    //   <div className="flex flex-col w-5/6 sm:w-1/3 gap-2 px-6">
    //     <label className="text-gray-800" htmlFor="name">
    //       Name
    //     </label>
    //     <input
    //       ref={name}
    //       type="text"
    //       id="name"
    //       placeholder="Enter your Name"
    //       className="p-3 w-full rounded-lg bg-transparent border-[0.1rem] border-gray-400"
    //     />
    //   </div>
    //   <div className="flex flex-col w-5/6 sm:w-1/3 gap-2 px-6">
    //     <label className="text-gray-800" htmlFor="job">
    //       Job
    //     </label>
    //     <input
    //       ref={date}
    //       type="text"
    //       id="job"
    //       placeholder="software developer"
    //       className="p-3 w-full rounded-lg bg-transparent border-[0.1rem] border-gray-400"
    //     />
    //   </div>
    // </form>
  );
};

export default EventComp;
