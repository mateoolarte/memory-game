import { useEffect, useReducer } from "react";

import { useFetchData } from "@/hooks/useFetchData";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { initialState, reducer } from "@/reducer";
import {
  SUCCESS_ATTEMPT,
  ERROR_ATTEMPT,
  GAME_COMPLETED,
  VALIDATE_ATTEMPT,
} from "@/actions";

import { Statistics } from "../Statistics";
import { Cards } from "../Cards";
import { Congratulations } from "../Congratulations";
import { Loading } from "../Loading";

export function Board() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { getItem } = useLocalStorage("level");

  const level = Number(getItem());
  const {
    data,
    loading,
    validating,
    finished,
    successAttempts,
    errorAttempts,
    firstOption,
    secondOption,
  } = state;

  useFetchData({ nItems: level, dispatch });

  useEffect(() => {
    const turnCompleted = firstOption.reference && secondOption.reference;
    const areOptionsEqual = firstOption.reference === secondOption.reference;

    if (turnCompleted) {
      dispatch({ type: VALIDATE_ATTEMPT });
      if (areOptionsEqual) {
        setTimeout(() => {
          dispatch({ type: SUCCESS_ATTEMPT, payload: firstOption.reference });
        }, 1100);
      } else {
        setTimeout(() => {
          dispatch({ type: ERROR_ATTEMPT });
        }, 1100);
      }
    }
  }, [firstOption, secondOption]);

  useEffect(() => {
    if (successAttempts.length === level) {
      dispatch({ type: GAME_COMPLETED });
    }
  }, [successAttempts]);

  if (loading) return <Loading />;

  return (
    <section className="max-w-5xl mx-auto mb-8">
      {!finished && (
        <>
          <Statistics
            level={level}
            success={successAttempts.length}
            errors={errorAttempts}
          />
          <Cards
            data={data}
            dispatch={dispatch}
            firstOption={firstOption}
            secondOption={secondOption}
            successAttempts={successAttempts}
            validating={validating}
          />
        </>
      )}

      {finished && <Congratulations dispatch={dispatch} />}
    </section>
  );
}
