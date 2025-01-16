import { useState } from "react";

export default function Card({ children }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="container" onClick={() => setIsSelected(!isSelected)}>
      <div className={`card ${isSelected && "flip"}`}>
        <div className="card--front text-justify">Front</div>
        <div className="card--back text-justify"></div>
      </div>
    </div>
  );
}
