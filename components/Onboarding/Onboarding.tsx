import { Button } from "../Button";
import { Input } from "../Input";
import { Logo } from "../Logo";
import { Select } from "../Select";

export function Onboarding() {
  // const clientSide = typeof window !== "undefined";
  // const username = clientSide && window.localStorage.getItem("username");
  // const level = clientSide && window.localStorage.getItem("level");

  // if (username && level) return null;
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
    <form className="bg-slate-50 flex flex-col w-11/12 max-w-md mx-auto mt-8 sm:mt-10 py-6 px-4 rounded-lg shadow gap-4">
      <div className="text-center">
        <Logo />
        <p className="mt-4 mb-2 text-slate-600 text-left text-xl font-bold">
          ¡Welcome!
        </p>
        <p className="mb-2 text-slate-600 text-left">
          Before start the game you need to complete the information below to
          give you a personalized experience.
        </p>
      </div>
      <Input id="username" label="Username" placeholder="Ex. mateoolarte" />
      <Select
        label="Game Level"
        id="level"
        options={options}
        placeholder="Select between Easy, Medium, Hard"
      />
      <Button type="submit">
        Save
      </Button>
      <p className="text-slate-500 text-left text-sm mt-2">
        Don't worry you only need to do this once
      </p>
    </form>
  );
}
