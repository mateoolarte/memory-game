import { Card } from "../Card";

export function Board() {
  const clientSide = typeof window !== "undefined";
  const username = clientSide && window.localStorage.getItem("username");
  const level = clientSide && window.localStorage.getItem("level");

  if (!username && !level) return null;

  return (
    <div>
      <Card />
    </div>
  );
}
