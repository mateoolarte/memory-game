import { TbEdit } from "react-icons/tb";

export function PlainUsername({ username, setEditable }) {
  return (
    <>
      <h2>Hi, {username}</h2>
      <button
        type="button"
        onClick={() => setEditable(true)}
        aria-label="Edit"
        className="text-2xl"
      >
        <TbEdit />
      </button>
    </>
  );
}
