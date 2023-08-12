import { useReducer } from "react";

import { useFetchData } from "@/hooks/useFetchData";
import { initialState, reducer } from "@/reducer";

import { Card } from "../Card";
import { Statistics } from "../Statistics";

export function Board() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const clientSide = typeof window !== "undefined";
  // const username = clientSide && window.localStorage.getItem("username");
  // const level = clientSide && window.localStorage.getItem("level");

  // if (!username && !level) return null;
  const { data, loading } = state;
  useFetchData({ nItems: 2, dispatch });

  console.log({ state });

  return (
    <div>
      <Statistics />
      {data.map((item) => {
        return (
          <Card
            key={item.id}
            name={item.name}
            reference={item.reference}
            image={item.image}
          />
        );
      })}
    </div>
  );
}
