import { useEffect } from "react";

import { useGame } from "../context/GameContext";
import { useUI } from "../context/UIContext";

import Card from "../components/card/card.component";
import Button from "../components/button/Button.component";
import "../index.scss";
import ConfigPanel from "../components/configPanel/ConfigPanel.component";
import Loader from "../components/Loader/Loader.component";

export default function App() {
  const { fillGameArray, clicks } = useGame();
  const { isLoading, handleTooglePanel } = useUI();

  useEffect(() => {
    //fillGameArray([1, 2, 3, 4, 5, 6]);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      <main className="app">
        {!isLoading && (
          <>
            <Card>Card</Card>
            <Card>Card</Card>
            <Card>Card</Card>
            <Card>Card</Card>
            <Card>Card</Card>
            <Card>Card</Card>
            <Card>Card</Card>
            <Card>Card</Card>
            <Card>Card</Card>
            <Card>Card</Card>
            <Card>Card</Card>
            <Card>Card</Card>
            <Card>Card</Card>
            <Card>Card</Card>
            <Card>Card</Card>
            <Card>Card</Card>
            <Card>Card</Card>
            <Card>Card</Card>
            <Card>Card</Card>
            <Card>Card</Card>
            <Card>Card</Card>
            <Card>Card</Card>
            <Card>Card</Card>
            <Card>Card</Card>
          </>
        )}
        <Button type="settings" onClick={handleTooglePanel}>
          <img src="https://img.icons8.com/?size=100&id=2969&format=png&color=7048e8"></img>
        </Button>
        <ConfigPanel />
      </main>
      <div className="app--footer">
        <p className="timer">01:21</p>
        <p className="clicks">clicks<i>{clicks}</i></p>
      </div>
    </>
  );
}
