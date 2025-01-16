import { BrowserRouter, Route, Routes } from "react-router";
import App from "./pages/App.component";
import Home from "./pages/Home.component";
import Footer from "./components/footer/Footer.component";
import Modal from "./components/Modal/Modal.components";
import { UIProvider } from "./context/UIContext";
import { GameProvider } from "./context/GameContext";

function Router() {
  return (
    <UIProvider>
      <GameProvider>
        <BrowserRouter>
          <Modal />
          <Routes>
            <Route element={<App />} path="/app" />
            <Route element={<Home />} path="/" />
          </Routes>
          <Footer />
        </BrowserRouter>
      </GameProvider>
    </UIProvider>
  );
}

export default Router;
