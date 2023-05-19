import React, { useMemo } from "react";
import Tile from "../../home/shared/Tile";
import { KGuest } from "../../../core/constatnt/KGuest";

const Guest = () => {
  const memoizeKGuest = useMemo(() => KGuest, []);
  return (
    <>
      <p className="mt-4">What is the size of the guest list?</p>
      <div className="grid grid-cols-3 w-full gap-3 mt-4">
        {memoizeKGuest.map((e) => (
          <Tile
            icon={e.iconPath}
            title={e.title}
            description={e.desription}
            key={e.iconPath}
            height="9rem"
          />
        ))}
      </div>
    </>
  );
};

export default Guest;
