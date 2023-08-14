import { TbEdit } from "react-icons/tb";

export function PlainUsername({ username, setEditable }) {
  return (
    <>
      <h2 className="username-title">Hi, {username}</h2>
      <button
        type="button"
        onClick={() => setEditable(true)}
        aria-label="Edit"
        className="username-editBtn text-2xl"
      >
        <TbEdit />
      </button>
    </>
  );
}
