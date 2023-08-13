import { useState } from "react";

import { PlainUsername } from "./PlainUsername";
import { EditableUsername } from "./EditableUsername";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export function Username() {
  const { getItem, setItem } = useLocalStorage("username");
  const [editable, setEditable] = useState(false);

  const username = getItem();

  function handleUpdate(value) {
    setItem(value);
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
