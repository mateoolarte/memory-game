import { Header } from "@/components/Header";
import { Username } from "@/components/Username";
import { Onboarding } from "@/components/Onboarding";
import { Board } from "@/components/Board";

/*
Breakdown

- Configure data for localstorage
- Header component
- Input & Select component
- Setup API
- Parse API response
- Modal component
- Edit username
  - Limit number of characters
- Change level
- Cache API data
- Statistics component
- Layout card
- Layout board
- Set state with useReducer
  - Define actions
  - Define reducers
- Handle error in the api
- Unit & Funcional test
- Check lighthouse score
- Deploy to Vercel
- Document
- Loading state
- Error state
- Empty state

*/

export default function Home() {
  const clientSide = typeof window !== "undefined";
  const username = clientSide && window.localStorage.getItem("username");
  const level = clientSide && window.localStorage.getItem("level");
  const historialGames =
    clientSide && window.localStorage.getItem("played-games");

  if (true) {
    return <Onboarding />;
  }

  return (
    <>
      <Header>
        <Username />
      </Header>

      <section className="max-w-5xl mx-auto">
        <Board />
      </section>
    </>
  );
}
