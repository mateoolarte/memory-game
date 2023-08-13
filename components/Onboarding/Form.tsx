import { levels } from "@/data/levels";

import { Button } from "../Button";
import { Input } from "../Input";
import { Select } from "../Select";
import { useState } from "react";
import { validateUsername } from "@/utils/validateUsername";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const initialErrors = {
  username: "",
  level: "",
};

export function Form({ setIsOnboarding }) {
  const localUsername = useLocalStorage("username");
  const localLevel = useLocalStorage("level");

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

    localUsername.setItem(username);
    localLevel.setItem(level);

    setIsOnboarding(false);
  }

  console.log({ level });

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
