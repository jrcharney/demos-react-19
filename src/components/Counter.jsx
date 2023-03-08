// "useState" tell React that we want to keep track of some information in this component.
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // Prevent a situation involving a stale state (see Manav's repo)
  return (
    <>
      <p>Here is the count: {count}</p>
      <button
        type="button"
        className="rounded bg-green-500 px-2 py-4 text-white"
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Update Count
      </button>
    </>
  );
}
