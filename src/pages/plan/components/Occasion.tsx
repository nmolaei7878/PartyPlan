import React, { useMemo } from "react";
import { KOccasion } from "../../../core/constatnt/KOccasion";
const Occasion = () => {
  const memoizeOcassion = useMemo(() => KOccasion, []);
  return (
    <>
      <p className="mt-4 ">What is the Occasion?</p>
      <div className="grid grid-cols-3 w-full gap-3 mt-4">
        {memoizeOcassion.map((e) => {
          console.log(e);
          return (
            <div className="bg-zinc-900 h-28 rounded-md flex items-center flex-col justify-center gap-2 px-2">
              <img className="h-12" src={e.iconPath} alt="" />
              <p className="px-2">{e.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Occasion;
