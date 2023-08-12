import { useReducer } from "react";

import { useFetchData } from "@/hooks/useFetchData";
import { initialState, reducer } from "@/reducer";

import { Statistics } from "../Statistics";
import { Cards } from "../Cards";

export function Board() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const clientSide = typeof window !== "undefined";
  // const username = clientSide && window.localStorage.getItem("username");
  // const level = clientSide && window.localStorage.getItem("level");

  // if (!username && !level) return null;
  const { data, loading, firstOption, secondOption } = state;
  useFetchData({ nItems: 6, dispatch });

  return (
    <section className="max-w-5xl mx-auto mb-8">
      <Statistics />
      <Cards
        data={data}
        dispatch={dispatch}
        firstOption={firstOption}
        secondOption={secondOption}
      />
    </section>
  );
}
