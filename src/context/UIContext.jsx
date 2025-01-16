import { createContext, useContext, useReducer } from "react";

const initialState = {
  modalOpen: false,
  isLoading: false,
  panelOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "loaded":
      return { ...state, isLoading: false };
    case "modal/toogle":
      return { ...state, modalOpen: !state.modalOpen };
    case "panel/toogle":
      return { ...state, panelOpen: !state.panelOpen };
    default:
      throw new Error("Uknown action type!");
  }
}

const UIContext = createContext();

function UIProvider({ children }) {
  const [{ isLoading, modalOpen, panelOpen }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function handleToogleModal() {
    dispatch({ type: "modal/toogle" });
  }

  function handleTooglePanel() {
    dispatch({ type: "panel/toogle" });
  }

  function handleLoading() {
    dispatch({ type: "loading" });
  }

  function handleSetLoaded() {
    dispatch({ type: "loaded" });
  }

  return (
    <UIContext.Provider
      value={{
        isLoading,
        modalOpen,
        handleToogleModal,
        handleLoading,
        handleSetLoaded,
        handleTooglePanel,
        panelOpen,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

function useUI() {
  const context = useContext(UIContext);

  if (context === undefined)
    throw new Error("UI context was used outside the UI provider");

  return context;
}

export { useUI, UIProvider };
