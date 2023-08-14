import { CgDanger } from "react-icons/cg";
import { useContext } from "react";

import { StoreContext } from "@/context/StoreContext";
import { getAnimals } from "@/services/animals";
import {
  INIT_FETCH_DATA,
  SUCCESS_FETCH_DATA,
  FAIL_FETCH_DATA,
} from "@/actions";

import { Button } from "../Button";

export function Error({ error }) {
  const [state, dispatch] = useContext(StoreContext);
  const { settings } = state;
  const { level } = settings;

  function handleRetry(e) {
    e.preventDefault();

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

  return (
    <div className="box text-center">
      <CgDanger className="mx-auto text-5xl text-rose-500" />
      <h2 className="text-slate-600 text-xl font-bold">{error}</h2>
      <Button type="submit" onClick={handleRetry}>
        Try again
      </Button>
    </div>
  );
}
