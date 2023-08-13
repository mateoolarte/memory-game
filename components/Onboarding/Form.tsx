import { useContext, useState } from "react";

import { StoreContext } from "@/context/StoreContext";
import { SET_USER_SETTINGS } from "@/actions";
import { levels } from "@/data/levels";
import { validateUsername } from "@/utils/validateUsername";

import { Button } from "../Button";
import { Input } from "../Input";
import { Select } from "../Select";

const initialErrors = {
  username: "",
  level: "",
};

export function Form() {
  const [_, dispatch] = useContext(StoreContext);

  const [username, setUsername] = useState("");
  const [level, setLevel] = useState("");
  const [errors, setErrors] = useState(initialErrors);

  function handleUsername(value) {
    validateUsername(value, { errors, update: setErrors });

    setUsername(value);
  }

  function handleLevel(value) {
    setLevel(Number(value));
  }

  function handleData(e) {
    e.preventDefault();

    const payload = { username, level: level };

    dispatch({
      type: SET_USER_SETTINGS,
      payload,
    });
  }

  return (
    <form onSubmit={handleData} className="flex flex-col gap-4">
      <Input
        required
        id="username"
        label="Username"
        placeholder="Ex. mateoolarte"
        value={username}
        onChange={handleUsername}
        error={errors.username}
      />
      <Select
        required
        label="Game Level"
        id="level"
        options={levels}
        placeholder="Select between Easy, Medium, Hard"
        value={level}
        onChange={handleLevel}
      />
      <Button type="submit">Save</Button>
    </form>
  );
}
