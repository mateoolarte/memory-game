import { useState } from "react";

import { SELECT_CARD, ERROR_ATTEMPT, SUCCESS_ATTEMPT } from "@/actions";

export function Card({ dispatch, reference, firstOption, secondOption }) {
  const [active, setActive] = useState("tail");

  function handleClick(e) {
    e.preventDefault();

    if (active === "tail") setActive("head");

    if (firstOption) {
      if (firstOption === e.currentTarget.name) {
        dispatch({ type: SUCCESS_ATTEMPT, payload: e.currentTarget.name });
      } else {
        dispatch({ type: ERROR_ATTEMPT });
      }
    } else {
      dispatch({ type: SELECT_CARD, payload: e.currentTarget.name });
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={firstOption && secondOption}
      name={reference}
    >
      <div className={`${active !== "tail" ? "hidden" : ""}`}>Tail</div>
      <div className={`${active !== "head" ? "hidden" : ""}`}>Head</div>
    </button>
  );
}
