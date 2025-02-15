import { useEffect, useState } from "react";
import Light from "./light";

export const Lights = ({ lights = ["red", "orange", "green"] }) => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((prev) => {
        if (prev === lights.length - 1) {
          return 0;
        } else return prev + 1;
      });
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [active]);
  return (
    <div className="lights">
      {lights.map((color, index) => (
        <Light key={index} isActive={index == active} color={color} />
      ))}
    </div>
  );
};
