import React, { useMemo } from "react";
import { KOccasion } from "../../../core/constatnt/KOccasion";
import Tile from "../../home/shared/Tile";
const Occasion = () => {
  const memoizeOcassion = useMemo(() => KOccasion, []);
  return (
    <>
      <p className="mt-4 ">What is the Occasion?</p>
      <div className="grid grid-cols-3 w-full gap-3 mt-4">
        {memoizeOcassion.map((e) => (
          <Tile icon={e.iconPath} title={e.title} key={e.iconPath} />
        ))}
      </div>
    </>
  );
};

export default Occasion;
