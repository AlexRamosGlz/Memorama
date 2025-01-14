import { createContext, useContext, useReducer } from "react";

const initialState = {
  modalOpen: false,
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "loaded":
      return { ...state, isLoading: false };
    case "modal/toogle":
      return { ...state, modalOpen: !state.modalOpen };
    default:
      throw new Error("Uknown action type!");
  }
}

const UIContext = createContext();

function UIProvider({ children }) {
  const [{ isLoading, modalOpen }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function handleToogleModal() {
    dispatch({ type: "modal/toogle" });
  }

  function handleLoading() {
    dispatch({ type: "loading" });
  }

  return (
    <UIContext.Provider
      value={{
        isLoading,
        modalOpen,
        handleToogleModal,
        handleLoading,
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
