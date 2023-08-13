import { Header } from "../Header";
import { Username } from "../Username";
import { Board } from "../Board";

export function Game() {
  return (
    <>
      <Header>
        <Username />
      </Header>

      <Board />
    </>
  );
}
