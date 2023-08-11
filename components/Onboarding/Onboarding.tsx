import { Input } from "../Input";
import { Select } from "../Select";

export function Onboarding() {
  const clientSide = typeof window !== "undefined";
  const username = clientSide && window.localStorage.getItem("username");
  const level = clientSide && window.localStorage.getItem("level");

  if (username && level) return null;

  return (
    <form>
      <Input />
      <Select />
    </form>
  );
}
