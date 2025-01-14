import React from "react";

import Button from "../button/Button.component";

export default function Modal() {
  return (
    <div className="modal">
      <main className="modal-content">
        <header className="header">
          <Button type={"close"}>x</Button>
        </header>
        Content
      </main>
    </div>
  );
}
