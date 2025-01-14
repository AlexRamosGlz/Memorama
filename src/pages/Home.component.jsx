import Button from "../components/button/Button.component";
import { useNavigate } from "react-router";
import { useUI } from "../context/UIContext";

export default function Home() {
  const navigate = useNavigate();
  const { handleToogleModal } = useUI();

  function handleClick() {
    navigate("/app");
  }

  return (
    <div className="home">
      <div className="header">
        <h1 className="tittle">Memorama</h1>
        <Button onClick={handleClick} type={"start"}>
          Start
        </Button>
      </div>

      <img src="http://pngimg.com/uploads/dominoes/dominoes_PNG50.png" alt="domino background" />
    </div>
  );
}
