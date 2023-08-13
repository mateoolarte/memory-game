import { useState } from "react";

import { levels } from "@/data/levels";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { GAME_START } from "@/actions";

import { Select } from "../Select";
import { Button } from "../Button";

export function Congratulations({ dispatch }) {
  const localUsername = useLocalStorage("username");
  const localLevel = useLocalStorage("level");
  const localData = useLocalStorage("data");

  const level = localLevel.getItem();

  const [updateLevel, setUpdateLevel] = useState(level);

  const username = localUsername.getItem();

  function handleStart(e) {
    e.preventDefault();

    if (updateLevel !== level) {
      localLevel.setItem(updateLevel);
      localData.removeItem();
    }

    dispatch({ type: GAME_START });
  }

  return (
    <div className="bg-slate-50 flex flex-col w-11/12 max-w-md mx-auto mt-8 sm:mt-10 py-6 px-4 rounded-lg shadow gap-4">
      <span className="text-center text-5xl">🎉</span>
      <h2 className="text-slate-600 text-center text-xl font-bold">
        ¡Congratulations! {username}
      </h2>
      <p className="mb-2 text-slate-600">
        You have been completed the game successfully, now you can try again
        changing the level
      </p>
      <Select
        label="Game Level"
        id="level"
        options={levels}
        placeholder="Select between Easy, Medium, Hard"
        value={updateLevel}
        onChange={(value) => setUpdateLevel(Number(value))}
      />
      <Button type="submit" onClick={handleStart}>
        Start
      </Button>
    </div>
  );
}
