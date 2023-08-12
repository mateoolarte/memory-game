import { useEffect } from "react";

import { getAnimals } from "@/services/animals";
import { transformData } from "@/utils/transformData";
import {
  INIT_FETCH_DATA,
  SUCCESS_FETCH_DATA,
  FAIL_FETCH_DATA,
} from "@/actions";

export function useFetchData(options) {
  const { nItems, dispatch } = options;

  useEffect(() => {
    dispatch({ type: INIT_FETCH_DATA });

    if (typeof window !== "undefined" && window.localStorage.getItem("data")) {
      dispatch({
        type: SUCCESS_FETCH_DATA,
        payload: transformData(JSON.parse(window.localStorage.getItem("data"))),
      });
    } else {
      getAnimals(nItems)
        .then((res) => {
          dispatch({
            type: SUCCESS_FETCH_DATA,
            payload: transformData(res),
          });
          if (typeof window !== "undefined") {
            window.localStorage.setItem("data", JSON.stringify(res));
          }
        })
        .catch((err) => {
          dispatch({ type: FAIL_FETCH_DATA });
          console.log({ err });
        });
    }
  }, [nItems, dispatch]);
}
