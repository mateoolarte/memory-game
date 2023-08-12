import { TbCircleCheck, TbCircleX } from "react-icons/tb";

import { Input } from "../Input";

export function EditableUsername({ handleUpdate, setEditable }) {
  return (
    <>
      <Input id="username" />
      <button
        type="submit"
        aria-label="Update"
        className="text-2xl sm:text-3xl text-violet-500"
        onClick={handleUpdate}
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
