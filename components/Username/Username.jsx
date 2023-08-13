import { useState, useContext } from "react";

import { StoreContext } from "@/context/StoreContext";
import { UPDATE_USERNAME } from "@/actions";

import { PlainUsername } from "./PlainUsername";
import { EditableUsername } from "./EditableUsername";

export function Username() {
  const [state, dispatch] = useContext(StoreContext);
  const [editable, setEditable] = useState(false);

  const { username } = state?.settings;

  function handleUpdate(value) {
    dispatch({ type: UPDATE_USERNAME, payload: value });
    setEditable(false);
  }

  return (
    <div className="flex gap-2">
      {!editable && (
        <PlainUsername username={username} setEditable={setEditable} />
      )}

      {editable && (
        <EditableUsername
          username={username}
          handleUpdate={handleUpdate}
          setEditable={setEditable}
        />
      )}
    </div>
  );
}
