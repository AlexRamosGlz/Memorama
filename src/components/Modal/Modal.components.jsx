import React from "react";
import { useNavigate } from "react-router";

import Button from "../button/Button.component";
import { useUI } from "../../context/UIContext";
import { useGame } from "../../context/GameContext";

export default function Modal() {
  const navigate = useNavigate();

  const { modalOpen, handleToogleModal } = useUI();
  const { highscore } = useGame();

  function handleQuit() {
    handleToogleModal();
    navigate("/");
  }

  return (
    <div className={`modal ${modalOpen ? " " : "hidden"}`}>
      <div className="modal-content">
        <main className="modal-main">
          <h2>You Won!</h2>
          <p>
            with{" "}
            <strong>
              <i>1</i>
            </strong>{" "}
            clicks{" "}
          </p>

          <p className="highscore">
            Highscore is <span>{highscore}</span>
          </p>
          <div className="btns-box">
            <Button type={"quit"} onClick={handleQuit}>
              Quit
            </Button>
            <Button type={"start"}>Restart</Button>
          </div>
        </main>
      </div>
    </div>
  );
}
