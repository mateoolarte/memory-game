import { useContext } from "react";

import { StoreContext } from "@/context/StoreContext";

import { Header } from "../Header";
import { Username } from "../Username";
import { Board } from "../Board";

export function Game() {
  const [state] = useContext(StoreContext);
  const { username, level } = state?.settings;

  if (!username && level === 0) return null;

  return (
    <>
      <Header>
        <Username />
      </Header>

      <Board />
    </>
  );
}
