import type { FC } from "react";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { sadButtonClicked } from "./action";

type SadIncrementorProps = {};

const SadIncrementor: FC<SadIncrementorProps> = () => {
  const dispatch = useDispatch();

  function increment() {
    dispatch(sadButtonClicked);
  }

  return (
    <div>
      <h3>Are you sad?</h3>
      <button
        onClick={increment}
        className="bg-blue-700 hover:cursor-pointer px-3 py-1 rounded"
      >
        Yes
      </button>
    </div>
  );
};

export default memo(SadIncrementor);
