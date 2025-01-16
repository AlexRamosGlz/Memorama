import { useGame } from "../../context/GameContext";
import { useUI } from "../../context/UIContext";

import Button from "../button/Button.component";

function ConfigPanel() {
  const { columns, rows } = useGame();
  const { panelOpen, handleTooglePanel } = useUI();

  function handleSubmit() {
    handleTooglePanel();
  }

  if (!panelOpen) return null;

  return (
    <aside className="config-panel">
      <h2 className="panel-title">Game Settings</h2>
      <div className="input-box">
        <span>Columns: </span>
        <input type="range" defaultValue={4} min={4} max={8} id="column-range-bar" step={2} name="columns"/>
        <p>{columns}</p>
      </div>
      <div className="input-box">
        <span>Rows: </span>
        <input type="range" defaultValue={2} min={2} max={6} id="row-range-bar" step={2}/>
        <p>{rows}</p>
      </div>
      <Button type="start" onClick={handleSubmit}>
        Submit
      </Button>
    </aside>
  );
}

export default ConfigPanel;
