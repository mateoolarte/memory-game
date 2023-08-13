import { useEffect, useContext } from "react";

import { SUCCESS_ATTEMPT, ERROR_ATTEMPT, VALIDATE_ATTEMPT } from "@/actions";
import { StoreContext } from "@/context/StoreContext";

const DELAY_TIMESPAN = 1100;

export function useValidateAttempt() {
  const [state, dispatch] = useContext(StoreContext);
  const { game } = state;
  const { firstOption, secondOption } = game;

  useEffect(() => {
    const turnCompleted = firstOption.reference && secondOption.reference;
    const areOptionsEqual = firstOption.reference === secondOption.reference;

    if (turnCompleted) {
      dispatch({ type: VALIDATE_ATTEMPT });

      if (areOptionsEqual) {
        setTimeout(() => {
          dispatch({ type: SUCCESS_ATTEMPT, payload: firstOption.reference });
        }, DELAY_TIMESPAN);
      } else {
        setTimeout(() => {
          dispatch({ type: ERROR_ATTEMPT });
        }, DELAY_TIMESPAN);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstOption, secondOption]);
}
