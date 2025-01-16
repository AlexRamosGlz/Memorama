import { createContext, useReducer, useContext } from "react";

const initalState = {
  elements: [],
  columns: 4,
  rows: 2,
};

function reducer(state, action) {
  switch (action.type) {
    case "game/loading":
      return { ...state, elements: action.payload };
    case "columns/change":
      return { ...state, columns: action.payload };
    case "row/change":
      return { ...state, rows: action.payload };
    default:
      throw new Error("Uknown action type");
  }
}

const GameContext = createContext();

function GameProvider({ children }) {
  const [{ elements, columns, rows }, dispatch] = useReducer(
    reducer,
    initalState
  );

  function fillGameArray(elements) {
    const length = elements.length;
    const arr = new Array(length).fill(null);

    while (arr.includes(null)) {
      const randomIndex = Math.floor(Math.random() * length);
      if (arr[randomIndex] === null) arr[randomIndex] = elements[1];
    }
  }

  function handleColumnsChange(value) {
    dispatch({ type: "columns/change", payload: value });
  }

  function handleRowsChange(value) {
    dispatch({ type: "rows/change", payload: value });
  }

  return (
    <GameContext.Provider
      value={{
        fillGameArray,
        columns,
        rows,
        elements,
        handleColumnsChange,
        handleRowsChange,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

function useGame() {
  const context = useContext(GameContext);

  if (context === undefined)
    throw new Error("Game context was used outside the Game provider");

  return context;
}

export { useGame, GameProvider };
