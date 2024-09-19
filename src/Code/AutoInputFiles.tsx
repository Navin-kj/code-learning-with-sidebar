import React, { useRef } from "react";

const AutoInputFiles = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log({ file });
    }
  };
  return (
    <div>
      <h3>Auto Input files using Ref</h3>
      <div>
        <input
          type="file"
          style={{ display: "none" }}
          ref={inputRef}
          onChange={handleFileChange}
        />
        <button onClick={handleClick}>Import</button>
      </div>
    </div>
  );
};

export default AutoInputFiles;
