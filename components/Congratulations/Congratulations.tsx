import { Select } from "../Select";
import { Button } from "../Button";

export function Congratulations() {
  const options = [
    {
      value: 6,
      label: "Easy",
    },
    {
      value: 12,
      label: "Medium",
    },
    {
      value: 20,
      label: "Hard",
    },
  ];

  return (
    <div className="bg-slate-50 flex flex-col w-11/12 max-w-md mx-auto mt-8 sm:mt-10 py-6 px-4 rounded-lg shadow gap-4">
      <span className="text-center text-5xl">🎉</span>
      <h2 className="text-slate-600 text-center text-xl font-bold">
        ¡Congratulations! mateoolarte
      </h2>
      <p className="mb-2 text-slate-600">
        You have been completed the game successfully, now you can try again
        changing the level
      </p>
      <Select
        label="Game Level"
        id="level"
        options={options}
        placeholder="Select between Easy, Medium, Hard"
      />
      <Button type="submit">Start</Button>
    </div>
  );
}
