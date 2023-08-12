import { TbEdit } from "react-icons/tb";

export function PlainUsername({ setEditable }) {
  return (
    <>
      <h2>mateoolarte</h2>
      <button
        type="button"
        onClick={() => setEditable(true)}
        aria-label="Edit"
        className="text-2xl text-violet-500"
      >
        <TbEdit />
      </button>
    </>
  );
}
