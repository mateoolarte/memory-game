import { useEffect, useContext } from "react";

import { StoreContext } from "@/context/StoreContext";
import { getAnimals } from "@/services/animals";
import {
  INIT_FETCH_DATA,
  SUCCESS_FETCH_DATA,
  FAIL_FETCH_DATA,
} from "@/actions";

export function useFetchData() {
  const [state, dispatch] = useContext(StoreContext);
  const { game, settings } = state;
  const { level } = settings;
  const { data } = game;

  useEffect(() => {
    if (level > 0 && data.length === 0) {
      dispatch({ type: INIT_FETCH_DATA });

      getAnimals(level)
        .then((res) => {
          dispatch({
            type: SUCCESS_FETCH_DATA,
            payload: res,
          });
        })
        .catch((err) => {
          dispatch({ type: FAIL_FETCH_DATA, payload: err.message });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level, data]);
}
