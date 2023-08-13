import { useEffect, useContext } from "react";

import { GAME_COMPLETED } from "@/actions";
import { StoreContext } from "@/context/StoreContext";

export function useGameCompleted() {
  const [state, dispatch] = useContext(StoreContext);
  const { game, settings } = state;
  const { successAttempts } = game;
  const { level } = settings;

  useEffect(() => {
    if (successAttempts.length === level) {
      dispatch({ type: GAME_COMPLETED });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [successAttempts]);
}
