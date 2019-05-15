import React, { useState, useRef } from "react";

export const TextInput = ({ handleText }) => {
  const [text, updateText] = useState("");
  const inputRef = useRef(null);
  const internallyHandleText = e => {
    e.preventDefault();
    handleText(text);
    updateText("");
    inputRef.current.focus();
  };
  return (
    <div>
      <form onSubmit={internallyHandleText}>
        <input
          value={text}
          ref={inputRef}
          onChange={e => updateText(e.target.value)}
        />
        <button onClick={internallyHandleText}>submit</button>
      </form>
    </div>
  );
};
