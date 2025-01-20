import { useState } from "react";

import { useGame } from "../../context/GameContext";

export default function Card({ children }) {
  const [isSelected, setIsSelected] = useState(false);
  const { handleUpdateClicks } = useGame();

  return (
    <div
      className="container"
      onClick={() => {
        handleUpdateClicks();
        setIsSelected(!isSelected);
      }}
    >
      <div className={`card ${isSelected && "flip"}`}>
        <div className="card--front text-justify">Front</div>
        <div className="card--back text-justify"></div>
      </div>
    </div>
  );
}
