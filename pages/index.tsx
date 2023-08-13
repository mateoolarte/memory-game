import { Onboarding } from "@/components/Onboarding";
import { Game } from "@/components/Game";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useEffect, useState } from "react";

/*
Breakdown

- Configure data for localstorage

- Header component
- Input & Select component
- Congratulations component
- Statistics component
- Layout card
- Layout board

- Setup API
- Parse API response
- Cache API data
- Handle error in the api

- Loading state
- Error state
- Empty state

- Edit username
  - Limit number of characters
- Change level
- Set state with useReducer
  - Define actions
  - Define reducers

  - Unit & Funcional test
- Check lighthouse score
- Deploy to Vercel
- Document

*/

export default function Home() {
  const username = useLocalStorage("username");
  const level = useLocalStorage("level");

  const [isOnboarding, setIsOnboarding] = useState(false);

  useEffect(() => {
    if (!username.getItem() && !level.getItem()) {
      setIsOnboarding(true);
    }
  }, []);

  return (
    <>
      {isOnboarding && <Onboarding setIsOnboarding={setIsOnboarding} />}
      {!isOnboarding && <Game />}
    </>
  );
}
