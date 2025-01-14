import Button from "../components/button/Button.component";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/app");
  }

  return (
    <div className="home">
      Home
      <Button onClick={handleClick} type={"start"}>Start</Button>
    </div>
  );
}
