import { useEffect, useReducer } from "react";

import { Onboarding } from "@/components/Onboarding";
import { Game } from "@/components/Game";

import { StoreContext } from "@/context/StoreContext";

import { initialState, reducer } from "@/reducer";
import { CHECK_USER_SETTINGS } from "@/actions";
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
  const store = useReducer(reducer, initialState);
  const [_, dispatch] = store;

  useEffect(() => {
    dispatch({ type: CHECK_USER_SETTINGS });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StoreContext.Provider value={store}>
      <Onboarding />
      <Game />
    </StoreContext.Provider>
  );
}
