import { useEffect } from "react";

import { getAnimals } from "@/services/animals";
import { transformData } from "@/utils/transformData";
import {
  INIT_FETCH_DATA,
  SUCCESS_FETCH_DATA,
  FAIL_FETCH_DATA,
} from "@/actions";
import { isClientSide } from "@/constants";
import { useLocalStorage } from "./useLocalStorage";

export function useFetchData(options) {
  const { nItems, dispatch } = options;

  const { getItem, setItem } = useLocalStorage("data");
  const localData = getItem();

  useEffect(() => {
    dispatch({ type: INIT_FETCH_DATA });

    if (isClientSide && localData) {
      dispatch({
        type: SUCCESS_FETCH_DATA,
        payload: transformData(JSON.parse(localData)),
      });
    } else {
      getAnimals(nItems)
        .then((res) => {
          dispatch({
            type: SUCCESS_FETCH_DATA,
            payload: transformData(res),
          });
          if (isClientSide) {
            setItem(JSON.stringify(res));
          }
        })
        .catch((err) => {
          dispatch({ type: FAIL_FETCH_DATA });
          console.log({ err });
        });
    }
  }, [nItems, dispatch]);
}
