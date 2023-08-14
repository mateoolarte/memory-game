import { useState, useContext } from "react";

import { StoreContext } from "@/context/StoreContext";

import { levels } from "@/data/levels";
import { GAME_START } from "@/actions";

import { Select } from "../Select";
import { Button } from "../Button";

export function Congratulations() {
  const [state, dispatch] = useContext(StoreContext);
  const { settings } = state;
  const { username, level } = settings;

  const [updateLevel, setUpdateLevel] = useState(level);

  function handleStart(e) {
    e.preventDefault();

    dispatch({ type: GAME_START, payload: Number(updateLevel) });
  }

  return (
    <div className="box">
      <span className="text-center text-5xl">🎉</span>
      <h2 className="text-slate-600 text-center text-xl font-bold">
        ¡Congratulations! {username}
      </h2>
      <p className="mb-2 text-slate-600">
        You have been completed the game successfully, now you can try again
        changing the level
      </p>
      <Select
        required
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
