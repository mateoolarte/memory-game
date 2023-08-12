import { useState } from "react";

import { PlainUsername } from "./PlainUsername";
import { EditableUsername } from "./EditableUsername";

export function Username() {
  const [editable, setEditable] = useState(false);
  // const clientSide = typeof window !== "undefined";
  // const username = clientSide && window.localStorage.getItem("username");

  // if (!username) return null;

  function handleUpdate(e) {
    e.preventDefault();
  }

  return (
    <div className="flex gap-2">
      {!editable && <PlainUsername setEditable={setEditable} />}

      {editable && (
        <EditableUsername
          handleUpdate={handleUpdate}
          setEditable={setEditable}
        />
      )}
    </div>
  );
}
