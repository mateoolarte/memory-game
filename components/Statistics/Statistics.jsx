import { useContext } from "react";

import { StoreContext } from "@/context/StoreContext";

export function Statistics() {
  const [state] = useContext(StoreContext);
  const { game, settings } = state;
  const { level } = settings;
  const { successAttempts, errorAttempts } = game;

  return (
    <div className="flex items-center gap-4 mb-6 px-4 xl:px-0">
      <p className="success-attempts sm:text-lg text-green-500 font-medium">
        Success: {successAttempts.length}/{level}
      </p>
      <p className="errors-attempts sm:text-lg text-rose-500 font-medium">
        Errors: {errorAttempts}
      </p>
    </div>
  );
}
