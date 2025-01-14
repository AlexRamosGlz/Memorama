import React from "react";

import Button from "../button/Button.component";
import { useUI } from "../../context/UIContext";

export default function Modal() {

  const { modalOpen, handleToogleModal } = useUI();

  return (
    <div className={`modal ${modalOpen ? ' ' : 'hidden'}`}>
      <main className="modal-content">
        <header className="header">
          <Button type={"close"} onClick={handleToogleModal}>x</Button>
        </header>
        Content
      </main>
    </div>
  );
}
