import { useState } from "react";
import { TbCircleCheck, TbCircleX } from "react-icons/tb";

import { validateUsername } from "@/utils/validateUsername";

import { Input } from "../Input";

export function EditableUsername({ username, handleUpdate, setEditable }) {
  const [updateUsername, setUpdateUsername] = useState(username);
  const [errors, setErrors] = useState({ username: "" });

  function handleUsername(value) {
    validateUsername(value, { errors, update: setErrors });

    setUpdateUsername(value);
  }

  return (
    <>
      <Input
        required
        id="username"
        value={updateUsername}
        onChange={handleUsername}
        error={errors.username}
      />
      <button
        type="submit"
        aria-label="Update"
        className="text-2xl sm:text-3xl text-violet-500"
        onClick={() => handleUpdate(updateUsername)}
      >
        <TbCircleCheck />
      </button>
      <button
        type="submit"
        aria-label="Cancel"
        className="text-2xl sm:text-3xl text-rose-500"
        onClick={() => setEditable(false)}
      >
        <TbCircleX />
      </button>
    </>
  );
}
